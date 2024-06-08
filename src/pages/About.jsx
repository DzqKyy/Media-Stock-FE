import { createSignal } from "solid-js";
import About1 from "../components/hasc/About1";
import About2 from "../components/hasc/About2";
import Header from "../components/hasc/Header";
import Footer from "../components/hasc/Footer";
import '../assets/css/hasc/style.css';

function About() {
    return (
        <>
            <Header />
            <About1 />
            <About2 />
            <Footer />
        </>
    );
}

export default About;
