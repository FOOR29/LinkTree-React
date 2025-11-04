import imgProfile from "../assets/images/photo.jpg"
import iconVerified from "../assets/icons/icon-verified.png"


const Profile = () => {
    return (
        <div className="bg-amber-400 flex justify-center items-center flex-col">
            <img className="rounded-full w-30 h-30 object-cover" src={imgProfile} alt="photo-profile" />
            <div className="">
                <span className="bg-amber-900 font-bold text-white flex justify-center items-center gap-1">
                    @foorhx
                    <img className="w-5 h-6 pt-1" src={iconVerified} alt="verified" />
                </span>
            </div>
        </div>
    )
}

export default Profile