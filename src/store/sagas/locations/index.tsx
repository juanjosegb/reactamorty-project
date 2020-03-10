import {put, takeLatest} from 'redux-saga/effects';
import {fetchLocationsDone, fetchLocationsError} from '@Store/actions/locations';
import {FETCH_LOCATIONS} from "@Store/constants/locations";
import {GetAllLocations} from "@ApiClients/RickAndMorty";
import {responseToLocations} from "@Utils//mappers/responseToLocations";
import {ILocation} from "../../../types/location";
import {IReduxAction} from "@Store/actions";
import {checkDateIsDeprecated} from "@Utils/date";

function* fetchLocationsAsync(action: IReduxAction) {
    console.log(action);
    try {
        let results: ILocation[];
        if (checkDateIsDeprecated(action.payload.date) || (action.payload.locations.length == 0)) {
            results = yield (GetAllLocations().then(
                response => {
                    return responseToLocations(response);
                }
            ));
        } else {
            results = action.payload.locations
        }
        yield put(fetchLocationsDone(results))
    } catch (error) {
        yield put(fetchLocationsError());
    }

}


export default function* locationsSaga() {
    yield takeLatest(FETCH_LOCATIONS, fetchLocationsAsync)
}