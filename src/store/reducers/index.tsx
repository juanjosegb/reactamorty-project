import { combineReducers } from "redux";

import { historyReducer } from "./history";
import { locationsReducer } from "./locations";

export const rootReducer = combineReducers(
    {
        historyState: historyReducer,
        locationsState: locationsReducer
    }
);

export type RootState = ReturnType<typeof rootReducer>