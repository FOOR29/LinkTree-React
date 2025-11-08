import Backgraund from "./components/Backgrounds/background-pc/Backgraund";
import LinkTree from "./components/LinkTree";
import Profile from "./components/Profile";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen gap-5 px-4 overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <Backgraund />
      </div>

      <Profile />
      <VideoSection />
      <LinkTree />
    </main>
  );
}

export default App;
