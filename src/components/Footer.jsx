const Footer = () => {
    return (
        <footer id="footer" class="footer">


            <div class="footer-top">
                <div class="container">
                    <div class="row gy-4">
                        <FooterInfoBox />
                        <FooterLinks title="Useful Links" links={usefulLinks} />
                        <FooterContact />
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="copyright">
                    &copy; Copyright <strong><span>Media Stock</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

const FooterInfoBox = () => (
    <div class="col-lg-7 col-md-12 footer-info">
        <a href="index.html" class="logo d-flex align-items-center">
            <img src="../src/assets/img/logo.png" alt="" />
            <span>Media Stock</span>
        </a>
        <div class="col-lg-9">
        <p>Media Stock adalah platform terpercaya untuk menjual dan membeli hak cipta aset. Kami menyediakan untuk memonetisasi karya-karya mereka dan bagi para pembeli untuk menemukan konten berkualitas yang mereka butuhkan.</p>
        </div>
    </div>
);

const FooterLinks = (props) => (
    <div class="col-lg-2 col-6 footer-links">
        <h4>{props.title}</h4>
        <ul>
            {props.links.map((link, index) => (
                <li key={index}><i class="bi bi-chevron-right"></i> <a href={link.url}>{link.title}</a></li>
            ))}
        </ul>
    </div>
);

const FooterContact = () => (
    <div class="col-lg-3 col-6 footer-contact text-center text-md-start">
        <h4>CONTACT US</h4>
        <p>
            Jalan Ir. Sutami 36 Kentingan,  <br />
            Jebres, Surakarta, <br />
            Jawa Tengah, Indonesia <br /><br />
            <strong>No HP:</strong> +6281229006357<br />
            <strong>Email:</strong> mediastock@gmail.com<br />
        </p>
    </div>
);

const usefulLinks = [
    { title: "Home", url: "#" },
    { title: "About", url: "#about" },
    { title: "Asset", url: "#values" },
    { title: "Services", url: "#services" },
    { title: "FAQ", url: "#faq" },
];



export default Footer;
