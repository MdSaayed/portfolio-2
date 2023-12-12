import SectionTitle from "../sectionTitle/SectionTitle";


const Experience = () => {
    return (
        <div className="max-w-6xl mx-auto py-16">
            <SectionTitle title={`My Expertise`} subTitle={`My Skills`} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 pt-8">
                <div className="bg-[#F5FCFF] p-4  rounded space-y-3">
                    <img className="bg-white p-4 w-20 h-20" src="https://i.ibb.co/TbCQMB8/product-chain-1.png" alt="" />
                    <div className="space-y-3">
                        <h2 className="font-semibold text-2xl">Strategy & Direction</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] p-4 rounded space-y-3">
                    <img className="bg-white p-4 w-20 h-20" src="https://i.ibb.co/yyzbX38/tag-1.png" alt="" />
                    <div className="space-y-3">
                        <h2 className="font-semibold text-2xl">Branding & Logo</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] p-4 rounded space-y-3">
                    <img className="bg-white p-4 w-20 h-20" src="https://i.ibb.co/YhDZd4W/feather-pen-1.png" alt="" />
                    <div className="space-y-3">
                        <h2 className="font-semibold text-2xl">UI & UX Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
                <div className="bg-[#F5FCFF] p-4 rounded space-y-3">
                    <img className="bg-white p-4 w-20 h-20" src="https://i.ibb.co/r0d4Hzy/feather-pen-1-1.png" alt="" />
                    <div className="space-y-3">
                        <h2 className="font-semibold text-2xl">Webflow Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
