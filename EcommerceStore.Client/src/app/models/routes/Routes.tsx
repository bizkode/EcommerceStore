import {createBrowserRouter} from "react-router";
import App from "../../layout/App.tsx";
import Catalog from "../../../features/catalog/Catalog.tsx";
import AboutPage from "../../../features/about/AboutPage.tsx";
import ProductDetails from "../../../features/catalog/ProductDetails.tsx";
import ContactPage from "../../../features/contact/ContactPage.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // { path: '', element: <HomePage /> },
            { path: '/catalog', element: <Catalog />},
            { path: '/about', element: <AboutPage />},
            { path: '/catalog/:id', element: <ProductDetails />},
            { path: '/contact', element: <ContactPage />}
        ]
    }
    
]);