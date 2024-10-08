import { memo } from "react";
import cls from "./NavBar.module.css";

const NavBar = () => {
    return <div className={cls.NavBar}>Rijksmuseum shuffle</div>;
};

export default memo(NavBar);
