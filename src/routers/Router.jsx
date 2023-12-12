import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import SinglePortfolio from "../components/portfolio/SinglePortfolio";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/project/:id",
        element: <SinglePortfolio />,
        loader: ({ params }) => fetch(`http://localhost:3000/project/${params?.id}`)
      }      
]);

export default router;