import { lazy, Suspense, useState, useEffect } from "react";

// Lazy load de los fondos
const BackgroundDesktop = lazy(() => import("../pages/LinkTree/backgrounds/background-pc/Backgraund"));
const BackgroundMobile = lazy(() => import("../pages/LinkTree/backgrounds/background-mobile/BackgroundMobile"));

export default function ResponsiveBackground() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Suspense fallback={null}>
            <div className="absolute inset-0 -z-10">
                {isDesktop ? <BackgroundDesktop /> : <BackgroundMobile />}
            </div>
        </Suspense>
    );
}
