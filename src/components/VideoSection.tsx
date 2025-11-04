import { useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const handleToggleSound = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    return (
        <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-md bg-black border border-gray-600">
            <video
                ref={videoRef}
                src="https://res.cloudinary.com/dlxii2hkq/video/upload/v1762219811/The_Weeknd_Playboi_Carti_-_Timeless_-_TheWeekndVEVO_1080p_h264_d5oope.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
            ></video>

            <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-white text-sm">
                <span>Timeless</span>

                <button
                    onClick={handleToggleSound}
                    className={`text-lg transition ${isMuted ? "opacity-80" : "opacity-40"
                        }`}
                >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
            </div>
        </div>
    );
};

export default VideoSection;
