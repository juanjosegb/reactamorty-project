import {put, takeLatest} from 'redux-saga/effects';
import {ICharacter} from 'src/types/character';

import {IReduxAction} from "@Store/actions";
import {fetchCharactersDone, fetchCharactersError} from '@Store/actions/characters';
import {FETCH_CHARACTERS} from '@Store/constants/characters';
import {GetAllCharacters} from "@ApiClients/RickAndMorty";

function* fetchCharactersAsync(action: IReduxAction) {
    try {
        let results: ICharacter[];
        results = yield (GetAllCharacters(action.payload).then(
            response => {
                return {results: response.data.results, pages: response.data.info.pages};
            }
        ));
        yield put(fetchCharactersDone(results))
    } catch (error) {
        yield put(fetchCharactersError());
    }
}

export default function* charactersSaga() {
    yield takeLatest(FETCH_CHARACTERS, fetchCharactersAsync)
}