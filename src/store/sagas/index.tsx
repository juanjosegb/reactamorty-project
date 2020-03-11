import {all} from 'redux-saga/effects';

import locationsSaga from '@Store/sagas/locations';
import episodesSaga from "@Store/sagas/episodes";

export default function* rootSaga() {
    yield all([
        locationsSaga(),
        episodesSaga()
    ])
}