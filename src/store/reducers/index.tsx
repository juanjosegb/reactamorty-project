import {combineReducers} from "redux";
import {historyReducer} from "./history";
import {locationsReducer} from "./locations";
import {episodesReducer} from "@Store/reducers/episodes";

export const rootReducer = combineReducers(
    {
        historyState: historyReducer,
        locationsState: locationsReducer,
        episodesState: episodesReducer
    }
);

export type RootState = ReturnType<typeof rootReducer>