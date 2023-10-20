import { useContext, useState } from "react";
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