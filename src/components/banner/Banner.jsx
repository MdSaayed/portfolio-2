import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#FFFDD8]'>
            <div className='py-16 md:py-28 w-full bg-cover grid grid-cols-1  md:grid-cols-2 items-center justify-between max-w-6xl mx-auto px-2 md:px-0'>
                <div className='order-2 md:order-1 md:items-start items-center justify-start md:justify-center md:items-start flex flex-col'>
                    <h2 className='text-xl'>BEST PRICE : $866</h2>
                    <h1 className='font-extrabold text-3xl md:text-5xl'>NEW SMART PHONE</h1>
                    <p className='text-2xl font-semibold mt-2'>SAMSUNG GRAND 6</p>
                    <p className='my-4 text-center md:text-left'>There are many variations of passages of phones availables, but the majority have suffered alteration in some form.</p>
                    <button className='bg-blue-700 mt-6 rounded py-2 px-8 text-white '>BUY NOW</button>
                </div>
                <div className='flex justify-center order-1 md:order-2'>
                    <img className='w-1/2 md:w-2/3  py-16 md:py-0' src="https://i.ibb.co/MS7XCxn/layer-2-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;