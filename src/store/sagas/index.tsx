import { all } from 'redux-saga/effects';

import episodesSaga from "@Store/sagas/episodes";
import locationsSaga from '@Store/sagas/locations';

export default function* rootSaga() {
    yield all([
        locationsSaga(),
        episodesSaga(),
        //TODO: INCLUDE CHARACTERS SAGA
    ])
}