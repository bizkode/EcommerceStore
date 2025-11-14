import Catalog from "../../features/catalog/Catalog.tsx";
import {useEffect, useMemo, useState} from "react";
import type {Product} from "../models/product.ts";
import {Container, Button, Box, ThemeProvider, createTheme, CssBaseline} from "@mui/material";
import NavBar from "./NavBar.tsx";


function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [darkMode, setDarkMode] = useState<boolean>(true);
    const palletType = darkMode ? 'dark' : 'light';
    const theme = useMemo(() => createTheme({
            palette: {
                mode: palletType,
                background: {
                    default: darkMode ? '#121212' : '#eaeaea'
                }
            }
        })
        , [darkMode]);
    const mode = useMemo(() => ({
        toggleDarkMode: () => setDarkMode(!darkMode)
    }), [darkMode]);

    const addProduct = () => {
        setProducts(prevState => [...prevState, {
            id: products.length * 48,
            description: 'ddsfd',
            image: 'https://picsum.photos/1024/1024',
            type: "",
            brand: '',
            name: "product " + products.length,
            price: Math.floor(Math.random() * 1000)
        }]);
    }


    useEffect(() => {
        fetch('http://localhost:5203/api/products').then(res => res.json()).then(products => {
            setProducts(products);
        });
    }, [])


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar darkMode={darkMode} setDarkMode={mode.toggleDarkMode}/>
            <Box
                sx={{
                    minHeight: '100vh',
                    background: darkMode ? '#002147' : '#eaeaea'
                }}
            >
                <Container>

                    <Button variant='contained' onClick={addProduct}>Add Product</Button>

                    <Catalog addProduct={addProduct} products={products}/>

                </Container>
            </Box>

        </ThemeProvider>

    )
}

export default App
