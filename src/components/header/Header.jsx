import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import { GrClose } from 'react-icons/gr';
import { HiBars3 } from 'react-icons/hi2';
import { IoIosLogOut } from 'react-icons/io';



const Header = () => {
    const { signOutUser, user } = useContext(AuthContext);
    const [menu, setMenu] = useState(false);
    console.log(menu)
    // user signout handle
    const handleSignOutUser = () => {
        signOutUser()
            .then(res => toast.success('Logout successfully.'))
    }


    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    const changeTheme = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])

    return (
        <div className="shadow-md">
            {/* mobile and tablet navbar */}
            <nav className="md:flex justify-between items-center py-2 max-w-6xl mx-auto flex lg:hidden p-2 lg:px-0">
                <ul>
                    <li><NavLink className={'text-xl font-extrabold'}><p className='text-2xl text blod font-bold text-blue-700'>TECH ZONE</p>
                    </NavLink></li>
                </ul>
                <ul>
                    <div className="flex gap-3 items-center">
                        {
                            user ? <>
                                <li className="text-center uppercase">
                                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active font-semibold text-[10px]" : ""}>{user?.displayName}</NavLink>
                                </li>
                                <li>
                                    <img className="w-[30px] h-[30px] rounded-full" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/8xpdsJy/user-demo.png'} alt="" />
                                </li>
                            </> : ''
                        }
                        <HiBars3 onClick={() => setMenu(!menu)} className="text-2xl" />
                    </div>

                    <ul className={menu ? "flex items-center gap-6 relative" : 'hidden'}>
                        <ul className={'flex shadow-sm flex-col justify-center absolute -top-9 z-10 bg-white items-center -right-2 h-[100vh] gap-4 w-[300px]'}>
                            <GrClose onClick={() => setMenu(!menu)} className={'absolute top-4 left-2 z-10'} />

                            <li className="text-xl">
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-blue-700 font-semibold" : ""}>Home</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/addproducts" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-blue-700 font-semibold" : ""}>Add product</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/brands" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-blue-700 font-semibold" : ""}>Brands</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to={`/carts`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-blue-700 font-semibold" : ""}>Carts</NavLink>
                            </li>
                            {
                                user ? <>
                                    <li className="text-xl">
                                        <NavLink onClick={handleSignOutUser} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Logout</NavLink>
                                    </li>
                                </> :
                                    <>
                                        <li className="text-xl">
                                            <NavLink to="/signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#F5167E] font-semibold" : ""}>Signin</NavLink>
                                        </li>
                                    </>
                            }
                        </ul>
                    </ul>
                </ul>
            </nav>

            {/* desktop navbar  */}
            <nav className="md:hidden justify-between items-center py-2 max-w-6xl mx-auto hidden lg:flex">
                <ul>
                    <li><NavLink className={'text-xl font-extrabold'}><p className='text-2xl text blod font-bold text-blue-700'>TECH ZONE</p>
                    </NavLink></li>
                </ul>
                <ul className="flex items-center gap-6">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-blue-700 font-semibold" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addproducts" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-blue-700 font-semibold" : ""}>Add product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/brands" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-blue-700 font-semibold" : ""}>Brands</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/carts`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-blue-700 font-semibold" : ""}>Carts</NavLink>
                    </li>
                    <li>
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input onChange={changeTheme} checked={theme == 'light' ? false : true} type="checkbox" />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </li>
                    {
                        user ? <>
                            <ul className="flex gap-1 items-center">
                                <li>
                                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active font-semibold" : ""}>{user?.displayName}</NavLink>
                                </li>
                                <li>
                                    <img className="w-[30px] h-[30px] rounded-full" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/8xpdsJy/user-demo.png'} alt="" />
                                </li>
                            </ul>
                            <li>
                                <NavLink onClick={handleSignOutUser} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active font-semibold" : ""}><IoIosLogOut className="text-[1.3rem]" /></NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to="/signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-blue-700 font-semibold" : ""}>Signin</NavLink>
                                </li>
                            </>
                    }

                </ul>
            </nav>
        </div>
    );
};

export default Header;