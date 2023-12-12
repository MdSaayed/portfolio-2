import SectionTitle from "../sectionTitle/SectionTitle";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbFileTypeHtml } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";



const Experience = () => {
    return (
        <div className="max-w-6xl mx-auto py-16">
            <SectionTitle title={`My Expertise`} subTitle={`My Skills`} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 pt-8">
                <div className="bg-[#F5FCFF] p-4  rounded space-y-3">
                    <FaReact className="bg-white p-4 w-20 h-20 text-[#006B6A]" />
                    <div className="space-y-3">
                        <h2 className="font-semibold text-2xl"> React Developer</h2>
                        <p>React specialist: Crafting dynamic interfaces, managing state, and building scalable, modern web applications with precision.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] p-4 rounded space-y-3">
                    <DiJavascript1 className="bg-white p-4 w-20 h-20 text-[#006B6A]" />
                    <div className="space-y-3">
                        <h2 className="font-semibold text-2xl">JavaScript Developer</h2>
                        <p>JavaScript aficionado adept at crafting dynamic, interactive web applications. Excels in DOM manipulation, asynchronous programming, and ES6 features.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] p-4 rounded space-y-3">
                    <FaNodeJs className="bg-white p-4 w-20 h-20 text-[#006B6A]" />
                    <div className="space-y-3">
                        <h2 className="font-semibold text-2xl">Node.js</h2>
                        <p>Node.js enthusiast specializing in server-side development. Proficient in building scalable and efficient backend solutions for diverse applications.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] p-4 rounded space-y-3">
                    <SiExpress className="bg-white p-4 w-20 h-20 text-[#006B6A]" />
                    <div className="space-y-3">
                        <h2 className="font-semibold text-2xl">Express.js</h2>
                        <p>Express.js expert, skilled in creating robust and efficient server-side applications. Proficient in routing, middleware, and RESTful API development.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] p-4 rounded space-y-3">
                    <TbFileTypeHtml className="bg-white p-4 w-20 h-20 text-[#006B6A]" />
                    <div className="space-y-3">
                        <h2 className="font-semibold text-2xl">HTML</h2>
                        <p>HTML craftsman with expertise in structuring and presenting content on the web. Proficient in semantic markup and responsive design.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] p-4 rounded space-y-3">
                    <IoLogoCss3 className="bg-white p-4 w-20 h-20 text-[#006B6A]" />
                    <div className="space-y-3">
                        <h2 className="font-semibold text-2xl">CSS Stylist</h2>
                        <p>CSS maestro with a keen eye for design, transforming concepts into visually appealing and responsive web interfaces.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] p-4 rounded space-y-3">
                    <IoLogoCss3 className="bg-white p-4 w-20 h-20 text-[#006B6A]" />
                    <div className="space-y-3">
                        <h2 className="font-semibold text-2xl">Tailwind CSS Specialist</h2>
                        <p>Tailwind CSS maestro streamlining development with utility-first classes. Craftsmanship in building modern, responsive, and visually appealing interfaces.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
