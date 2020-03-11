import { put, takeLatest } from 'redux-saga/effects';
import { ICharacter } from 'src/types/character';

import { IReduxAction } from "@Store/actions";
import { fetchCharactersDone, fetchCharactersError } from '@Store/actions/characters';
import { FETCH_CHARACTERS } from '@Store/constants/characters';

function* fetchCharactersAsync(action: IReduxAction) {
    try {
        let results: ICharacter[] = [];
        //TODO: GET DATA FROM API
        yield put(fetchCharactersDone(results))
    } catch (error) {
        yield put(fetchCharactersError());
    }
}


export default function* locationsSaga() {
    yield takeLatest(FETCH_CHARACTERS, fetchCharactersAsync)
}