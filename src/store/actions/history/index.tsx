import { ADD_CHARACTERS_HISTORY } from "src/store/constants/actions";

import { IReduxAction } from "..";

export const addCharacterHistory = (payload: string): IReduxAction => {
    return { type: ADD_CHARACTERS_HISTORY, payload };
}