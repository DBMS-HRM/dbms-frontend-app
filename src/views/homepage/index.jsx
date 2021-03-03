import React from "react"
import { Box, Button, Container } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import {useHistory} from "react-router";
import logo from "../../JupLogo.svg";

const HomePage = () => {
    const history = useHistory()
    return(
        <Container style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <img src={logo} style={{position: "fixed", top: "50%", left: "50%"}}/>
            <Box mx={3} mb={5}>
                <Typography variant="h4">Welcome to Jupiter HRMS!!!</Typography>
            </Box>
            <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box mx={3}>
                    <Button variant="contained" color="primary" onClick={() => history.push('/admin/sign-in')}>Admin User</Button>
                </Box>
                <Box mx={3}>
                    <Button variant="contained" color="primary" onClick={() => history.push('/employee/sign-in')}>Employee User</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default HomePage