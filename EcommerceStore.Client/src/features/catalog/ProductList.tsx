import {Box} from "@mui/material";
import type {Product} from "../../app/models/product.ts";
import ProductCard from "./ProductCard.tsx";

type Props = { products: Product[] };
const ProductList = ({products}: Props) => {
    return (
        <Box
            sx={{display: "flex", flexWrap: 'wrap', gap: 3, justifyContent: "center"}}
        >

            {

                products.map((product, index) => {
                    return <ProductCard product={product} key={index}/>

                })
            }
        </Box>
    );
};

export default ProductList;