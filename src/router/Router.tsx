import { Route, Routes } from "react-router-dom";
import App from "../App";
import MusicSection from "../pages/MusicView/MusicSection";


const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/music" element={<MusicSection />} />
            </Routes>
        </>
    )
}

export default Router
