import React, {useEffect, useState} from 'react'
import MUIDataTable from 'mui-datatables'
import Avatar from "react-avatar";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {Box, IconButton} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {userTActions} from "../../../store/user";
import {toast} from "react-toastify";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {useHistory} from "react-router";

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

const EmployeeTableAdvance = () => {
    let loading = false
    let history = useHistory()
    let dispatch = useDispatch()
    let [rows, setData] = useState([])

    const advancedColumns = [
        {name: "name", label: "Name",
            options: {
                customBodyRender: (value) => {
                    return (
                        <Box>
                            <Avatar  name={value} round={true} size={36} />
                            <span style={{marginLeft: "1rem", fontWeight: "500", color: "#323C47"}}>{value}</span>
                        </Box>
                    );
                }
            }
        },
        {name: "branch", label: "Branch"},
        {name: "department", label: "Department"},
        {name: "jobTitle", label: "Job Title"},
        {name: "employmentStatus", label: "Employment Status"},
        {name: "payGrade", label: "Pay Grade"},
        {name: "actions", label: "Actions",
            options: {
                customBodyRender: (value) => {
                    return (
                        <Box>
                            <IconButton onClick={() => history.push(`/employee/view-employee/${value}`)} >
                                <VisibilityIcon />
                            </IconButton>
                        </Box>
                    );
                }
            }
        }
    ]

    useEffect(() => {
        async function getEmployees() {
            loading = true
            const [res,fetchedData] = await dispatch(userTActions.getSubordinates())
            loading = false
            if(res.status !== 200) {
                toast.error(res.message)
                return
            }
            let dataRows = []
            fetchedData.data.map(item => {
                let dataRow = []
                dataRow.push(`${item.firstName} ${item.lastName}`)
                dataRow.push(item.branchName)
                dataRow.push(item.departmentName)
                dataRow.push(item.jobTitle)
                dataRow.push(item.employmentStatus)
                dataRow.push(item.payGrade)
                dataRow.push(item.employeeId)
                dataRows.push(dataRow)
            })
            setData([...dataRows])
        }
        getEmployees()
    },[])

    return (
        <MuiThemeProvider theme={theme}>
            <MUIDataTable
                title={"Employee Details"}
                data={rows}
                columns={advancedColumns}
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

export default EmployeeTableAdvance;