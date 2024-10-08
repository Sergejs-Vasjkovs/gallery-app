import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import cls from "./Button.module.css";

export enum ButtonTheme {
    MAIN = "Main",
    OUTLINE = "Outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    children?: ReactNode;
    onClick?: () => void;
}

const Buttons = (props: ButtonProps) => {
    const { theme = ButtonTheme.MAIN, children, onClick } = props;
    return (
        <button className={`${cls.Button} ${cls[theme]}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default memo(Buttons);
