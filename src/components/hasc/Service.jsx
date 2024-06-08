import { createSignal } from 'solid-js';

const Service = () => {
    const services = [
        {
            iconClass: "ri-discuss-line icon",
            title: "Pencarian Asset",
            description: "Temukan berbagai asset yang Anda butuhkan dengan mudah melalui fitur pencarian yang intuitif.",
            color: "blue"
        },
        {
            iconClass: "ri-discuss-line icon",
            title: "Kategorisasi Asset",
            description: "Telusuri asset dengan cepat dengan fitur pengelompokan berdasarkan kategori yang relevan.",
            color: "orange"
        },
        {
            iconClass: "ri-discuss-line icon",
            title: "Pengurutan Asset",
            description: "Susun asset berdasarkan preferen untuk menemukan yang paling sesuai dengan kebutuhan Anda.",
            color: "green"
        },
        {
            iconClass: "ri-discuss-line icon",
            title: "Keranjang Belanja",
            description: "Simpan asset yang diminati di keranjang belanja untuk kemudahan berbelanja.",
            color: "red"
        },
        {
            iconClass: "ri-discuss-line icon",
            title: "Reguler Asset",
            description: "Temukan berbagai macam asset untuk project skala kecil.",
            color: "purple"
        },
        {
            iconClass: "ri-discuss-line icon",
            title: "Premium Asset",
            description: "Dapatkan pengalaman premium dengan akses yang lebih banyak",
            color: "pink"
        }
    ];

    return (
        <section id="services" class="services">
            <div class="container">
                <header class="section-header">
                    <p>Fitur dan Layanan yang tersedia</p>
                </header>
                <div class="row gy-4">
                    {services.map((service, index) => (
                        <ServiceBox service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceBox = (props) => {
    const { iconClass, title, description, color } = props.service;

    return (
        <div class={`col-lg-4 col-md-6 service-box ${color}`}>
            <i class={iconClass}></i>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="/shop" class="read-more">
                <span>Read More</span> <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    );
};

export default Service;
