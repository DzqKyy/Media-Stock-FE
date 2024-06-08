import { createSignal } from "solid-js";

function Main() {
    return (
        <div>
            <section id="about" class="about">
                <div class="container" >
                    <div class="row gx-0 about-content">
                        <div
                            class="col-lg-6 d-flex flex-column justify-content-center"
                        >
                            <div class="content">
                                <h2>Platform Aman untuk Membeli dan Menjual Hak Cipta Aset Media</h2>
                                <p >
                                    Media Stock menyediakan platform online yang aman untuk membeli dan menjual hak cipta berbagai jenis
                                    aset media, seperti gambar, video, dan audio. Kami menyediakan platform online yang aman bagi para
                                    pembeli dan penjual.
                                </p>
                                <div class="text-center text-lg-start">
                                    <a
                                        href="#"
                                        class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                                    >
                                        <span>Read More</span>
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center">
                            <img src="../src/assets/img/about.jpg" class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;
