import Beams from "./Backgrounds/Beams/Beams";
import LinkTree from "./components/LinkTree";
import Profile from "./components/Profile";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen gap-5 px-4 overflow-hidden">

      {/* 👇🏽 FONDO ANIMADO DETRÁS DE TODO */}
      <div className="absolute inset-0 -z-10">
        <Beams
          beamWidth={3}
          beamHeight={25}
          beamNumber={12}
          lightColor="#808080"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={40}
        />
      </div>

      <Profile />
      <VideoSection />
      <LinkTree />
    </main>
  );
}

export default App;
