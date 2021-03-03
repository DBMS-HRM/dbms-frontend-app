import React from "react"
import { Box, Button, Container } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const HomePage = () => {
    return(
        <Container>
            <Button>Admin User</Button>
            <Button>Employee User</Button>
        </Container>
    )
}

export default HomePage