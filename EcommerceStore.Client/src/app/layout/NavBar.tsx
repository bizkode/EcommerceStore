import { DarkMode, LightMode, ShoppingCart} from "@mui/icons-material";
// import Brightness4 from "@mui/icons-material/Brightness4";
import {AppBar, Toolbar, Typography, IconButton, ListItem, List, Badge, Box} from "@mui/material";
import {NavLink} from "react-router";

type Props = {
    darkMode: boolean;
    setDarkMode: () => void;
}

const midLinks = [
    {title: 'catalog', link: '/catalog'},
    {title: 'about', link: '/about'},
    {title: 'contact', link: '/contact'},
];

const rightLinks = [
    {title: 'login', link: '/login'},
    {title: 'register', link: '/register'},
    
]
const NavBar = ({setDarkMode, darkMode}: Props) => {
    return (
        <AppBar position="sticky" sx={{width: '100%'}}>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography component={NavLink} to={'/'}>Ecommerce</Typography>
                <Box>
                    <List  sx={{display: 'flex'}}>
                        {
                            midLinks.map(({title, link}) => (
                                <ListItem component={NavLink}
                                          to={link}
                                          key={title}
                                          sx={{
                                              color: 'inherit',
                                              typography:'h6',
                                              textDecoration: 'none',
                                              '&:hover': {
                                                  color: 'grey.500',
                                              },
                                              '&.active': {
                                                  color: 'secondary.main',
                                              }
                                          }}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))
                        }
                    </List>  
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <IconButton size={'large'}>
                        <Badge badgeContent={'4'} color={"secondary"} >
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                    <List sx={{display: 'flex'}}>
                        {
                            rightLinks.map(({title, link}) => (
                                <ListItem component={NavLink}
                                          to={link}
                                          key={title}
                                          sx={{color: 'inherit', typography:'h6'}}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))
                        }
                    </List>
                    <IconButton sx={{border: darkMode ? '1px solid white' : '1px solid yellow'}} onClick={setDarkMode} color="inherit">
                        {darkMode ? <DarkMode/> : <LightMode sx={{color:'yellow'}}/> }
                    </IconButton>
                </Box>
                
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;