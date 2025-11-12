import { FaPlay } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Playlist } from "../../../types";

const playlists: Playlist[] = [
    {
        title: "Guitar",
        songCount: 33,
        imgSrc: "https://res.cloudinary.com/dlxii2hkq/image/upload/v1762981714/busy_being_make_believe_mlhur7.jpg",
        url: "https://music.youtube.com/playlist?list=PLYYESoyzMt2JySdkGnw2dgap9cJ3ek7wA",
    },
    {
        title: "Black List",
        songCount: 49,
        imgSrc: "https://res.cloudinary.com/dlxii2hkq/image/upload/v1762981335/DELRESTO_ECHOES_BTS_ajk44n.jpg",
        url: "https://music.youtube.com/playlist?list=PLYYESoyzMt2KkAboGDOPspBAb38XeUC4L",
    },
    {
        title: "Hits Retro",
        songCount: 56,
        imgSrc: "https://res.cloudinary.com/dlxii2hkq/image/upload/v1762982510/billy_idol___stage_tosvwg.jpg",
        url: "https://music.youtube.com/playlist?list=PLYYESoyzMt2INpP0fe5mlbs2d_OM3l9Ae",
    },
    {
        title: "Salsa",
        songCount: 71,
        imgSrc: "https://res.cloudinary.com/dlxii2hkq/image/upload/v1762982510/Roberto_Roena_mmbrve.jpg",
        url: "https://music.youtube.com/playlist?list=PLYYESoyzMt2KKTUZcmcKIYhQYeuNXXjYC",
    },
    {
        title: "XPLSV",
        songCount: 30,
        imgSrc: "https://res.cloudinary.com/dlxii2hkq/image/upload/v1762982510/d699fefafbc35748a11da6ae8f33f864_mhnyhm.jpg",
        url: "https://music.youtube.com/playlist?list=PLYYESoyzMt2LVgze1szeLOFTAGGRUqJez",
    },
    {
        title: "Focused",
        songCount: 28,
        imgSrc: "https://res.cloudinary.com/dlxii2hkq/image/upload/v1762981335/A_calm_mind_sees_everything_-_nba_lakers_mambamentality_1_j1dnsi.jpg",
        url: "https://music.youtube.com/playlist?list=PLYYESoyzMt2JeLVnYMg4WuBMerW-gEVUe",
    },
    {
        title: "Melancholia",
        songCount: 32,
        imgSrc: "https://res.cloudinary.com/dlxii2hkq/image/upload/v1745104963/melancolia_mbkmnq.jpg",
        url: "https://music.youtube.com/playlist?list=PLYYESoyzMt2Ja-WBZchPJS0GsTw1Cs1HH",
    }
];

const CardPlaylist = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-9">
            {playlists.map((playlist, index) => (
                <div key={index}>
                    <div className="rounded-md w-full h-42 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-2.5 overflow-hidden">
                        <LazyLoadImage
                            className="w-full h-full object-cover"
                            src={playlist.imgSrc}
                            alt={playlist.title}
                            effect="blur"
                        />
                    </div>

                    <div className="text-white px-0.5 justify-between flex items-center w-full -mt-1">
                        <div className="flex flex-col">
                            <h5 className="text-lg font-bold -mt-1">{playlist.title}</h5>
                            <span className="font-normal text-sm -mt-2">{playlist.songCount} songs</span>
                        </div>
                        <a
                            href={playlist.url}
                            className="bg-gray-800 flex justify-center items-center p-1.5 w-8 h-8 rounded-full text-gray-100"
                        >
                            <FaPlay className="text-sm" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardPlaylist;
