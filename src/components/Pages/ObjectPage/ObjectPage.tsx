import Button, { ButtonTheme } from "../../ui/Button/Button";
import cls from "./ObjectPage.module.css";
import ArtObject from "../../ArtObject/ArtObject";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { useEffect } from "react";
import { selectArtObjectById } from "../../../store/gallerySlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Loader } from "../../ui/Loader/Loader";
import ErrorMessagePage from "../ErrorMessagePage/ErrorMessagePage";

const ObjectPage = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(selectArtObjectById(id));
        }
    }, [id, dispatch]);

    const selectedArtObject = useSelector((state: RootState) => state.gallery.selectedArtObject);
    const loading = useSelector((state: RootState) => state.gallery.loading);

    if (loading) {
        return <Loader />;
    }

    if (!selectedArtObject) {
        return <ErrorMessagePage title="Some problems" />;
    }

    return (
        <div className={cls.ObjectPage}>
            <Link to="/">
                <Button theme={ButtonTheme.OUTLINE}>Go Back</Button>
            </Link>
            {selectedArtObject && (
                <ArtObject
                    id={selectedArtObject?.id}
                    url={selectedArtObject?.webImage.url}
                    title={selectedArtObject?.title}
                />
            )}
            <h3>{selectedArtObject?.longTitle}</h3>
        </div>
    );
};

export default ObjectPage;
