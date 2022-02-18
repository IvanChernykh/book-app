import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            light: '#1976d2',
            main: '#1565c0',
            dark: '#01579b'
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 680,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})
export default theme