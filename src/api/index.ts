import axios, { AxiosResponse } from "axios";

export interface IArtObject {
    id: string;
    webImage: {
        url: string;
    };
    title: string;
    longTitle: string;
}

export interface IApiResponse {
    artObjects: IArtObject[];
    count: number;
    countFacets: {
        hasimage: number;
        ondisplay: number;
    };
    elapsedMilliseconds: number;
    facets: any;
}

const $api = axios.create({
    baseURL: process.env.REACT_APP_RIJKS_API_URL,
});

export async function getGallery(page: number): Promise<AxiosResponse<IApiResponse> | undefined> {
    const apiKey = process.env.REACT_APP_RIJKS_API_KEY;
    try {
        const response = await $api.get<IApiResponse>(`en/collection?key=${apiKey}&ps=3&p=${page}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}
