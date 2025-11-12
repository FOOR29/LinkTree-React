import ProfileMusic from "./components/ProfileMusic"
import VideoMusic from "./components/VideoMusic"

const MusicSection = () => {
    return (
        <>
            <header className="bg-amber-950 px-5">
                <ProfileMusic />
            </header>
            <main className="relative flex flex-col justify-center items-center min-h-screen gap-5 px-5 overflow-hidden">
                <VideoMusic />
                {/* cards de playlist */}

            </main>
        </>
    )
}

export default MusicSection