import {Container, Box, ThemeProvider, CssBaseline} from "@mui/material";
import NavBar from "./NavBar.tsx";
import {Outlet} from "react-router";
import {lightTheme, darkTheme} from "./themes.ts";
import {useAppSelector} from "../store/store.ts";


function App() {

    const {isDarkMode} = useAppSelector(state => state.ui);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>

            <CssBaseline/>
            <NavBar/>
            <Box sx={{padding: "20px"}}>
                <Container>
                    <Outlet/>
                </Container>
            </Box>

        </ThemeProvider>

    )
}

export default App
