import { Suspense, lazy, useState, useEffect } from "react";
import LinkTree from "./components/LinkTree";
import Profile from "./components/Profile";
import VideoSection from "./components/VideoSection";
// lazy loadind for backgounds
const Backgraund = lazy(() => import("./components/backgrounds-pc/background-pc/Backgraund"));
const BackgroundMobile = lazy(() => import("./components/background-mobile/BackgroundMobile"));

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen gap-5 px-4 overflow-hidden">
      <Suspense fallback={null}>
        {/* Fondo dinámico según pantalla */}
        {isDesktop ? (
          <div className="absolute inset-0 -z-10">
            <Backgraund />
          </div>
        ) : (
          <div className="absolute inset-0 -z-10">
            <BackgroundMobile />
          </div>
        )}
      </Suspense>

      <Profile />
      <VideoSection />
      <LinkTree />
    </main>
  );
}

export default App;
