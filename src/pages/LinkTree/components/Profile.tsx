import iconVerified from "../../../assets/icons/icon-verified.png"
import "../../../styles/animations.css"

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Profile = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <LazyLoadImage
                className="rounded-full w-24 h-24 object-cover"
                src="https://res.cloudinary.com/dlxii2hkq/image/upload/v1759181470/photo_ulnrml.webp"
                alt="Photo profile"
                effect="blur"
            />

            <div className="flex justify-center items-center flex-col">
                <span className="font-bold text-xl text-white pt-3 flex justify-center items-center gap-1">
                    @foorhx
                    <img className="w-5 h-6 pt-1" src={iconVerified} alt="verified" />
                </span>
                <p className="text-white font-extralight text-1xl pt-3 text-center w-80">"Born in silence, forged in pain, risen through sound"</p>
            </div>
        </div>
    )
}


export default Profile


