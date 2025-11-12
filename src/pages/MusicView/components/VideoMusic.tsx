import { useRef, useEffect, useState } from "react";

const VideoMusic = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Detecta cuando el video entra/sale de pantalla
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } // Se activa cuando el 30% del video está visible
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    // Controla reproducción según visibilidad
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isVisible) {
            video.play().catch(() => { });
        } else {
            video.pause();
        }
    }, [isVisible]);

    return (
        <div className="relative w-full max-w-sm h-47 rounded-xl overflow-hidden shadow-md bg-black border border-gray-600">
            <video
                ref={videoRef}
                src="https://res.cloudinary.com/dlxii2hkq/video/upload/f_auto,q_auto,w_720/v1762640002/music_video_eewntb.webm"
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            ></video>

            <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-white text-sm font-medium">
                <span>My artist</span>
            </div>
        </div>
    );
};

export default VideoMusic;
