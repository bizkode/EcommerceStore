import {useMemo, useState} from "react";
import {Container, Box, ThemeProvider, CssBaseline} from "@mui/material";
import NavBar from "./NavBar.tsx";
import {Outlet} from "react-router";
import {lightTheme, darkTheme} from "./themes.ts";

function App() {

    const [darkMode, setDarkMode] = useState<boolean>(true);

    const mode = useMemo(() => ({
        toggleDarkMode: () => setDarkMode(!darkMode)
    }), [darkMode]);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            
            <CssBaseline/>
            <NavBar darkMode={darkMode} setDarkMode={mode.toggleDarkMode}/>
            <Box sx={{ padding: "20px" }}>
                <Container>
                    <Outlet/>
                </Container>
            </Box>

        </ThemeProvider>

    )
}

export default App
