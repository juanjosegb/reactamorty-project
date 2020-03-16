import axios from 'axios';

import {rickAndMortyApiConfig} from "../../environment/apiClients";
import {concatPages, getNumberOfPages} from "../../utils/api";
import {IFilterCharacter} from "../../types/character";
import {FilterCharacterDefault} from "@Constants/characters";
import {IFilterEpisode} from "../../types/episode";
import {FilterEpisodeDefault} from "@Constants/episodes";
import {FilterLocationDefault} from "@Constants/locations";
import {IFilterLocation} from "../../types/location";

const apiClient = axios.create({
    baseURL: rickAndMortyApiConfig.baseURL,
    timeout: rickAndMortyApiConfig.timeout
});


//Characters
export const GetAllCharacters = (page: number = 1) => {
    return apiClient.get(`character/?page=${page}`);
};

export const GetCharacters = (ids: any[] = []) => {
    return apiClient.get(`character/${ids}`);
};

export const GetFilteredCharacters = (filter: IFilterCharacter = FilterCharacterDefault) => {
    return apiClient.get(`character/?page=${filter.page}&name=${filter.name}&status=${filter.status}&species=${filter.species}&type=${filter.type}&gender=${filter.gender}`);
};

//Locations
export const GetAllLocations = async () => {
    let response = await apiClient.get(`location/`);
    const numberOfPages = getNumberOfPages(response);
    return await concatPages(`location`, numberOfPages);
};

export const GetLocations = async (ids: any[] = []) => {
    let response = await apiClient.get(`location/${ids}`);
    const numberOfPages = getNumberOfPages(response);
    return (!numberOfPages) ? response.data : await concatPages(`location/${ids}`, numberOfPages);
};

export const GetFilteredLocations = async (filter: IFilterLocation = FilterLocationDefault) => {
    return apiClient.get(`location/?name=${filter.name}&type=${filter.type}&dimension=${filter.dimension}`);
};

//Episodes
export const GetAllEpisodes = () => {
    return apiClient.get(`episode/`);
};

export const GetEpisodes = async (ids: any[] = []) => {
    let response = await apiClient.get(`episode/${ids}`);
    const numberOfPages = getNumberOfPages(response);
    return (!numberOfPages) ? response.data : await concatPages(`episode/${ids}`, numberOfPages);
};

export const GetFilteredEpisodes = (filter: IFilterEpisode = FilterEpisodeDefault) => {
    return apiClient.get(`episode/?episode=${filter.episode}&name=${filter.name}`);
};

export const GetDataByPage = (page: number, url: string) => {
    return url.indexOf("?") !== -1 ?
        apiClient.get(`${url}&page=${page}`) :
        apiClient.get(`${url}/?page=${page}`);
};