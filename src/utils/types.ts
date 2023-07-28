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

export interface PopupProps {
    open: boolean;
    onClose: () => void;
    image: string;
    description: string;
    title: string,
    category: string,
    fullVideoUrl: string
}

interface ISingleData {
    image: string,
    description: string;
    title: string,
    category: string
    fullVideoUrl: string
}
export type IData = Array<ISingleData>
