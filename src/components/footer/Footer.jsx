import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#F5FCFF] py-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center pb-16 border-b">
                    <div className="logo">
                        <h2 className="text-2xl font-semibold">LOGO</h2>
                    </div>
                    <ul className="flex gap-6">
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>Portfolio</Link>
                        </li>
                        <li>
                            <Link>About me </Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                        <li>
                            <Link>Testimonials</Link>
                        </li>
                        <li>
                            <Link>Portfolio</Link>
                        </li>
                    </ul>
                    <ul className="flex gap-4">
                        <li><Link><FaFacebookF /></Link></li>
                        <li><Link><CiInstagram /></Link></li>
                        <li><Link><CiTwitter /></Link></li>
                        <li><Link><FaLinkedinIn /></Link></li>
                    </ul>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-center mt-4"> &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved. </p>
                    <ul className="flex gap-6">
                        <li>
                            <Link>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link>Terms of Service</Link>
                        </li>
                        <li>
                            <Link>Cookies Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;