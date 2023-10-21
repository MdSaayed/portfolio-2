import React from 'react';

const NewsLatter = () => {
    return (
        <div>
            <dir className='bg-black py-12 my-0 px-2 md:px-0 '>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto  items-center">
                    <div className='text-white'>
                        <h1 className='text-3xl font-bold'>Sign up to Newsletter!</h1>
                        <p>Subscribe to our newsletter to receive great deals...</p>
                    </div>
                    <div className='flex'>
                        <input className='border w-3/4 rounded-l bg-white h-10' type="email" />
                        <input className='bg-blue-700 text-white h-10 py-1 w-1/4 px-8 rounded-r' type="submit" value="Subscribe" />
                    </div>
                </div>
            </dir>
        </div>
    );
};

export default NewsLatter;