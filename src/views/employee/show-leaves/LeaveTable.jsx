import React, {useEffect, useState} from 'react'
import MUIDataTable from 'mui-datatables'
import Avatar from "react-avatar";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {userTActions} from "../../../store/user";
import {toast} from "react-toastify";
import api from "../../../api";

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

    useEffect(() => {
        async function getEmployees() {
            loading = true
            const [res,fetchedData] = await api.leave.get.leaves(props.leaveType)
            loading = false
            if(res.status !== 200) {
                toast.error(res.message)
                return
            }
            let dataRows = []
            fetchedData.data.map(item => {
                let dataRow = []
                dataRow.push(`${item.firstName} ${item.lastName}`)
                dataRow.push(item.jobTitle)
                dataRow.push(item.payGrade)
                dataRow.push(item.employmentStatus)
                dataRow.push(item.requestedDate)
                if(props.leaveType!=="Pending") {
                    dataRow.push(item.reveiwedDate)
                } else {
                    dataRow.push(item.leaveId)
                }
                dataRows.push(dataRow)
            })
            setData([...dataRows])
        }
        getEmployees()
    },[])


    return (
        <MuiThemeProvider theme={theme}>
            <MUIDataTable
                key={props.leaveType}
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