import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";



const Signin = () => {
    const { signInUser, googleSignin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [errEmail, setErrEmail] = useState('');
    const [errPass, setErrPass] = useState('');


    // handle google signin
    const handleGoogleSignin = () => {
        googleSignin()
            .then(res => {
                toast.success('Login successfully.');
                location.state ? navigate(location.state) : navigate('/');
            })
            .then(err => console.log(err));
    }

    // handle signin
    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrEmail('');
        setErrPass('');

        if (email == '') {
            setErrEmail('Please enter your eamil.')
        }
        if (password == '') {
            setErrPass('Please enter your password.')
        }

        if (email && password) {
            signInUser(email, password)
                .then(res => {
                    setErrEmail('');
                    setErrPass('');
                    toast.success('Login successfully.');
                    location.state ? navigate(location.state) : navigate('/');

                })
                .catch(err => toast.warning("Invalid user login."));
        }
    }

    return (
        <div className="grid lg:grid-cols-2 gap-6 items-center justify-center h-[100vh] px-4 lg:px-28 max-w-6xl mx-auto">
            <div>
                <img src="https://i.ibb.co/wM4mVL3/undraw-welcome-re-h3d9-1.png" alt="" />
            </div>
            <div>
                <div className="flex flex-col items-center text-[#333745] space-y-6 mb-6">
                    <h1 className="text-center text-5xl font-bold">SignIn</h1>
                    <p className="text-center">Fill in your credentials and click on the the Sign up button</p>
                </div>
                <form onSubmit={handleSignin} className="mx-auto">
                    <label className="text-[#838AA3]" htmlFor="email">Your email</label>
                    <input className="bg-[#FCFCFC] rounded placeholder-[#838AA3] border py-2 px-2 my-1 w-full" type="text" name="email" placeholder="Enter your email" /><br />
                    {
                        errEmail ? <p className="text-[12px] text-red-600 -mt-[5px]">{errEmail}</p> : ''
                    }
                    <label className="text-[#838AA3]" htmlFor="password">Password</label>
                    <input className="bg-[#FCFCFC] rounded placeholder-[#838AA3] border py-2 px-2 my-1 w-full" type="password" name="password" placeholder="Enter your password" /><br />
                    {
                        errPass ? <p className="text-[12px] text-red-600 -mt-[5px]">{errPass}</p> : ''
                    }
                    <input className="bg-[#6C63FF] py-2 w-full my-2 text-white rounded" type="submit" value={'SignIn'} />
                </form>
                <div className="flex flex-col items-center justify-center space-y-4 mt-4">
                    <p>Or continue with</p>
                    <div className="flex gap-4">
                        <NavLink onClick={handleGoogleSignin}><FcGoogle className="text-4xl rounded border p-2" /></NavLink>
                        <NavLink><FaFacebook className="text-4xl rounded border p-2" /></NavLink>
                    </div>
                </div>
                <div>
                    <p className="text-center my-2">Already have an account? <Link className="text-[#6C63FF]" to={'/signup'}>SignUp</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;