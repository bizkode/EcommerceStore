import ProductList from "./ProductList.tsx";
import {useFetchProductsQuery} from "./catalog.ts";


const Catalog = () => {
    const {data, isLoading} = useFetchProductsQuery();
    
    if(isLoading || !data) return <div>Loading...</div>
    return (
        <>

            <ProductList products={data}/>
        </>


    );
};

export default Catalog;