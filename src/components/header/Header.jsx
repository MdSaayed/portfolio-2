import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { GrClose } from 'react-icons/gr';
import { HiBars3 } from 'react-icons/hi2';
import { IoIosLogOut } from 'react-icons/io';
import { useState } from "react";
import { Link } from "react-scroll";



const Header = () => {
    const [menu, setMenu] = useState(false);
    // user signout handle





    return (
        <div className="shadow-lg ">
            {/* mobile and tablet navbar */}
            <nav className="md:flex justify-between items-center py-2 max-w-6xl mx-auto flex lg:hidden p-2 lg:px-0">
                <ul>
                    <li>
                        <NavLink className={'text-xl font-extrabold'}>LOGO</NavLink>
                    </li>
                </ul>
                <ul>
                    <div className="flex gap-3 items-center">
                        <HiBars3 onClick={() => setMenu(!menu)} className="text-2xl" />
                    </div>

                    <ul className={menu ? "flex items-center gap-6 relative" : 'hidden'}>
                        <ul className={'flex shadow-sm flex-col justify-center absolute -top-9 z-10 bg-white items-center -right-2 h-[100vh] gap-4 w-[300px]'}>
                            <GrClose onClick={() => setMenu(!menu)} className={'absolute top-4 left-2 z-10'} />

                            <li className="text-xl">
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#5E3BEE] font-semibold" : "text-[#1C1E53]"}>Home</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/yourticked" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#F5167E] font-semibold" : ""}>Portfolio</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/blogs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#F5167E] font-semibold" : ""}>Blogs</NavLink>
                            </li>

                            <li className="text-xl">
                                <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Logout</NavLink>
                            </li>

                            <>
                                <li className="text-xl">
                                    <NavLink to="/signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#F5167E] font-semibold" : ""}>Signin</NavLink>
                                </li>
                            </>

                        </ul>
                    </ul>
                </ul>
            </nav>

            {/* desktop navbar  */}
            <nav className="md:hidden justify-between items-center py-3 max-w-6xl mx-auto hidden lg:flex">
                <ul>
                    <li>
                        <NavLink className={'text-xl font-extrabold'}>LOGO</NavLink>
                    </li>
                </ul>
                <ul className="flex items-center gap-6">
                    <li>
                        <Link to="/" smooth={true} duration={900} className="your-link-styles cursor-pointer">Home</Link>
                    </li>
                    <li>
                        <Link to="portfolio" smooth={true} duration={900} className="your-link-styles cursor-pointer">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={900} className="your-link-styles cursor-pointer">About me</Link>
                    </li>
                    <li>
                        <Link to="testimonials" smooth={true} duration={900} className="your-link-styles cursor-pointer">Testimonials</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={900} className="your-link-styles cursor-pointer">Contact</Link>
                    </li>

                </ul>
                <ul>
                    <li>
                        <button className="border-[#5E3BEE] border py-[6px] px-4 rounded-sm">Get In Touch</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;