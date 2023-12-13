import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Element } from 'react-scroll';


const ContactUs = () => {
    const sendMail = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;

        const data = {
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            message: message,
        };
        const response = await fetch('https://server-quuxm36gi-md-sayeds-projects.vercel.app/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response) {
            Swal.fire("Message send successfully.");
            form.reset();
        }
    }


    return (
        <Element name="contact">
            <div id="contact" className="max-w-6xl mx-auto py-16">
                <div className="flex flex-col gap-2 items-center">
                    <p className="font-semibold text-xl">Get In Touch</p>
                    <h2 className='text-4xl font-bold'>Contact me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="flex items-center justify-center pt-16">
                    <form onSubmit={sendMail} className="md:w-3/5 w-full">
                        <div className="flex gap-4 mb-2">
                            <div className="w-full">
                                <label className="font-semibold mb-1 block">First name</label>
                                <input className="border py-1 px-2 rounded-sm w-full" type="text" name="fname" />
                            </div>
                            <div className="w-full">
                                <label className="font-semibold mb-1 block">Last name</label>
                                <input className="border py-1 px-2 rounded-sm w-full" type="text" name="lname" />
                            </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <div className="w-full">
                                <label className="font-semibold mb-1 block">Email</label>
                                <input className="border py-1 px-2 rounded-sm w-full" type="text" name="email" />
                            </div>
                            <div className="w-full">
                                <label className="font-semibold mb-1 block">Phone number</label>
                                <input className="border py-1 px-2 rounded-sm w-full" type="text" name="phone" />
                            </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <div className="w-full">
                                <label className="font-semibold mb-1 block">Message</label>
                                <textarea className="border py-1 px-2 rounded-sm w-full" name="message" id="" cols="55" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <button className="bg-[#5E3BEE] py-1 px-4 rounded-sm text-white">Send</button>
                        </div>
                    </form>
                </div>
            </div >
        </Element>
    );
};

export default ContactUs;