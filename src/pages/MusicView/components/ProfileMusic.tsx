import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProfileMusic = () => {
    return (
        <div className="flex items-center justify-between w-full py-3">
            <div className="flex flex-col text-gray-100 font-bold text-left">
                <span className="text-2xl -mb-2.5 ">Hello!</span>
                <h3 className="text-2xl">Everyone</h3>
            </div>

            <div className="flex items-center justify-center">
                <LazyLoadImage
                    className="rounded-full w-13 h-13 object-cover"
                    src="https://res.cloudinary.com/dlxii2hkq/image/upload/v1759181470/photo_ulnrml.webp"
                    alt="Photo profile"
                    effect="blur"
                />
            </div>
        </div>
    )
}

export default ProfileMusic
