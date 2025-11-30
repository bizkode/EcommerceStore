import type {Product} from "../../app/models/product.ts";
import ProductList from "./ProductList.tsx";

import {useEffect, useState} from "react";


const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        fetch('http://localhost:5203/api/products').then(res => res.json()).then(products => {
            setProducts(products);
        });
    }, [])
    return (
        <>

            <ProductList products={products}/>
        </>


    );
};

export default Catalog;