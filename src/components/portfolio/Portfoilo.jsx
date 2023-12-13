import React, { useEffect, useState } from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { FaDribbble } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import {FacebookIcon, FacebookShareButton} from "react-share";



const Portfoilo = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://server-quuxm36gi-md-sayeds-projects.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])


    return (
        <Element name='portfolio'>

            <div className='max-w-6xl mx-auto py-16'>
                <div className='flex justify-between items-center'>
                    <SectionTitle subTitle={`Recent Projects`} title={`My Portfolio`} />
                    <div>
                        <button className='bg-[#E62872] text-white rounded py-1 px-4 flex items-center gap-2'><FaDribbble />Visit My Dribbble</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
                    {
                        projects?.map(project => <>
                            <div className='shadow-lg hover:shadow-xl rounded'>
                                <img src={project.image} alt="" />
                                <div className='space-y-2 p-6 mt-4'>
                                    <h2 className="text-3xl font-bold">{project.name}</h2>
                                    <p>{project?.description.length > 60 ? project.description.slice(0, 60) + '...' : project.description}</p>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <Link to={`/project/${project._id}`}>
                                                <button className='flex items-center gap-2 border-b-2 py-1 border-[#006B6A] font-semibold'>View In Details <MdOutlineArrowOutward className='text-[#006B6A] ' /></button>
                                            </Link>
                                        </div>
                                        <div>
                                            <FacebookShareButton url={`https://astonishing-kataifi-211be6.netlify.app/project/${project._id}`}>
                                                <FacebookIcon className='w-[22px] h-[22px] rounded-full' />
                                            </FacebookShareButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </Element>
    );
};

export default Portfoilo;