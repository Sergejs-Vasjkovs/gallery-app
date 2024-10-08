import { useEffect } from "react";
import { Loader } from "../../ui/Loader/Loader";
import cls from "./MainPage.module.css";
import ArtObject from "../../ArtObject/ArtObject";
import Button from "../../ui/Button/Button";
import { useAppDispatch } from "../../../store/hooks";
import { useSelector } from "react-redux";
import { fetchGallery, setPage, shuffleGallery } from "../../../store/gallerySlice";
import { RootState } from "../../../store/store";

const MainPage = () => {
    const dispatch = useAppDispatch();
    const { artObjects, loading } = useSelector((state: RootState) => state.gallery);

    useEffect(() => {
        if (artObjects.length === 0) {
            dispatch(fetchGallery());
        }
    }, [dispatch, artObjects.length]);

    const handleShuffle = () => {
        dispatch(setPage());
        dispatch(shuffleGallery());
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className={cls.MainPage}>
                <div className={cls.wrapper}>
                    {artObjects?.map((art) => (
                        <ArtObject
                            key={art.id}
                            id={art.id}
                            title={art.title}
                            url={art.webImage.url}
                            preview={true}
                        />
                    ))}
                </div>
            </div>
            <div className={cls.wrapper}>
                <Button onClick={handleShuffle}>Shuffle</Button>
            </div>
        </>
    );
};

export default MainPage;
