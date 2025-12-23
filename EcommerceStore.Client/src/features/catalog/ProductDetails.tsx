import {useLocation, useParams} from "react-router";
import type {Product} from "../../app/models/product.ts";
import {useEffect, useState} from "react";
import {Button, Divider, Grid, Table, TableBody, TableContainer, TableRow, TextField, Typography, TableCell} from "@mui/material";

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const location = useLocation();
    const { imageUrl } = location.state;
    useEffect(()=>{
        fetch(`http://localhost:5203/api/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err));
    }, [id])
    if(!product){return <div>Loading...</div>}
    const productDetails = [
        {label:'Name', value:product.name},
        {label:'Description', value:product.description},
        {label:'Type', value:product.type},
        {label:'Brand', value:product.brand},
        {label:'Quantity in stock', value:product.quantity},
    ];
   
    
    return (
        <div>
            
            <Grid container spacing={6} maxWidth={'lg'} sx={{mx: 'auto'}}>
                <Grid size={6}>
                    <img src={imageUrl} alt={product?.name} style={{width: '100%'}} />
                </Grid>
                <Grid>
                    <Typography variant={"h3"}>{product?.name}</Typography>
                    <Divider sx={{mb:2}} />
                    <Typography variant={"h4"} >${(product?.price / 100).toFixed(2)}</Typography>
                    <TableContainer>
                        <Table sx={{
                            '&td': {fontSize: '1rem'}
                        }}>
                            <TableBody>
                                {
                                    productDetails.map((detail, index) => (
                                        <TableRow key={index}>
                                            <TableCell sx={{fontWeight: 'bold'}}>{detail.label}</TableCell>
                                            <TableCell>{detail.value}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Grid container spacing={2} marginTop={3}>
                        <Grid size={6}>
                            <TextField 
                                variant={"outlined"} 
                                type={"number"}
                                label="Quantity in Cart"
                                fullWidth={true}
                                defaultValue={1}
                            />
                            
                        </Grid>
                        
                        <Grid size={6} >
                            <Button 
                                variant="contained" 
                                color="primary"
                                size={"large"}
                                fullWidth={true}
                                sx={{height: '100%'}}
                                >Add to Cart</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductDetails;