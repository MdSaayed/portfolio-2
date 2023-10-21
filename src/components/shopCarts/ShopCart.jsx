import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';


const ShopCart = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto py-16 px-2 md:px-0'>
                <div className="bg-[url('https://i.ibb.co/1RYjyXc/main-home-banner-1-img.png')] bg-cover px-6 py-12 rounded-md">
                    <h2 className='font-bold text-2xl'>Game Joysticks</h2>
                    <div className="flex gap-4 items-center">
                        <button>Shop now</button>
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <div className="bg-[url('https://i.ibb.co/gVHh8X8/main-home-banner-2-img.png')] bg-cover px-6 py-12 rounded-md">
                    <h2 className='font-bold text-2xl'>Monitors & Keyboards</h2>
                    <div className="flex gap-4 items-center">
                        <button>Shop now</button>
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <div className="bg-[url('https://i.ibb.co/Wx0K2jV/main-home-banner-3-img.png')] bg-cover px-6 py-12 rounded-md">
                    <h2 className='font-bold text-2xl'>Sport Watches</h2>
                    <div className="flex gap-4 items-center">
                        <button>Shop now</button>
                        <AiOutlineArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;