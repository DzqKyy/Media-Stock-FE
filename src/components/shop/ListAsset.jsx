import { createSignal } from 'solid-js';
import { FaSolidHeart } from 'solid-icons/fa';
import { RiHealthMedicalHeartAddFill } from 'solid-icons/ri'
import { FaSolidStar } from 'solid-icons/fa';
import '../../assets/css/shop/listAsset.css';
import { A } from '@solidjs/router';

const ListAsset = (props) => {
    const { imgSrc, title, author, like, rating } = props;

    return (
        <div class={`col-lg-3`}>
            <div class="box">
                <div class="asset-overlay">
                    <div class="overlay-content"></div>
                </div>
                <div class="gambar">
                        <A href={`/detailasset/${encodeURIComponent(imgSrc)}`}>
                            <img src={imgSrc} class="rounded-img asset-image img-fluid" alt="" />
                            <div class="love-icon">
                                <RiHealthMedicalHeartAddFill class="heart-icon" size={20} color="rgb(255, 255, 255)" />
                            </div>
                        </A>
                </div>
                <div class="row">
                    <div class="col-8">
                        <h5 class="title-asset">{title}</h5>
                        <p class="author-asset">{author}</p>
                    </div>
                    <div class="col-4">
                        <div class="d-flex icon-container">
                            <div class="d-flex mt-1 heart">
                                <FaSolidHeart size={20} color="rgb(255, 0, 0)" class="heart-icon" />
                                <p class="total-like">{like}</p>
                            </div>
                            <div class="d-flex mt-1 star">
                                <FaSolidStar size={20} color="#FFD700" class="star-icon" />
                                <p class="total-star">{rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListAsset;