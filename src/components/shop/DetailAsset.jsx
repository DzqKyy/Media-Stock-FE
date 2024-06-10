import { createSignal, createEffect, onCleanup } from 'solid-js';
import Header from "../hasc/Header";
import { FaSolidHeart } from 'solid-icons/fa';
import { RiHealthMedicalHeartAddFill } from 'solid-icons/ri'
import { FaSolidStar } from 'solid-icons/fa';
import '../../assets/css/shop/detailAsset.css';


const DetailAsset = (props) => {
    const { imgSrc, title, author, like, rating } = props;

    const [visibleReviews, setVisibleReviews] = createSignal(3);
    const [allReviewsShown, setAllReviewsShown] = createSignal(false);
    const [showModal, setShowModal] = createSignal(false); // Changed to createSignal
    const [formData, setFormData] = createSignal({ username: "", review: "" });

    const reviews = [
        { username: "Harits Fistyan 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem illo voluptates totam laudantium rerum, perferendis voluptas exercitationem magnam dolorum!" },
        { username: "Harits Fistyan 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque, voluptatem provident ab exercitationem corporis? Possimus enim magnam temporibus officia nobis maxime dolore, veritatis ullam fugit dolor sapiente! Ea, culpa." },
        { username: "Harits Fistyan 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iusto! Cumque, a quibusdam. Corporis distinctio inventore dignissimos sapiente, soluta est, magnam delectus tempora fugit quae porro dolore maxime provident quisquam." },
        { username: "Harits Fistyan 4", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore neque quod aperiam dolorum, hic maxime animi amet, molestiae sint optio? Harum fugit est eveniet nostrum, ratione vel quo impedit?" },
        { username: "Harits Fistyan 5", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius reiciendis ex id! Natus, fugit voluptate, quisquam harum et sint error ipsum accusantium est amet iste aperiam impedit nostrum suscipit!" },
        { username: "Harits Fistyan 6", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae recusandae molestiae iste nobis cupiditate saepe expedita delectus obcaecati laudantium? Quasi libero omnis odit laudantium deserunt nihil qui, facilis iste veniam!" },
        { username: "Harits Fistyan 7", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam quisquam amet dolor id fuga nemo quis, deleniti nobis inventore, impedit nostrum, illum tenetur voluptas! Natus perferendis commodi ab voluptatum." }
    ];


    const toggleReadMore = (e) => {
        e.preventDefault();
        if (allReviewsShown()) {
            setVisibleReviews(3);
            setAllReviewsShown(false);
        } else {
            if (visibleReviews() + 3 >= reviews.length) {
                setVisibleReviews(reviews.length);
                setAllReviewsShown(true);
            } else {
                setVisibleReviews(visibleReviews() + 3);
            }
        }
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { username: formData().username, text: formData().review };
        reviews.push(newReview);
        setFormData({ username: "", review: "" });
        closeModal();
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData(), [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Header />
            <div class="header-detail">
            </div>
            <div class="body">
                <div class="container detail-asset">
                    <div class="row">
                        <div class="left-content px-1 col-lg-6">
                            <img class="mx-1 asset" src={"../src/assets/img/asset1.jpg"} alt="Asset" />
                        </div>
                        <div class="right-content col-lg-6">
                            <div className="main-detail">
                                <h2 class="title-detail">Pancake Coklat </h2>
                                <h5 class="mx-1 fw-semibold author-detail fs-5">Harits Fistyan</h5>
                                <p class="mx-1 py-2 desc-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Praesent et libero massa. Mauris at vehicula erat. In hac habitasse platea dictumst. Integer malesuada, nunc et lacinia condimentum, ligula justo auctor libero, non cursus magna neque ut dui.
                                </p>
                            </div>
                            <div className="mx-1 my-3 section-detail">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div class="my-2">
                                            Created at 10-06-2024
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="my-2">
                                            Updated at 11-06-2024
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div class="d-flex rating-detail">
                                <FaSolidStar size={25} color="#FFD700" class='mx-1 my-1' />
                                <p class="mx-1 my-1" >
                                    4.5
                                </p>
                                <FaSolidHeart size={25} color="rgb(255, 0, 0)" class="my-1 heart-icon2" />
                                <p class="mx-1 my-1">
                                    10
                                </p>
                            </div>

                            <div class='my-3'>
                                <a href="#review" class="mx-2 review-detail">
                                    7 Reviews
                                </a>
                                <button onClick={openModal}>
                                    Add Review
                                </button>
                            </div>

                            <div class="pembayaran-detail">
                                <div className="my-4 row">
                                    <div className="col-6">
                                        <div class="mx-1 my-1 total-price">
                                            Rp. 100.000
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <button class="mx-2 mt-3 px-3 btn btn-buy">Buy Now</button>
                                        <button class="btn btn-like">Add to Favorite</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 review" id="review">
                        <h3 class="mx-2 title-review">Reviews</h3>
                        <div class="card">
                            <div class="card-body">
                                {reviews.slice(0, visibleReviews()).map((review, index) => (
                                    <div class="mb-3 row" key={index}>
                                        <div class="col-3">
                                            <p class="card-text"><strong>{review.username}</strong></p>
                                        </div>
                                        <div class="col-9">
                                            <p class="card-text">{review.text}</p>
                                        </div>
                                    </div>
                                ))}
                                <a href="#" class="btn btn-primary" onClick={toggleReadMore}>
                                    {allReviewsShown() ? "Show Less" : "Read More"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div class="modal">
                    <div class="modal-content">
                        <span class="close" onClick={closeModal}>&times;</span>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="username">Username:</label>
                                <input type="text" id="username" name="username" value={formData.username} onInput={handleInputChange} required />
                            </div>
                            <div class="form-group">
                                <label for="review">Review:</label>
                                <textarea id="review" name="review" value={formData.review} onInput={handleInputChange} required />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailAsset;
