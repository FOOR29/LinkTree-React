import { useRef, useEffect, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    // Detecta cuando el video entra/sale de pantalla
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } // 30% visible para activarse
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    //  Controla reproducción según visibilidad
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (isVisible) {
            video.play().catch(() => { });
        } else {
            video.pause();
        }
    }, [isVisible]);

    const handleToggleSound = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    return (
        <div className="relative w-full max-w-sm h-47 rounded-xl overflow-hidden shadow-md bg-black border border-gray-600">
            <video
                ref={videoRef}
                src="https://res.cloudinary.com/dlxii2hkq/video/upload/f_auto,q_auto,w_720/v1762219811/The_Weeknd_Playboi_Carti_-_Timeless_-_TheWeekndVEVO_1080p_h264_d5oope.mp4"
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
            ></video>

            <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-white text-sm font-medium">
                <span>Timeless</span>

                <button
                    onClick={handleToggleSound}
                    className={`text-lg transition ${isMuted ? "opacity-80" : "opacity-40"}`}
                >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
            </div>
        </div>
    );
};

export default VideoSection;
