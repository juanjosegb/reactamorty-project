import {all, put, takeLatest} from 'redux-saga/effects';

import {GetAllLocations, GetFilteredLocations} from "@ApiClients/RickAndMorty";
import {IReduxAction} from "@Store/actions";
import {fetchLocationsCache, fetchLocationsDone, fetchLocationsError} from '@Store/actions/locations';
import {FETCH_FILTERED_LOCATIONS, FETCH_LOCATIONS} from "@Store/constants/locations";
import {responseToLocations} from "@Utils/mappers/responseToLocations";
import {checkDateIsDeprecated} from "@Utils/date";

import {ILocation} from "@Types/location";

function* fetchLocationsAsync(action: IReduxAction) {
    try {
        let results: ILocation[];
        if (checkDateIsDeprecated(action.payload.date) || (action.payload.locations.length === 0)) {
            results = yield (GetAllLocations().then(
                response => {
                    return responseToLocations(response);
                }
            ));
            yield put(fetchLocationsDone(results))
        } else {
            results = action.payload.locations;
            yield put(fetchLocationsCache(results))
        }

    } catch (error) {
        yield put(fetchLocationsError());
    }
}

function* fetchFilteredLocationsAsync(action: IReduxAction) {
    try {
        let results: ILocation[];
        results = yield (GetFilteredLocations(action.payload).then(
            response => {
                console.log(response);
                return responseToLocations(response);
            }
        ));
        yield put(fetchLocationsDone(results))
    } catch (error) {
        yield put(fetchLocationsError());
    }
}


export default function* locationsSaga() {
    yield all([yield takeLatest(FETCH_LOCATIONS, fetchLocationsAsync), yield takeLatest(FETCH_FILTERED_LOCATIONS, fetchFilteredLocationsAsync)]);
}