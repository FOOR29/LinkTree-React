import LinkTree from "./components/LinkTree";
import Profile from "./components/Profile";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-5 px-4">
      <Profile />
      <VideoSection />
      <LinkTree />
    </main>
  );
}

export default App;
