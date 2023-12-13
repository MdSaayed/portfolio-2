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
        loader: ({ params }) => fetch(`https://server-quuxm36gi-md-sayeds-projects.vercel.app/project/${params?.id}`)
      }      
]);

export default router;