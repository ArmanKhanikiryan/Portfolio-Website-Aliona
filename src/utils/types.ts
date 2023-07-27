import img1 from "@/assets/work-test1.jpg";
import {ReactNode} from "react";

export interface IComponent {
    handleScrollClick: (position: number) => void
}

export interface IRedirect {
    handleRedirect: (url: string) => void
}

export interface IAnimatedButton {
    onClick: (position: number) => void;
    text: string,
    top: number
}

interface ISingleData {
    image: string,
    description: ReactNode,
    title: ReactNode,
    category:ReactNode
}
export type IData = Array<ISingleData>
