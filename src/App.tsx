import GradientBlinds from "./Backgrounds/GradientBlinds/GradientBlinds";
import LinkTree from "./components/LinkTree";
import Profile from "./components/Profile";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen gap-5 px-4 overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <GradientBlinds
          gradientColors={['#BDBDBD', '#6B6B6B']}
          angle={30}
          noise={0.3}
          blindCount={12}
          blindMinWidth={40}
          spotlightRadius={0.5}
          spotlightSoftness={0.5}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={3}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      <Profile />
      <VideoSection />
      <LinkTree />
    </main>
  );
}

export default App;
