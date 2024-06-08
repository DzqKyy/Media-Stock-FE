
const ContactAdmin = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Proses formulir di sini
    };

    return (
        <section id="contact" class="contact">
            <div class="container">
                <header class="section-header">
                    <p>Kontak Kami</p>
                </header>
                <div class="row gy-4">
                    <div class="col-lg-6">
                        <div class="row gy-4">
                            <ContactInfoBox icon="bi bi-geo-alt" title="Alamat" content="Jalan Ir. Sutami 36 Kentingan, Jebres, Surakarta, Jawa Tengah" />
                            <ContactInfoBox icon="bi bi-clock" title="Jam Aktif" content="Senin - Sabtu,  07:00 WIB - 17:00 WIB" />
                            <ContactInfoBox icon="bi bi-telephone" title="Telepon" content="+6281229006357" />
                            <ContactInfoBox icon="bi bi-envelope" title="Email" content="mediastock@gmail.com" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <form onSubmit={handleSubmit} class="php-email-form">
                            <div class="row gy-4">
                                <ContactInput name="name" type="text" placeholder="Your Name" />
                                <ContactInput name="email" type="email" placeholder="Your Email" />
                                <ContactInput name="subject" type="text" placeholder="Subject" />
                                <ContactTextarea name="message" placeholder="Message" />
                                <div class="col-md-12 text-center">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                    <button type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactInfoBox = (props) => (
    <div class="col-md-6">
        <div class="info-box">
            <i class={props.icon}></i>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    </div>
);

const ContactInput = (props) => (
    <div class="col-md-6">
        <input type={props.type} name={props.name} class="form-control" placeholder={props.placeholder} required />
    </div>
);

const ContactTextarea = (props) => (
    <div class="col-md-12">
        <textarea class="form-control" name={props.name} rows="6" placeholder={props.placeholder} required></textarea>
    </div>
);

export default ContactAdmin;
