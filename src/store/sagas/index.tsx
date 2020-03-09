import { all } from 'redux-saga/effects';

import locationsSaga from './locations';

export default function* rootSaga() {
    yield all([
        locationsSaga()
    ])
}