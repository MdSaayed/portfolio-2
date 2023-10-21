import React from 'react';

const Reviews = () => {
    return (
        <div className='max-w-6xl mx-auto py-16 px-2 md:px-0'>
            <div>
                <h2 className='text-center text-4xl font-bold mb-8'>What they says</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-2 items-center shadow hover:shadow-md rounded border p-8'>
                        <p className='text-center'>Smart thermostat, energy-saving hero. Regulates temperature seamlessly, cutting down bills without compromising comfort.</p>
                        <img className='w-[7rem]' src="https://i.ibb.co/VwmNTTm/download-removebg-preview.png" alt="" />
                        <img className='rounded-full w-[70px]' src="https://i.ibb.co/JzYwDwD/testimonials1-jpg.webp" alt="" />
                        <h2 className='text-xl font-bold'>Michiel Huisman</h2>
                    </div>
                    <div className='flex flex-col gap-2 items-center shadow hover:shadow-md rounded border p-8'>
                        <p className='text-center'>The noise-canceling headphones are a game-changer. Immersive sound quality and peace in a chaotic world.</p>
                        <img className='w-[7rem]' src="https://i.ibb.co/VwmNTTm/download-removebg-preview.png" alt="" />
                        <img className='rounded-full w-[70px]' src="https://i.ibb.co/SXxwN18/img-test1-png.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Hamlet Tuong</h2>
                    </div>
                    <div className='flex flex-col gap-2 items-center shadow hover:shadow-md rounded border p-8'>
                        <p className='text-center'>Outstanding laptop, lightning-fast, crystal-clear display, and lightweight for portability. Ideal for work and entertainment.</p>
                        <img className='w-[7rem]' src="https://i.ibb.co/VwmNTTm/download-removebg-preview.png" alt="" />
                        <img className='rounded-full w-[70px]' src="https://i.ibb.co/2tNN1T0/img-test-png.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Michiel Huisman</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;