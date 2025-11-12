import { IconType } from "react-icons";

export type linksType = {
    name: string;
    icon: any | IconType;
    url?: string;
}

export type Playlist = {
    title: string;
    songCount: number;
    imgSrc: string;
    url: string;
}