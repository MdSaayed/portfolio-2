
import { useEffect, useState } from 'react';
import SectionTitle from './../components/sectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])


    return (
        <div className="max-w-6xl mx-auto py-16">
            <SectionTitle subTitle={`From My Blog`} title={`Our Recent Updates, Blog, Tips, Tricks & More`} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
                {
                    blogs?.map(blg => <>
                        <div className='shadow rounded hover:shadow-md'>
                            <img className='h-[200px] w-full' src={blg?.image} alt="" />
                            <div className='space-y-3 mt-3 p-4 '>
                                <h2 className="text-2xl font-bold">{blg.title}</h2>
                                <p>{blg?.content.length > 60 ? blg?.content.slice(0, 60)+'...' : blg.content}</p>
                                <Link to={`/blg/${blg._id}`}>
                                    <button className='flex items-center gap-2 border-b-2 py-1 border-[#006B6A] font-semibold'>View In Details <MdOutlineArrowOutward className='text-[#006B6A] ' /></button>
                                </Link>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Blogs;