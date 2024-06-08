import { createSignal } from 'solid-js';


const About1 = () => {
    return (
        <section id="features" class="features">
            <div class="container">
                <header class="section-header">
                    <p>Mudahnya Mencari Berbagai Jenis Aset di Media Stock</p>
                </header>
                <div class="row px-4">
                    <div class="col-lg-6 ">
                        <img src="../src/assets/img/features.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
                        <div class="row align-self-center gy-4">
                            <FeatureBox icon="bi bi-check" title="Pencarian Aset yang Mudah dan Efisien" />
                            <FeatureBox icon="bi bi-check" title="Menjual Berbagai Jenis Asset" />
                            <FeatureBox icon="bi bi-check" title="Terdapat Reguler Asset dan Premium Asset" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureBox = (props) => {
    const { icon, title } = props;

    return (
        <div class="">
            <div class="feature-box d-flex align-items-center">
                <i class={icon}></i>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default About1;
