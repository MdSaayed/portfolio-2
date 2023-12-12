
import Blogs from '../blogs/Blogs';
import About from '../components/about/About';
import ContactUs from '../components/contact/ContactUs';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Portfoilo from '../components/portfolio/Portfoilo';
import Testimonial from '../components/testimonial/Testimonial';
import Banner from './../components/banner/Banner';
import Experience from './../components/experience/Experience';


const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Experience />
            <About />
            <Portfoilo />
            <Testimonial />
            <Blogs />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;