export interface IComponent {
    handleScrollClick: (position: number) => void;
    text: string,
    top: number
}

export interface IRedirect {
    handleRedirect: (url: string) => void
}
