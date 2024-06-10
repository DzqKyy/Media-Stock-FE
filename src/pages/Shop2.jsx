import { createSignal } from 'solid-js';
import Header from "../hasc/Header";
import { FaSolidHeart } from 'solid-icons/fa';
import { RiHealthMedicalHeartAddFill } from 'solid-icons/ri'
import { FaSolidStar } from 'solid-icons/fa';
import '../../assets/css/shop/detailAsset.css';


const DetailAsset = (props) => {
    const { imgSrc, title, author, like, rating } = props;

    const [visibleReviews, setVisibleReviews] = createSignal(3);
    const [allReviewsShown, setAllReviewsShown] = createSignal(false);

    const reviews = [
        { username: "Harits Fistyan 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem illo voluptates totam laudantium rerum, perferendis voluptas exercitationem magnam dolorum!" },
        { username: "Harits Fistyan 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque, voluptatem provident ab exercitationem corporis? Possimus enim magnam temporibus officia nobis maxime dolore, veritatis ullam fugit dolor sapiente! Ea, culpa." },
        { username: "Harits Fistyan 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iusto! Cumque, a quibusdam. Corporis distinctio inventore dignissimos sapiente, soluta est, magnam delectus tempora fugit quae porro dolore maxime provident quisquam." },
        { username: "Harits Fistyan 4", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore neque quod aperiam dolorum, hic maxime animi amet, molestiae sint optio? Harum fugit est eveniet nostrum, ratione vel quo impedit?" },
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
        const newReview = { username: formData.username, text: formData.review };
        reviews.push(newReview);
        setFormData({ username: "", review: "" });
        closeModal();
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div class="body">
                <div class="container detail-asset">
                    <div class="row">
                        <div class="right-content col-lg-6">
                            <div class='my-3'>
                                <a href="#review" class="mx-2 review-detail">
                                    7 Reviews
                                </a>
                                <button onClick={openModal}>
                                    Add Review
                                </button>
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
