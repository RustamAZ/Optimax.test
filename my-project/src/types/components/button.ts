export interface ButtonProps {
    text: string,
    link?: string,
    type?: "button" | "submit" | "reset" | undefined,
    clickHandler?: () => any,
    disabled?: boolean
}
