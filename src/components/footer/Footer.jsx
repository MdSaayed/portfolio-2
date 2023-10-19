import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#283646] py-16'>
            <div className='grid grid-cols-5 gap-6 max-w-6xl mx-auto'>
                <div className='text-white col-span-2'>
                    <p className='text-xl font-bold'>LOGO</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis earum consectetur et ipsum laboriosam repellat praesentium eum id magnam.</p>
                    <p className='mt-8'>Copyright Satyam Studio</p>
                </div>
                <div className='text-white'>
                    <h2 className='text-xl font-bold mb-4'>Services</h2>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                </div>
                <div className='text-white'>
                    <h2 className='text-xl font-bold mb-4'>Services</h2>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                </div>
                <div className='text-white'>
                    <h2 className='text-xl font-bold mb-4'>Services</h2>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                    <Link className='block'>Illustration</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;