import Header from "../hasc/Header";
import { FaSolidHeart } from 'solid-icons/fa';
import { RiHealthMedicalHeartAddFill } from 'solid-icons/ri'
import { FaSolidStar } from 'solid-icons/fa';
import '../../assets/css/shop/detailAsset.css';


const DetailAsset = (props) => {
    const { imgSrc, title, author, like, rating } = props;

    return (
        <div>
            <Header />
            <div class="body">

                <div class="container detail-asset p-4">
                    <div className="row">
                        <div className="col-7 left-content">
                            <img class="asset" src={"../src/assets/img/asset1.jpg"} alt="Asset" />
                        </div>
                        <div className="col-5 right-content">
                            <h2 class="title-detail">Pancake Coklat </h2>
                            <h5 class="author-detail mx-1 my-1">Harits Fistyan</h5>
                            <div class="d-flex mt-4">
                                <p class="likes-detail ">
                                    <FaSolidHeart size={40} color="rgb(255, 0, 0)" class="heart-icon mx-2 mb-2" />
                                    10
                                </p>
                                <div className="rating-detail d-flex">
                                    <FaSolidStar size={40} color="#FFD700" class="star-icon mx-2 mt-2" />
                                    <p>
                                        4.5
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex mt-1">
                                <div class="total-sold">
                                    <p>
                                        70 sold
                                    </p>
                                </div>
                                <div class="total-review">
                                    <p>
                                        19 reviews
                                    </p>
                                </div>
                            </div>
                            <div class="total-price">
                                <p>
                                    Rp. 100.000
                                </p>

                            </div>
                            <div className="button d-flex flex-column">
                                <button class="btn btn-buy">Buy Now</button>
                                <button class="btn btn-like">Add to Favorite</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* <img src={imgSrc} alt="Asset" />
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Likes: {like}</p>
            <p>Rating: {rating}</p> */}
            {/* Tambahkan informasi detail lainnya sesuai kebutuhan */}
        </div>
    );
}

export default DetailAsset;
