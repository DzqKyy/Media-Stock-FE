import { createSignal } from 'solid-js';
import { BsFilterLeft } from 'solid-icons/bs'
import { BiRegularArrowBack } from 'solid-icons/bi'

function Sidebar({ onClose }) {
    // Fungsi untuk menangani klik pada jenis aset
    const handleAssetTypeClick = (assetType) => {
        console.log(`Asset type clicked: ${assetType}`);
        // Lakukan sesuatu dengan tipe aset yang diklik, seperti menampilkan aset sesuai jenisnya
    };
    return (
        <div class="sidebar open">
            <div class="sidebar-header my-2">
                <div class="sidebar-filter d-flex">
                    <BsFilterLeft size={30} color="#012970" class="mt-1" />
                    <h3 class="mt-2 mx-2 filt">Filter</h3>
                </div>
                <button type="button" class="close" onClick={onClose} style="background: none; border: none;">
                    <BiRegularArrowBack size={24} color="#012970" />
                </button>
            </div>
            <div class="sidebar-body text-center ">
                <div class="all-asset my-3 p-1" onClick={() => handleAssetTypeClick("ALL")} style="cursor: pointer;">ALL</div>
                <div class="image-asset my-2 p-1" onClick={() => handleAssetTypeClick("IMAGE")} style="cursor: pointer;">IMAGE</div>
                <div class="video-asset my-3 p-1" onClick={() => handleAssetTypeClick("VIDEO")} style="cursor: pointer;">VIDEO</div>
                <div class="audio-asset my-2 p-1" onClick={() => handleAssetTypeClick("AUDIO")} style="cursor: pointer;">AUDIO</div>
            </div>


        </div>
    );
}

export default Sidebar;



