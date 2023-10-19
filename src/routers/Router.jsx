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


const router = createBrowserRouter([
    {
        path: "/",
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
                element: <AddProducts />
            },
            {
                path: '/products/:name',
                element: <Products />,
                loader: ({params})=> fetch(`http://localhost:3000/products/${params.name}`)
            },
            {
                path: '/product/:id',
                element: <SingleProduct />,
                loader: ({params})=> fetch(`http://localhost:3000/product/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <ProductUpdate />,
                loader: ({params})=> fetch(`http://localhost:3000/product/${params.id}`)
            },
            {
                path: '/brands',
                element: <ProductBrands />,
                loader: ()=> fetch('http://localhost:3000/brands')
            }
        ]
    },
]);

export default router;