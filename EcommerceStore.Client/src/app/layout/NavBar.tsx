import { DarkMode, LightMode} from "@mui/icons-material";
// import Brightness4 from "@mui/icons-material/Brightness4";
import {AppBar, Toolbar, Typography, IconButton} from "@mui/material";

type Props = {
    darkMode: boolean;
    setDarkMode: () => void;
}
const NavBar = ({setDarkMode, darkMode}: Props) => {
    return (
        <AppBar position="sticky" sx={{width: '100%'}}>
            <Toolbar>
                <Typography>Ecommerce</Typography>
                <IconButton onClick={setDarkMode} color="inherit">
                    {darkMode ? <DarkMode/> : <LightMode sx={{color:'yellow'}}/> }
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;