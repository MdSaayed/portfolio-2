import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Element } from 'react-scroll';

const About = () => {
    return (
        <Element name='about'>
            <div className='max-w-6xl mx-auto py-16'>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div>
                        <img className='w-4/5' src="https://i.ibb.co/NNZ92yk/About-Me.png" alt="" />
                    </div>
                    <div>
                        <SectionTitle subTitle={`About`} title={`About Me`} desc={`Dedicated and versatile web developer with expertise in JavaScript, React, Node.js, Express.js, MongoDB, HTML, and CSS. Thrives on creating seamless user experiences and dynamic applications. Detail-oriented and committed to staying at the forefront of web technologies. Excited to collaborate on innovative projects and contribute to the evolving landscape of digital solutions.`} />
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default About;