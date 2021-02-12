import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00617E',
            contrastText: '#fff',
        },
        secondary: {
            main: '#FFB13D',
            contrastText: '#fff',
        },
        text: {
            primary: '#808191',
            secondary: '#6A707E'
        },
        typography: {
            fontFamily: "'Poppins', sans-serif",
        }
    },
});

export default theme;