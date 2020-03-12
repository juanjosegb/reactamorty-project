import { ICharacter } from "src/types/character";

import { FETCH_CHARACTERS, FETCH_CHARACTERS_DONE, FETCH_CHARACTERS_ERROR } from "@Store/constants/characters";

import { IReduxAction } from "..";

export const fetchCharacters = (page: number = 1): IReduxAction => {
    return {
        type: FETCH_CHARACTERS,
        payload: page
    };
};

export const fetchCharactersDone = (characters: ICharacter[]): IReduxAction => {
    return { type: FETCH_CHARACTERS_DONE, payload: characters };
};

export const fetchCharactersError = (): IReduxAction => {
    return { type: FETCH_CHARACTERS_ERROR };
};