import {all, put, takeLatest} from 'redux-saga/effects';

import {GetAllEpisodes, GetFilteredEpisodes} from "@ApiClients/RickAndMorty";
import {IReduxAction} from "@Store/actions";
import {fetchEpisodesCache, fetchEpisodesDone, fetchEpisodesError} from '@Store/actions/episodes';
import {FETCH_EPISODES, FETCH_FILTERED_EPISODES} from "@Store/constants/episodes";
import {responseToEpisodes} from "@Utils//mappers/responseToEpisodes";
import {checkDateIsDeprecated} from "@Utils/date";

import {IEpisode} from "@Types/episode";

function* fetchEpisodesAsync(action: IReduxAction) {
    try {
        let results: IEpisode[];
        if (checkDateIsDeprecated(action.payload.date) || (action.payload.episodes.length === 0)) {
            results = yield (GetAllEpisodes().then(
                response => {
                    return responseToEpisodes(response);
                }
            ));
            yield put(fetchEpisodesDone(results))
        } else {
            results = action.payload.episodes;
            yield put(fetchEpisodesCache(results))
        }
    } catch (error) {
        yield put(fetchEpisodesError());
    }
}

function* fetchFilteredEpisodesAsync(action: IReduxAction) {
    try {
        let results: IEpisode[];
        results = yield (GetFilteredEpisodes(action.payload).then(
            response => {
                return responseToEpisodes(response);
            }
        ));
        yield put(fetchEpisodesDone(results))
    } catch (error) {
        yield put(fetchEpisodesError());
    }
}


export default function* episodesSaga() {
    yield all([yield takeLatest(FETCH_EPISODES, fetchEpisodesAsync), yield takeLatest(FETCH_FILTERED_EPISODES, fetchFilteredEpisodesAsync)]);
}