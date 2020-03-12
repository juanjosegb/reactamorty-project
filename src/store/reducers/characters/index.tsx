import {ICharacter} from "src/types/character";

import {IReduxAction} from "@Store/actions";
import {FETCH_CHARACTERS, FETCH_CHARACTERS_DONE, FETCH_CHARACTERS_ERROR} from "@Store/constants/characters";

export interface ICharacterState {
    currentCharacters: ICharacter[],
    page: Number,
    isFetching: Boolean,
    isError: Boolean
}

const initialState: ICharacterState = {
    currentCharacters: [],
    page: 1,
    isFetching: false,
    isError: false
};

export const charactersReducer = (state: ICharacterState = initialState, action: IReduxAction): ICharacterState => {
    switch (action.type) {

        case FETCH_CHARACTERS:
            return {
                ...state,
                page: action.payload,
                isFetching: true,
                currentCharacters: []
            };
        case FETCH_CHARACTERS_DONE:
            return {
                ...state,
                isFetching: false,
                currentCharacters: action.payload
            };
        case FETCH_CHARACTERS_ERROR:
            return {
                ...state,
                page: 0,
                currentCharacters: [],
                isFetching: false,
                isError: true
            };
        default:
            return initialState;

    }

};

export const getCurrentCharacters = (state: ICharacterState) => state.currentCharacters;
export const getCurrentPage = (state: ICharacterState) => state.page;
export const getCharactersFetching = (state: ICharacterState) => state.isFetching;
export const getCharactersError = (state: ICharacterState) => state.isError;