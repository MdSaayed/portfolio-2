import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';

const About = () => {
    return (
        <div className='max-w-6xl mx-auto py-16'>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                <div>
                    <img className='w-4/5' src="https://i.ibb.co/NNZ92yk/About-Me.png" alt="" />
                </div>
                <div>
                    <SectionTitle subTitle={`About`} title={`About Me`} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.<br /> Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.`} />
                </div>
            </div>
        </div>
    );
};

export default About;