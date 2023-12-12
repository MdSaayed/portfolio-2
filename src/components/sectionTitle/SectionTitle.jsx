import React from 'react';

const SectionTitle = ({ subTitle,title, desc }) => {
    return (
        <div className='max-w-6xl'>
            <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">{subTitle}</p>
                <h2 className='text-4xl font-bold'>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default SectionTitle;