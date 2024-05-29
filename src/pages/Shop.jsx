import { TbCategory, TbLayoutGridRemove } from 'solid-icons/tb'
import { createSignal } from 'solid-js';
import { BsFilterLeft } from 'solid-icons/bs'
import { ImSearch } from 'solid-icons/im'
import Sidebar from '../components/Sidebar';
import { FaSolidHeart } from 'solid-icons/fa'
import { FaSolidStar } from 'solid-icons/fa'
import Header from '../components/Header';

function Shop() {
    const [isOpen, setIsOpen] = createSignal(false); // State untuk menyimpan status filter
    const [sortBy, setSortBy] = createSignal("Relevant");

    // Fungsi untuk menangani klik pada filter
    const handleClick = () => {
        setIsOpen(!isOpen()); // Mengubah status filter saat diklik
    };

    const handleSortSelect = (sortOption) => {
        setSortBy(sortOption);
        console.log(`Selected sort option: ${sortOption}`);
        // Additional logic for sorting if needed
    };


    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Header />
            <div class="header-shop">
                <div class="container-fluid d-flex py-1 px-5">
                    <div class="filter" onClick={handleClick} style="cursor: pointer;">
                        <div>
                            <BsFilterLeft size={30} color="#012970" />
                        </div>
                        <p class="nama-filter">Filter</p>
                    </div>

                    {isOpen() && <Sidebar onClose={handleClose} />}

                    <div class={`content ${isOpen() ? 'content-with-sidebar' : ''}`}>
                    </div>

                    <div class="search mx-4">
                        <div class='mx-3'>
                            <ImSearch size={24} color="#012970" />
                        </div>
                        <input type="text" placeholder="Search for the asset you want" name="" />
                    </div>

                    <div class="mx-4">

                        <div class="dropdown">
                            <button
                                class="btn dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {sortBy()}
                            </button>
                            <ul class="dropdown-menu dropdownMenuButton">
                                <li>
                                    <a class="dropdown-item" href="#" onClick={(event) => handleSortSelect("Relevant", event)}>
                                        Relevant
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" onClick={(event) => handleSortSelect("Trending", event)}>
                                        Trending
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" onClick={(event) => handleSortSelect("Rating", event)}>
                                        Rating
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" onClick={(event) => handleSortSelect("Favorite", event)}>
                                        Favorite
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class={`main-shop ${isOpen() ? 'with-sidebar' : ''}`}>
                <div class="row list-asset">
                    <Asset
                        imgSrc="../src/assets/img/asset1.jpg"
                        title="Danau sore hari"
                        author="Harits Fistyan"
                        like="10"
                        rating="4.5"
                    />
                    <Asset
                        imgSrc="../src/assets/img/asset4.jpg"
                        title="Marc Marquez"
                        author="Harits Fistyan"
                        mtClass="mt-4 mt-lg-0"
                        like="10"
                        rating="4.5"
                    />
                    <Asset
                        imgSrc="../src/assets/img/asset9.jpg"
                        title="New York City"
                        author="Harits Fistyan"
                        mtClass="mt-4 mt-lg-0"
                        like="10"
                        rating="4.5"
                    />
                    <Asset
                        imgSrc="../src/assets/img/asset8.jpg"
                        title="Pancake coklat"
                        author="Harits Fistyan"
                        mtClass="mt-4 mt-lg-0"
                        like="10"
                        rating="4.5"
                    />
                    <Asset
                        imgSrc="../src/assets/img/asset10.jpg"
                        title="Judul Asset"
                        author="Harits Fistyan"
                        mtClass="mt-4 mt-lg-0"
                        like="10"
                        rating="4.5"
                    />
                    <Asset
                        imgSrc="../src/assets/img/asset2.jpg"
                        title="Judul Asset"
                        author="Harits Fistyan"
                        mtClass="mt-4 mt-lg-0"
                        like="10"
                        rating="4.5"
                    />
                    <Asset
                        imgSrc="../src/assets/img/asset7.jpg"
                        title="Judul Asset"
                        author="Harits Fistyan"
                        mtClass="mt-4 mt-lg-0"
                        like="10"
                        rating="4.5"
                    />
                    <Asset
                        imgSrc="../src/assets/img/asset12.jpg"
                        title="Judul Asset"
                        author="Harits Fistyan"
                        mtClass="mt-4 mt-lg-0"
                        like="10"
                        rating="4.5"
                    />
                    <Asset
                        imgSrc="../src/assets/img/asset11.jpg"
                        title="Judul Asset"
                        author="Harits Fistyan"
                        mtClass="mt-4 mt-lg-0"
                        like="10"
                        rating="4.5"
                    />
                    <Asset
                        imgSrc="../src/assets/img/asset5.jpg"
                        author="Harits Fistyan"
                        title="Judul Asset"
                        mtClass="mt-4 mt-lg-0"
                        like="10"
                        rating="4.5"
                    />
                    <Asset
                        imgSrc="../src/assets/img/asset13.jpg"
                        title="Judul Asset"
                        author="Harits Fistyan"
                        mtClass="mt-4 mt-lg-0"
                        like="10"
                        rating="4.5"
                    />
                    <Asset
                        imgSrc="../src/assets/img/asset6.jpg"
                        title="Judul Asset"
                        author="Harits Fistyan"
                        mtClass="mt-4 mt-lg-0"
                        like="10"
                        rating="4.5"
                    />
                </div>
            </div>
        </div>
    );
}

const Asset = (props) => {
    const { imgSrc, title, author, like, rating, mtClass } = props;

    return (
        <div class="col-lg-3" classList={{ [mtClass]: !!mtClass }}>
            <div class="box">
                <img src={imgSrc} class="img-fluid rounded-img" alt="" />
                <div class="row">
                    <div class="col-8">
                        <h5 class="title-asset ">{title}</h5>
                        <p class="author-asset">{author}</p>
                    </div>
                    <div class="col-4">
                        <div class="icon-container d-flex">
                            <div class="heart d-flex mt-1">
                                    <FaSolidHeart size={20} color="rgb(255, 0, 0)" class="heart-icon"/>
                                    <p class="total-like">{like}</p>
                            </div>
                            <div class="star d-flex mt-1">
                                    <FaSolidStar size={20} color="#FFD700" class="star-icon" />
                                    <p class="total-star">{rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Shop;
