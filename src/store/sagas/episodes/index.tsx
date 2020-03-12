import {put, takeLatest} from 'redux-saga/effects';
import {fetchEpisodesDone, fetchEpisodesError} from '@Store/actions/episodes';
import {FETCH_EPISODES} from "@Store/constants/episodes";
import {GetAllEpisodes} from "@ApiClients/RickAndMorty";
import {responseToEpisodes} from "@Utils//mappers/responseToEpisodes";
import {IEpisode} from "../../../types/episode";
import {IReduxAction} from "@Store/actions";
import {checkDateIsDeprecated} from "@Utils/date";

function* fetchEpisodesAsync(action: IReduxAction) {
    try {
        let results: IEpisode[];
        if (checkDateIsDeprecated(action.payload.date) || (action.payload.episodes.length == 0)) {
            results = yield (GetAllEpisodes().then(
                response => {
                    return responseToEpisodes(response);
                }
            ));
        } else {
            results = action.payload.locations
        }
        yield put(fetchEpisodesDone(results))
    } catch (error) {
        yield put(fetchEpisodesError());
    }
}


export default function* episodesSaga() {
    yield takeLatest(FETCH_EPISODES, fetchEpisodesAsync)
}