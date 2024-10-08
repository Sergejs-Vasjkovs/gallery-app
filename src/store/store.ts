import { combineReducers } from "redux";
import { galleryReducer, GalleryState } from "./gallerySlice";

export interface RootState {
    gallery: GalleryState;
}

const rootReducer = combineReducers({
    gallery: galleryReducer,
});

export default rootReducer;
