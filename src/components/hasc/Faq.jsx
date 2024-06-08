import { createSignal } from 'solid-js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Faq = () => {
    return (
        <section id="faq" class="faq mb-5">
            <div class="container">
                <header class="section-header">
                    <p>Pertanyaan</p>
                </header>
                <div class="row">
                    <FaqList
                        id="faqlist1"
                        questions={[
                            {
                                id: "faq-content-1",
                                question: "Bagaimana cara membeli aset?",
                                answer: "Untuk membeli aset di Media Stock, Anda perlu membuat akun terlebih dahulu. Setelah itu, Anda dapat menggunakan fitur pencarian dan kategori untuk menemukan aset yang Anda inginkan. Tambahkan aset ke keranjang belanja Anda dan selesaikan pembayaran menggunakan metode pembayaran yang tersedia.",
                            },
                            {
                                id: "faq-content-2",
                                question: "Bagaimana cara menjual aset?",
                                answer: "Untuk menjual aset di Media Stock, Anda perlu membuat akun terlebih dahulu. Setelah itu, Anda dapat mengunggah aset Anda dan mengatur harga serta lisensi yang tersedia. Aset Anda akan ditinjau oleh tim kami sebelum tersedia untuk dibeli oleh pengguna lain.",
                            },
                            {
                                id: "faq-content-3",
                                question: "Bagaimana cara menghubungi dukungan pelanggan?",
                                answer: "Anda dapat menghubungi dukungan pelanggan kami melalui formulir kontak yang tersedia di halaman Kontak. Tim kami akan dengan senang hati membantu Anda dengan pertanyaan atau masalah apa pun yang Anda miliki.",
                            },
                        ]}
                    />
                    <FaqList
                        id="faqlist2"
                        questions={[
                            {
                                id: "faq2-content-1",
                                question: "Bagaimana cara mengunduh aset yang telah dibeli?",
                                answer: "Setelah Anda membeli aset di Media Stock, Anda dapat mengunduhnya langsung dari akun Anda. Aset yang telah Anda beli akan tersedia dalam format yang sesuai dan dapat diunduh dengan mudah.",
                            },
                            {
                                id: "faq2-content-2",
                                question: "Bagaimana cara menambahkan aset ke keranjang belanja?",
                                answer: "Klik tombol 'Tambahkan ke Keranjang' di halaman aset. Anda dapat melanjutkan pembelian atau melihat keranjang belanja Anda.",
                            },
                            {
                                id: "faq2-content-3",
                                question: "Apakah terdapat asset yang gratis?",
                                answer: "Tidak, saat ini semua aset yang tersedia di platform kami tidak tersedia secara gratis. Kami berkomitmen untuk menyediakan aset berkualitas tinggi yang sesuai dengan standar profesional, dan untuk itu kami bekerja sama dengan pencipta aset untuk memberikan nilai yang adil bagi karya mereka.",
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

const FaqList = (props) => {
    const { id, questions } = props;

    return (
        <div class="col-lg-6">
            <div class="accordion accordion-flush" id={id}>
                {questions.map((item) => (
                    <div class="accordion-item" key={item.id}>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}`}>
                                {item.question}
                            </button>
                        </h2>
                        <div id={item.id} class="accordion-collapse collapse" data-bs-parent={`#${id}`}>
                            <div class="accordion-body">{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
