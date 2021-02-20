import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Avatar from "react-avatar";

const useStyles = makeStyles({
    tableContainer: {
        boxShadow: "0 6px 18px 0 rgba(0,0,0,0.06)",
    },
    table: {
        minWidth: 650,
    },
    cell: {
        fontFamily: "'Poppins', sans-serif",
        "& span": {
            fontWeight: "500",
            "&.title": {
                color: "#323C47"
            }
        },
    },
    avatar: {
        marginRight: '1rem'
    }
});

function createData(name, email, role) {
    return { name, email, role };
}

const rows = [
    createData('Lindsey Stroud', 'lindsey.stroud@gmail.com', 'Manager'),
    createData('Nicci Troiani', 'nicci.troiani@gmail.com', 'Manager'),
    createData('Rebecca Moore', 'george.fields@gmail.com', 'CEO'),
    createData('George Fields', 'rebecca.moore@gmail.com', 'Manager'),
    createData('Jane Doe', 'jane.doe@gmail.com', 'Engineer'),
];

const EmployeeTable = () => {
    const classes = useStyles()
    return (
        <TableContainer className={classes.tableContainer} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.cell}><span>Name</span></TableCell>
                        <TableCell className={classes.cell} align="left"><span>Email</span></TableCell>
                        <TableCell className={classes.cell} align="left"><span>Role</span></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell className={classes.cell} component="th" scope="row">
                                <Avatar name={row.name} round={true} size={36} className={classes.avatar} />
                                <span className="title">{row.name}</span>
                            </TableCell>
                            <TableCell className={classes.cell} align="left">{row.email}</TableCell>
                            <TableCell className={classes.cell} align="left">{row.role}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmployeeTable;