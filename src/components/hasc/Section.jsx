import { createSignal } from "solid-js";

function Section() {
    return (
        <div>
            <section id="hero" class="hero d-flex align-items-center py-5">
                <div class="container py-4">
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column justify-content-center hero-content">
                            <h1>Media Stock:</h1>
                            <h1>Jual Beli Hak Cipta Asset</h1>
                            <h2>
                                Temukan dan jual berbagai jenis aset media dengan aman dan mudah.
                            </h2>
                            <div>
                                <div class="text-center text-lg-start">
                                    <a
                                        href="/shop"
                                        class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                                    >
                                        <span>Go To Shop</span>
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex justify-content-center hero-img">
                            <img src="../src/assets/img/hero-img.png" class="img-fluid" alt="hero" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Section;
