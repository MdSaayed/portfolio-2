import { Element } from 'react-scroll';


const Banner = () => {
    return (
        <Element name='/'>
            <div className="bg-[#F5FCFF] py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-6 md:gap-2 py-8 max-w-6xl mx-auto">
                    <div className="order-2 md:order-1 space-y-4">
                        <p className="font-semibold">Hey, I am Sayed</p>
                        <h1 className="text-5xl font-bold text-[#282938]">Elevate Presence with Engaging <span className="text-[#5E3BEE]">Frontend.</span> Discover Today.</h1>
                        <p className="text-[#282938]">Crafting dynamic frontend solutions to elevate digital presence. Engage users with seamless, innovative designs. Explore the future of web experiences.</p>
                        <div>
                            <a className="bg-[#5E3BEE] py-2 px-4 rounded-sm text-white" href="https://drive.google.com/uc?export=download&id=1RRkeT9DmBtKuRseRTHG-5IXIp8UO-lJ1" download="YourResume.pdf">
                                <button>Download Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <img src="https://i.ibb.co/F4H4N2v/Group-11-1.png" alt="" />
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Banner;
