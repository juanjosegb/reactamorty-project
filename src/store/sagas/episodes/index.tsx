import { put, takeLatest } from 'redux-saga/effects';

import { GetAllEpisodes } from "@ApiClients/RickAndMorty";
import { IReduxAction } from "@Store/actions";
import { fetchEpisodesCache, fetchEpisodesDone, fetchEpisodesError } from '@Store/actions/episodes';
import { FETCH_EPISODES } from "@Store/constants/episodes";
import { responseToEpisodes } from "@Utils//mappers/responseToEpisodes";
import { checkDateIsDeprecated } from "@Utils/date";

import { IEpisode } from "../../../types/episode";

function* fetchEpisodesAsync(action: IReduxAction) {
    try {
        let results: IEpisode[];
        if (checkDateIsDeprecated(action.payload.date) || (action.payload.episodes.length == 0)) {
            results = yield (GetAllEpisodes().then(
                response => {
                    return responseToEpisodes(response);
                }
            ));
            yield put(fetchEpisodesDone(results))
        } else {
            results = action.payload.locations
            yield put(fetchEpisodesCache(results))
        }
    } catch (error) {
        yield put(fetchEpisodesError());
    }
}


export default function* episodesSaga() {
    yield takeLatest(FETCH_EPISODES, fetchEpisodesAsync)
}