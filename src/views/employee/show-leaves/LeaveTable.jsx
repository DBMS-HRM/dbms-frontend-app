import React, {useEffect, useState} from 'react'
import MUIDataTable from 'mui-datatables'
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {toast} from "react-toastify";
import api from "../../../api";
import {getDate} from '../../../helpers/functions'

const theme = createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {
                fontFamily: "'Poppins', sans-serif",
            },
            body: {
                color: "#6A707E"
            }
        },
        MuiTypography: {
            h6: {
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "400"
            }
        },
        MuiButton: {
            root: {
                fontFamily: "'Poppins', sans-serif",
                color: "#6A707E"
            }
        },
        MuiTableRow: {
            root: {
                '&.Mui-selected': {
                    backgroundColor: 'rgba(0, 97, 126, 0.08) !important',
                }
            }
        }
    }
})

const LeaveTable = (props) => {

    let loading = false
    let [rows, setData] = useState([])
    let res, fetchedData

    useEffect(() => {
        async function getEmployees() {
            loading = true
            if(props.view==='my') {
                [res,fetchedData] = await api.leave.get.myLeaves({leaveType: props.leaveType})
            }
            else {
                [res,fetchedData] = await api.leave.get.supervisorLeaves({leaveStatus: props.leaveStatus})
            }
            loading = false
            let dataRows = []

            if(res && fetchedData) {
                if(res.status !== 200) {
                    toast.error(res.message)
                    return
                }
                fetchedData.data.map(item => {
                    let dataRow = []
                    if(props.view!=='my') {
                        dataRow.push(`${item.firstName} ${item.lastName}`)
                        dataRow.push(item.jobTitle)
                        dataRow.push(item.payGrade)
                        dataRow.push(item.employmentStatus)
                    }
                    else {
                        dataRow.push(getDate(item.fromDate))
                        dataRow.push(getDate(item.toDate))
                        dataRow.push(item.leaveStatus)
                    }
                    if(props.leaveStatus!=="Pending") {
                        dataRow.push((getDate(item.reviewedDate)))
                    } else {
                        dataRow.push(`/${item.leaveId}/${item.employeeId}`)
                    }
                    dataRows.push(dataRow)
                })
            }

            setData([...dataRows])
        }
        getEmployees()
    },[])


    return (
        <MuiThemeProvider theme={theme}>
            <MUIDataTable
                title={"Employee Details"}
                data={rows}
                columns={props.advancedColumns}
                options={{
                    download: false,
                    filter: false,
                    print: false,
                    viewColumns: false,
                    selectableRows: false
                }}
            />
        </MuiThemeProvider>
    )
}

export default LeaveTable;