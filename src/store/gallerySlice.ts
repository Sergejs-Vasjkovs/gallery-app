import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getGallery, IArtObject } from "../api";

export interface GalleryState {
    artObjects: IArtObject[];
    selectedArtObject: IArtObject | null;
    loading: boolean;
    error: string | null;
    page: number;
}

const initialState: GalleryState = {
    artObjects: [],
    selectedArtObject: null,
    loading: false,
    error: null,
    page: 1,
};

export const fetchGallery = createAsyncThunk("gallery/fetchGallery", async (_, { getState }) => {
    const { gallery } = getState() as { gallery: GalleryState };
    const page = gallery.page;

    const response = await getGallery(page);

    if (!response || !response.data || !response.data.artObjects) {
        throw new Error("Failed to fetch data from server.");
    }
    return response.data.artObjects;
});

export const shuffleGallery = createAsyncThunk(
    "gallery/shuffleGallery",
    async (_, { getState }) => {
        const { gallery } = getState() as { gallery: GalleryState };
        const page = gallery.page;
        const response = await getGallery(page);

        if (!response || !response.data || !response.data.artObjects) {
            throw new Error("Failed to shuffle data from server.");
        }
        return response.data.artObjects;
    },
);

export const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        setArtObjects(state, action: PayloadAction<IArtObject[]>) {
            state.artObjects = action.payload;
        },
        selectArtObjectById(state, action: PayloadAction<string>) {
            state.selectedArtObject =
                state.artObjects.find((art) => art.id === action.payload) || null;
        },
        setPage: (state) => {
            state.page += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            //gallery/fetchGallery
            .addCase(fetchGallery.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGallery.fulfilled, (state, action) => {
                state.artObjects = action.payload;
                state.loading = false;
            })
            .addCase(fetchGallery.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch gallery";
            })

            //gallery/shuffleGallery
            .addCase(shuffleGallery.pending, (state) => {
                state.loading = true;
            })
            .addCase(shuffleGallery.fulfilled, (state, action) => {
                state.artObjects = action.payload;
                state.loading = false;
            })
            .addCase(shuffleGallery.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to shuffle gallery";
            });
    },
});

export const galleryReducer = gallerySlice.reducer;
export const { setArtObjects, selectArtObjectById, setPage } = gallerySlice.actions;
