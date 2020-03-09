import axios from 'axios';
import React from 'react';

import { rickAndMortyApiConfig } from "../../environment/apiClients";
import { concatPages, getNumberOfPages } from "../../utils/api";

const apiClient = axios.create({
    baseURL: rickAndMortyApiConfig.baseURL,
    timeout: rickAndMortyApiConfig.timeout
});


//Characters
export const GetAllCharacters = () => {
    return apiClient.get(`character/`);
};

export const GetCharacters = (ids: any[] = []) => {
    return apiClient.get(`character/${ids}`);
};

export const GetFilteredCharacters = (name: string = "", status: string = "", species: string = "", type: string = "", gender: string = "") => {
    return apiClient.get(`character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`);
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

export const GetFilteredLocations = async (name: string = "", type: string = "", dimension: string = "", page: string = "") => {
    let response = await apiClient.get(`location/?page=${page}&name=${name}&type=${type}&dimension=${dimension}`);
    const numberOfPages = getNumberOfPages(response);
    return (!numberOfPages) ? response.data : await concatPages(`location/?page=${page}&name=${name}&type=${type}&dimension=${dimension}`, numberOfPages);
};

//Episodes
export const GetAllEpisodes = async () => {
    let response = await apiClient.get(`episode/`);
    const numberOfPages = getNumberOfPages(response);
    return await concatPages(`episode`, numberOfPages);
};

export const GetEpisodes = async (ids: any[] = []) => {
    let response = await apiClient.get(`episode/${ids}`);
    const numberOfPages = getNumberOfPages(response);
    return (!numberOfPages) ? response.data : await concatPages(`episode/${ids}`, numberOfPages);
};

export const GetFilteredEpisodes = async (name: string = "", episode: string = "") => {
    let response = await apiClient.get(`episode/?name=${name}&episode=${episode}`);
    const numberOfPages = getNumberOfPages(response);
    return (!numberOfPages) ? response.data : await concatPages(`episode/?name=${name}&episode=${episode}`, numberOfPages);
};

export const GetDataByPage = (page: number, url: string) => {
    return url.indexOf("?") !== -1 ?
        apiClient.get(`${url}&page=${page}`) :
        apiClient.get(`${url}/?page=${page}`);
};