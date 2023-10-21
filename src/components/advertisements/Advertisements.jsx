import React, { useEffect, useState } from 'react';

const Advertisement = (props) => {
    const { advertisement } = props;

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const moveNext = () => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % advertisement?.length);

            // Stop the interval when all advertisements have been shown
            if (currentSlide === advertisement?.length - 1) {
                clearInterval(interval);
            }
        };

        const interval = setInterval(moveNext, 2000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [advertisement, currentSlide]);

    return (
        <div className="max-w-6xl py-5 overflow-hidden">
            <div className="hero-row flex">
                {advertisement?.map((adv, index) => (
                    <div
                        key={index}
                        id={`slide${index + 1}`}
                        className={`hero-item relative w-full sm:w-1/2 md:w-1/4 xl:w-1/4 ${
                            currentSlide === index ? 'translate-x-0' : currentSlide === (index - 1 + advertisement?.length) % advertisement?.length ? 'translate-x-full' : '-translate-x-full'
                        } transition-transform duration-500 ease-in-out`}
                    >
                        <img src={adv?.advertisementsImg} className="w-full h-auto max-h-[197px] sm:h-auto object-cover" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Advertisement;
