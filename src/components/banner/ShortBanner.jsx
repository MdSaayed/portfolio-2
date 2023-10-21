import React from 'react';

const ShortBanner = () => {
    return (
        <div className='max-w-6xl mx-auto py-16'>
            <div className="bg-[url('https://i.ibb.co/LSDbTtT/banner-24.jpg')] py-24 bg-cover px-6 rounded-md">
                <p className='font-bold text-[1rem] text-blue-500'>WEEKEND DISCOUNT</p>
                <h2 className='font-bold text-4xl mt-1 mb-2'>Momentum Headphones</h2>
                <p className='text-xl my-4'>Don't miss the last opportunity.</p>
                <div className="flex gap-4 items-center">
                    <button className='bg-blue-700 py-1 px-6 rounded text-white'>Shop now</button>
                </div>
            </div>
        </div>
    );
};

export default ShortBanner;