import { Link } from "react-router-dom";
import Button, { ButtonTheme } from "../../ui/Button/Button";
import cls from "./ErrorMessagePage.module.css";

type ErrorMessagePageProps = {
    title: string;
    buttonName?: string;
};

const ErrorMessagePage = ({ title, buttonName = "go to start page" }: ErrorMessagePageProps) => {
    return (
        <div className={cls.ErrorMessagePage}>
            <h1>{title}</h1>
            <Link to="/">
                <Button theme={ButtonTheme.OUTLINE}>{buttonName}</Button>
            </Link>
        </div>
    );
};

export default ErrorMessagePage;
