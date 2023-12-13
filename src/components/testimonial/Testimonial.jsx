
import { FaStar } from "react-icons/fa6";
import SectionTitle from "../sectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Element } from 'react-scroll';


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://server-quuxm36gi-md-sayeds-projects.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])



    return (
        <Element name="testimonials" >
            <div className='bg-[#F5FCFF] py-16'>
                <div className="max-w-6xl mx-auto">
                    <div>
                        <SectionTitle subTitle={`Clients Feedback`} title={`Customer testimonials`} />
                    </div>
                    <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-4 mt-16">
                        {
                            reviews?.map(rev => <>
                                <div className="rounded border p-4 space-y-3 border-[#006B6A]">
                                    <div className="flex gap-2">
                                        <FaStar className='text-[#006B6A]' />
                                        <FaStar className='text-[#006B6A]' />
                                        <FaStar className='text-[#006B6A]' />
                                        <FaStar className='text-[#006B6A]' />
                                        <FaStar className='text-[#006B6A]' />
                                    </div>
                                    <div className='space-y-3'>
                                        <p>{rev.text}</p>
                                        <div className='flex gap-4 items-center'>
                                            <img className='w-[40px] h-[40px]' src={rev.image} alt="" />
                                            <div>
                                                <h2 className='font-semibold'>{rev.name}</h2>
                                                <p>{rev.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Testimonial;