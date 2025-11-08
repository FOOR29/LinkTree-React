import imgProfile from "../assets/images/photo.jpg"
import iconVerified from "../assets/icons/icon-verified.png"
import "../styles/animations.css"

const Profile = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img className="rounded-full w-30 h-30 object-cover" src={imgProfile} alt="photo-profile" />
            <div className="flex justify-center items-center flex-col">
                <span className="font-bold text-xl text-white pt-3 flex justify-center items-center gap-1">
                    @foorhx
                    <img className="w-5 h-6 pt-1" src={iconVerified} alt="verified" />
                </span>
                <p className="text-white font-semibold text-1xl pt-3 text-center w-80">"Born in silence, forged in pain, risen through sound"</p>
            </div>
        </div>
    )
}

export default Profile