import { AiFillTikTok } from "react-icons/ai"
import { FaGithub } from "react-icons/fa"
import { PiInstagramLogoFill } from "react-icons/pi"
import { SiYoutubemusic } from "react-icons/si"
import type { linksType } from "../types"

const LinkTree = () => {

    const links: linksType[] = [
        {
            name: "GitHub",
            icon: <FaGithub />,
            url: "https://github.com/FOOR29"
        },
        {
            name: "Instagram",
            icon: <PiInstagramLogoFill />,
            url: "https://www.instagram.com/foorhx/"
        },
        {
            name: "Youtube Music",
            icon: <SiYoutubemusic />,
            url: "#"
        },
        {
            name: "Tiktok",
            icon: <AiFillTikTok />,
            url: "#"
        }
    ]


    return (
        <section className="w-full max-w-sm flex flex-col items-center gap-4 mt-1">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700/30 w-full text-white font-bold flex items-center gap-2 px-4 py-3 rounded-md 
                    transform transition-transform duration-300 backdrop-blur-md hover:-translate-y-1 hover:bg-gray-700/40
                    text-focus-in"
                >
                    <span className="text-3xl">{link.icon}</span>
                    <span>{link.name}</span>
                </a>
            ))}
        </section>

    )
}

export default LinkTree