import ResponsiveBackground from "./components/ResponsiveBackground";
import LinkTree from "./pages/LinkTree/components/LinkTree";
import Profile from "./pages/LinkTree/components/Profile";
import VideoSection from "./pages/LinkTree/components/VideoSection";// lazy loadind for backgounds

function App() {
  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen gap-5 px-4 overflow-hidden">
      <ResponsiveBackground />

      <Profile />
      <VideoSection />
      <LinkTree />
    </main>
  );
}

export default App;
