import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";


const Signup = () => {
    const { signUpUser, signOutUser, updateUserData } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errPass, setErrPass] = useState('');
    const [errName, setErrName] = useState('');
    const [errEmail, setErrEamil] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photo.value;

        setErrPass('');
        setErrName('');
        setErrEamil('');

        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (name == '') {
            setErrName('Name is required.')
        }
        if (email == '') {
            setErrEamil('Email is required.')
        }
        if (!pattern.test(password)) {
            setErrPass('Password must be minimum six characters, at least one uppercase letter, one lowercase letter and one special character.');
            return;
        }


        if (name && email && password) {
            signUpUser(email, password)
                .then(res => {
                    toast.success('SignUp Successfully. Please login');
                    updateUserData(name, photoURL)
                        .then()
                        .catch()
                    signOutUser();
                    navigate('/signin');
                    setErrPass('');
                    setErrName('');
                    setErrEamil('');
                })
                .catch(err => toast.warning(err.message));

        }
    }

    return (
        <div className="grid lg:grid-cols-2 gap-6 items-center justify-center h-[100vh] px-4 lg:px-28 max-w-6xl mx-auto">
            <div>
                <img src="https://i.ibb.co/wM4mVL3/undraw-welcome-re-h3d9-1.png" alt="" />
            </div>
            <div>
                <div className="flex flex-col items-center text-[#333745] space-y-6 mb-6">
                    <h1 className="text-center text-5xl font-bold">SignUp</h1>
                    <p className="text-center">Fill in your credentials and click on the the Sign up button</p>
                </div>
                <form onSubmit={handleSignup} className="mx-auto">
                    <label className="text-[#838AA3]" htmlFor="name">Your name</label>
                    <input className="bg-[#FCFCFC] rounded placeholder-[#838AA3] border py-2 px-2 my-1 w-full" type="text" name="name" placeholder="Enter your name" /><br />
                    {
                        errName ? <p className="text-[12px] text-red-600 -mt-[5px]">{errName}</p> : ''
                    }
                    <label className="text-[#838AA3]" htmlFor="email">Your email</label>
                    <input className="bg-[#FCFCFC] rounded placeholder-[#838AA3] border py-2 px-2 my-1 w-full" type="text" name="email" placeholder="Enter your email" /><br />
                    {
                        errEmail ? <p className="text-[12px] text-red-600 -mt-[5px]">{errEmail}</p> : ''
                    }
                    <label className="text-[#838AA3]" htmlFor="password">Photo Url</label>
                    <input className="bg-[#FCFCFC] rounded placeholder-[#838AA3] border py-2 px-2 my-1 w-full" type="text" name="photo" placeholder="Enter your photo url" /><br />
                    <label className="text-[#838AA3]" htmlFor="password">Password</label>
                    <input className="bg-[#FCFCFC] rounded placeholder-[#838AA3] border py-2 px-2 my-1 w-full" type="password" name="password" placeholder="Enter your password" /><br />
                    {
                        errPass ? <p className="text-[12px] text-red-600 -mt-[5px] mb-[6px]">{errPass}</p> : ''
                    }
                    <input className="bg-[#6C63FF] py-2 w-full my-2 text-white rounded" type="submit" value={'SignUp'} />
                </form>
                <div>
                    <p className="text-center my-2">Already have an account? <Link className="text-[#6C63FF]" to={'/signin'}>Sign in</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;