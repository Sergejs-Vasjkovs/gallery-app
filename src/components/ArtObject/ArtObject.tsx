import { Link } from "react-router-dom";
import cls from "./ArtObject.module.css";

type ArtObjectProps = {
    id: string;
    url: string;
    title: string;
    preview?: boolean;
};

const ArtObject = ({ id, title, url, preview = false }: ArtObjectProps) => {
    return (
        <>
            {preview ? (
                <Link to={id}>
                    <img src={url} alt={title} className={cls.ArtObjectPreview} />
                </Link>
            ) : (
                <img src={url} alt={title} className={cls.ArtObject} />
            )}
        </>
    );
};

export default ArtObject;
