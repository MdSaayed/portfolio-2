import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Signup from "../components/signup/Signup";
import Signin from "../components/signin/Signin";
import AddProducts from "../products/AddProducts";
import ProductBrands from "../components/productBrand/ProductBrands";
import Products from "../products/Products";
import ProductUpdate from "../products/ProductUpdate";
import SingleProduct from "../products/SingleProduct";
import Carts from "../components/carts/Carts";
import PrivateRoute from './PrivateRoute';
import Error from "../pages/404";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/addproducts',
                element: <PrivateRoute><AddProducts /></PrivateRoute>
            },
            {
                path: '/products/:name',
                element: <PrivateRoute><Products /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-server-pi.vercel.app/products/${params.name}`)
            },
            {
                path: '/product/:id',
                element: <PrivateRoute><SingleProduct /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-server-pi.vercel.app/product/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><ProductUpdate /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-server-pi.vercel.app/product/${params.id}`)
            },
            {
                path: '/brands',
                element: <ProductBrands />
            },
            {
                path: '/carts',
                element: <PrivateRoute><Carts /></PrivateRoute>,
            }
        ]
    },
]);

export default router;