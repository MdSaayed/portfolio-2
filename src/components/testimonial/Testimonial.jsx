
import { FaStar } from "react-icons/fa6";
import SectionTitle from "../sectionTitle/SectionTitle";


const Testimonial = () => {
    return (
        <div className='bg-[#F5FCFF] py-16'>
            <div className="max-w-6xl mx-auto">
                <div>
                    <SectionTitle subTitle={`Clients Feedback`} title={`Customer testimonials`} />
                </div>
                <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-4 mt-16">
                    <div className="rounded border p-4 space-y-3 border-[#006B6A]">
                        <div className="flex gap-2">
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                        </div>
                        <div className='space-y-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                            <div className='flex gap-4 items-center'>
                                <img className='w-[40px] h-[40px]' src="https://i.ibb.co/n8KRr9Y/Avatar-Image.png" alt="" />
                                <div>
                                    <h2 className='font-semibold'>Dianne Russell</h2>
                                    <p>Starbucks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded border p-4 space-y-3 border-[#006B6A]">
                        <div className="flex gap-2">
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                        </div>
                        <div className='space-y-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                            <div className='flex gap-4 items-center'>
                                <img className='w-[40px] h-[40px]' src="https://i.ibb.co/rGTq687/Avatar-Image-2.png" alt="" />
                                <div>
                                    <h2 className='font-semibold'>Kristin Watson</h2>
                                    <p>Louis Vuitton</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded border p-4 space-y-3 border-[#006B6A]">
                        <div className="flex gap-2">
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                            <FaStar className='text-[#006B6A]' />
                        </div>
                        <div className='space-y-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                            <div className='flex gap-4 items-center'>
                                <img className='w-[40px] h-[40px]' src="https://i.ibb.co/9g2Vwmk/Avatar-Image-1.png" alt="" />
                                <div>
                                    <h2 className='font-semibold'>Kathryn Murphy</h2>
                                    <p>McDonald's</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;