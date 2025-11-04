import Profile from "./components/Profile";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-6 px-4">
      <Profile />
      <VideoSection />
    </main>
  );
}

export default App;
