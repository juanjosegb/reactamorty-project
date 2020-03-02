import React from 'react';
import axios from 'axios';
import {rickAndMortyApiConfig} from "../../environment/apiClients";

const apiClient = axios.create({
    baseURL: rickAndMortyApiConfig.baseURL,
    timeout: rickAndMortyApiConfig.timeout
});


//Characters
export const GetAllCharacters = () => {
    return apiClient.get( `character/`);
};

export const GetCharacters = (ids: []) => {
    return apiClient.get(`character/${ids}`);
};

export const GetFilteredCharacters = (name: string, status: string, species: string, type: string, gender: string) => {
    return apiClient.get(`character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`);
};

//Locations
export const GetAllLocations = () => {
    return apiClient.get( `location/`);
};

export const GetLocations = (ids: []) => {
    return apiClient.get(`location/${ids}`);
};

export const GetFilteredLocations = (name: string, type: string, dimension: string) => {
    return apiClient.get(`location/?name=${name}&type=${type}&dimension=${dimension}`);
};

//Episodes
export const GetAllEpisodes = () => {
    return apiClient.get( `episode/`);
};

export const GetEpisodes = (ids: []) => {
    return apiClient.get(`episode/${ids}`);
};

export const GetFilteredEpisodes = (name: string, episode: string) => {
    return apiClient.get(`episode/?name=${name}&episode=${episode}`);
};