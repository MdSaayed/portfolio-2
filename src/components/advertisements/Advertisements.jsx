import React, { useEffect, useState } from 'react';

const Advertisement = (props) => {
    const { advertisement } = props;

    console.log(advertisement);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        'https://i.ibb.co/6RXwD67/8642509.jpg',
        'https://i.ibb.co/KXfCJYK/18494352-6003862.jpg',
        'https://i.ibb.co/gMDsDnt/31696846-7841490.jpg',
        'https://i.ibb.co/6WybFWy/19335415-6083243.jpg',
    ];

    useEffect(() => {
        const moveNext = () => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        };

        const interval = setInterval(moveNext, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-6xl py-5 overflow-hidden">
            <div className="hero-row flex">
                {advertisement?.map((adv, index) => (
                    <div
                        key={index}
                        id={`slide${index + 1}`}
                        className={`hero-item relative w-full ${currentSlide === index ? 'translate-x-0' : currentSlide === (index - 1 + slides.length) % slides.length ? 'translate-x-full' : '-translate-x-full'
                            } transition-transform duration-500 ease-in-out`}
                    >
                        <img src={adv?.advertisementsImg} className="w-full h-[197px] sm:h-auto object-cover" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Advertisement;
