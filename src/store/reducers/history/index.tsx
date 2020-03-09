import {ADD_CHARACTERS_HISTORY, ADD_EPISODES_HISTORY, ADD_LOCATIONS_HISTORY} from "@Store/constants/actions"

export interface IHistoryState {
    charactersHistory: string[],
    locationsHistory: string[],
    episodesHistory: string[],
}

const initialState: IHistoryState = {
    charactersHistory: [],
    locationsHistory: [],
    episodesHistory: [],
};

export const historyReducer = (state: IHistoryState = initialState, action: any): IHistoryState => {
    switch (action.type) {
        case ADD_CHARACTERS_HISTORY:
            return {
                ...state,
                charactersHistory: [...state.charactersHistory, action.payload]
            };

        case ADD_EPISODES_HISTORY:
            return {
                ...state,
                episodesHistory: [...state.episodesHistory, action.payload]
            };

        case ADD_LOCATIONS_HISTORY:
            return {
                ...state,
                locationsHistory: [...state.locationsHistory, action.payload]
            };
        default:
            return initialState;

    }

};

export const getCharactersHistory = (state: IHistoryState) => state.charactersHistory;
export const getLocationsHistory = (state: IHistoryState) => state.locationsHistory;
export const getEpisodesHistory = (state: IHistoryState) => state.episodesHistory;