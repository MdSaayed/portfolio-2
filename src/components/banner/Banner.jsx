const Banner = () => {
    return (
        <div className="bg-[#F5FCFF] py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-6 md:gap-2 py-8 max-w-6xl mx-auto">
                <div className="order-2 md:order-1 space-y-4">
                    <p className="font-semibold">Hey, I am Sayed</p>
                    <h1 className="text-5xl font-bold text-[#282938]">I create <span className="text-[#5E3BEE]">product design</span> and brand<br /> experience</h1>
                    <p className="text-[#282938]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <div>
                        <button className="bg-[#5E3BEE] py-2 px-4 rounded-sm text-white">Get In Touch</button>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <img src="https://i.ibb.co/F4H4N2v/Group-11-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
