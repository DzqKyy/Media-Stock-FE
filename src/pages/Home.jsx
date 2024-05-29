import Header from "../components/Header";
import Section from "../components/Section";
import About from "../components/About";
import Asset from "../components/Asset";
import Services from "../components/Service";
import Feature from "../components/Feature";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {

    return (
        <div>
            <Header />
            <Section />
            <About />
            <Feature />
            <Asset />
            <Services />
            <Faq />
            <Contact />
            <Footer />
        </div>
    );
}
export default Home;