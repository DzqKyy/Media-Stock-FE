import ContactAdmin from "../components/hasc/ContactAdmin";
import Faq from "../components/hasc/Faq";
import Footer from "../components/hasc/Footer";
import Header from "../components/hasc/Header";
import '../assets/css/hasc/style.css';

function Contact() {

    return (
        <>
            <Header />
            <ContactAdmin />
            <Faq />
            <Footer />
        </>
    );
}
export default Contact;