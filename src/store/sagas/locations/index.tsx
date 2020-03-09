import { put, takeLatest } from 'redux-saga/effects';
import { GetAllLocations } from 'src/apiClients/RickAndMorty';

import { fetchLocationsDone, fetchLocationsError } from '@Store/actions/locations';
import { FETCH_LOCATIONS } from "@Store/constants/locations";

function* fetchLocationsAsync() {
    try {
        const results = yield (() => {
            console.log(GetAllLocations());
            return GetAllLocations();
        })

        yield put(fetchLocationsDone(results))
    } catch (error) {
        yield put(fetchLocationsError());
    }

}


export default function* locationsSaga() {
    yield takeLatest(FETCH_LOCATIONS, fetchLocationsAsync)
}