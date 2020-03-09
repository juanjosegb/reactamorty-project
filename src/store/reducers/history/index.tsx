import { ADD_CHARACTERS_HISTORY, ADD_EPISODES_HISTORY, ADD_LOCATIONS_HISTORY } from "@Store/constants/actions"

export interface IHistoryState {
    charactersHistory: string[],
    locationsHistory: string[],
    episodesHistory: string[],
}

const initialState: IHistoryState = {
    charactersHistory: [],
    locationsHistory: [],
    episodesHistory: [],
}

export const historyReducer = (state: IHistoryState = initialState, action: any): IHistoryState => {
    console.log(action)
    switch (action.type) {
        case ADD_CHARACTERS_HISTORY:
            state.charactersHistory.push(action.payload)
            console.log(state.charactersHistory)
            return {
                ...state,
                charactersHistory: state.charactersHistory
            };

        case ADD_EPISODES_HISTORY:
            state.episodesHistory.push(action.payload)
            return {
                ...state,
                charactersHistory: state.charactersHistory
            };

        case ADD_LOCATIONS_HISTORY:
            state.locationsHistory.push(action.payload)
            return {
                ...state,
                charactersHistory: state.charactersHistory
            };

        default:
            return {
                ...state
            };
    }

}

export const getCharactersHistory = (state: IHistoryState) => state.charactersHistory
export const getLocationsHistory = (state: IHistoryState) => state.locationsHistory
export const getEpisodesHistory = (state: IHistoryState) => state.episodesHistory