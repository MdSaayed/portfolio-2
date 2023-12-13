import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "../pages/Home";


const Layout = () => {           
    return (
        <div>
            <Outlet />
            <Home />
            <ToastContainer />
        </div>
    );
};

export default Layout;