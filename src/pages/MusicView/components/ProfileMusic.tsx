import imgProfile from "../../../assets/images/photo.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProfileMusic = () => {
    return (
        <div className="flex items-center justify-between w-full py-4">
            <div className="flex flex-col text-white font-bold text-left">
                <span className="text-2xl -mb-2.5 ">Hello!</span>
                <h3 className="text-3xl">Everyone</h3>
            </div>

            <div className="flex items-center justify-center">
                <LazyLoadImage
                    className="rounded-full w-15 h-15 object-cover"
                    src={imgProfile}
                    alt="Mi foto bacana"
                    effect="blur"
                />
            </div>
        </div>
    )
}

export default ProfileMusic
