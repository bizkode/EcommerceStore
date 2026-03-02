import {createBrowserRouter, Navigate} from "react-router";
import App from "../../layout/App.tsx";
import Catalog from "../../../features/catalog/Catalog.tsx";
import AboutPage from "../../../features/about/AboutPage.tsx";
import ProductDetails from "../../../features/catalog/ProductDetails.tsx";
import ContactPage from "../../../features/contact/ContactPage.tsx";
import ServerError from "../../errors/ServerError.tsx";
import NotFound from "../../errors/NotFound.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // { path: '', element: <HomePage /> },
            { path: '/catalog', element: <Catalog />},
            { path: '/about', element: <AboutPage />},
            { path: '/catalog/:id', element: <ProductDetails />},
            { path: '/contact', element: <ContactPage />},
            { path: '/server-error', element: <ServerError />},
            { path: '/not-found', element: <NotFound />},
            { path: '*', element: <Navigate to={'/not-found'} />},
        ]
    }
    
], {future:{
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
}} );