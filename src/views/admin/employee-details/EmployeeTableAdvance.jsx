import React from 'react'
import MUIDataTable from 'mui-datatables'
import Avatar from "react-avatar";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

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
    {name: "email", label: "Email"},
    {name: "role", label: "Role"}
]

const rows = [
    ['Lindsey Stroud', 'lindsey.stroud@gmail.com', 'Manager'],
    ['Nicci Troiani', 'nicci.troiani@gmail.com', 'Manager'],
    ['Rebecca Moore', 'george.fields@gmail.com', 'CEO'],
    ['George Fields', 'rebecca.moore@gmail.com', 'Manager'],
    ['Jane Doe', 'jane.doe@gmail.com', 'Engineer'],
];

const EmployeeTableAdvance = () => {
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