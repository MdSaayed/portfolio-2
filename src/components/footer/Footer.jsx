import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiLogoInstagramAlt } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className='bg-[#283646] pt-16'>
            <div className='flex items-center gap-8 flex-col text-white justify-center max-w-6xl mx-auto'>
                <p className='text-2xl text blod font-bold text-blue-700'>TECH ZONE</p>
                <div className='flex gap-8'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                    <Link>Services</Link>
                    <Link>Terms & conditions</Link>
                </div>
                <div className='flex text-blue-700 text-2xl gap-4'>
                    <BsFacebook />
                    <AiFillTwitterCircle />
                    <BiLogoInstagramAlt />
                </div>
                <div className='border-t w-full py-8'>
                    <p className='text-center'>Copyright Satyam Tech Zone</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;