import { IEpisode } from "src/types/episode";

import { FETCH_EPISODES, FETCH_EPISODES_CACHE, FETCH_EPISODES_DONE, FETCH_EPISODES_ERROR } from "@Store/constants/episodes";
import { IEpisodeState } from "@Store/reducers/episodes";

import { IReduxAction } from "..";

export const fetchEpisodes = (state: IEpisodeState): IReduxAction => {
    return {
        type: FETCH_EPISODES,
        payload: state
    };
};

export const fetchEpisodesDone = (episodes: IEpisode[]): IReduxAction => {
    return { type: FETCH_EPISODES_DONE, payload: episodes };
};

export const fetchEpisodesCache = (episodes: IEpisode[]): IReduxAction => {
    return {
        type: FETCH_EPISODES_CACHE,
        payload: episodes
    }
}

export const fetchEpisodesError = (): IReduxAction => {
    return { type: FETCH_EPISODES_ERROR };
};