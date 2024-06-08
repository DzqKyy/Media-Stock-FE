import { createSignal } from 'solid-js';
import Header from '../components/hasc/Header';
import { BsFilterLeft } from 'solid-icons/bs'
import { ImSearch } from 'solid-icons/im'
import Sidebar from '../components/shop/Sidebar';
import ListAsset from '../components/shop/ListAsset';


import '../assets/css/shop/shop.css';

function Shop() {
    const [isOpen, setIsOpen] = createSignal(false); // State untuk menyimpan status filter
    const [sortBy, setSortBy] = createSignal("Relevant");

    // Fungsi untuk menangani klik pada filter
    const handleClick = () => {
        setIsOpen(!isOpen()); // Mengubah status filter saat diklik
    };

    const handleSortSelect = (sortOption, event) => {
        event.preventDefault(); // Prevent default behavior of the link
        setSortBy(sortOption);
        console.log(`Selected sort option: ${sortOption}`);
        // Additional logic for sorting if needed
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const [assets, setAssets] = createSignal([]);
    const [selectedAsset, setSelectedAsset] = createSignal(null);

    // Fungsi untuk memilih asset
    const selectAsset = (asset) => {
        setSelectedAsset(asset);
    };

    const mockAssets  = [
        { id: 1, imgSrc: "../src/assets/img/asset1.jpg", title: "Danau sore hari", author: "Harits Fistyan", like: 10, rating: 4.5 },
        { id: 2, imgSrc: "../src/assets/img/asset4.jpg", title: "Marc Marquez", author: "Harits Fistyan", like: 10, rating: 4.5 },
        { id: 3, imgSrc: "../src/assets/img/asset9.jpg", title: "New York City", author: "Harits Fistyan", like: 10, rating: 4.5 },
        { id: 4, imgSrc: "../src/assets/img/asset8.jpg", title: "Pancake coklat", author: "Harits Fistyan", like: 10, rating: 4.5 },
        { id: 5, imgSrc: "../src/assets/img/asset10.jpg", title: "Judul Asset", author: "Harits Fistyan", like: 10, rating: 4.5 },
        { id: 6, imgSrc: "../src/assets/img/asset2.jpg", title: "Judul Asset", author: "Harits Fistyan", like: 10, rating: 4.5 },
        { id: 7, imgSrc: "../src/assets/img/asset7.jpg", title: "Judul Asset", author: "Harits Fistyan", like: 10, rating: 4.5 },
        { id: 8, imgSrc: "../src/assets/img/asset12.jpg", title: "Judul Asset", author: "Harits Fistyan", like: 10, rating: 4.5 },
        { id: 9, imgSrc: "../src/assets/img/asset11.jpg", title: "Judul Asset", author: "Harits Fistyan", like: 10, rating: 4.5 },
        { id: 10, imgSrc: "../src/assets/img/asset5.jpg", title: "Judul Asset", author: "Harits Fistyan", like: 10, rating: 4.5 },
        { id: 11, imgSrc: "../src/assets/img/asset13.jpg", title: "Judul Asset", author: "Harits Fistyan", like: 10, rating: 4.5 },
        { id: 12, imgSrc: "../src/assets/img/asset6.jpg", title: "Judul Asset", author: "Harits Fistyan", like: 10, rating: 4.5 }
    ];

    return (
        <div>
            <Header />
            <div class="header-shop">
                <div class="container-fluid d-flex py-1 px-5">
                    <div class="filter " onClick={handleClick} style="cursor: pointer;">
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

                    <div class="mx-1">

                        <div class="dropdown rounded rounded-5">
                            <span class="sort-by-text position-absolute px-1">Sort by</span>
                            <button
                                class="sort-by btn dropdown-toggle rounded rounded-5 px-4"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {sortBy()}
                            </button>
                            <ul class="test dropdown-menu" aria-labelledby="dropdownMenuButton">
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
                    {/* Menampilkan daftar aset */}
                    {mockAssets .map(asset => (
                        <ListAsset
                            key={asset.id}
                            imgSrc={asset.imgSrc}
                            title={asset.title}
                            author={asset.author}
                            like={asset.like}
                            rating={asset.rating}
                            onClick={() => selectAsset(asset)} 
                        />
                    ))}


                </div>
            </div>
        </div>
    );
}




export default Shop;
