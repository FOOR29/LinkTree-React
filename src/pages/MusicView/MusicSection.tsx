import CardPlaylist from "./components/CardPlaylist"
import ProfileMusic from "./components/ProfileMusic"
import VideoMusic from "./components/VideoMusic"

const MusicSection = () => {
    return (
        <>
            <header className="px-5 flex justify-center items-center border-b border-gray-900 fixed top-0 left-0 w-full z-50 bg-[rgb(11,11,11)]">
                <ProfileMusic />
            </header>
            <main className="relative flex flex-col items-center min-h-screen gap-5 px-5 overflow-hidden pt-24">
                <VideoMusic />
                <h3 className="text-gray-100 font-bold w-full text-2xl text-lef py-1">Top daily Playlist</h3>
                <section className="lg:w-auto">
                    <CardPlaylist />
                </section>
            </main>
        </>
    )
}

export default MusicSection