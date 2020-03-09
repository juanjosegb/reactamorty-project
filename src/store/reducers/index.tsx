import { combineReducers } from "redux";

import { historyReducer } from "./history";

export const rootReducer = combineReducers(
    {
        historyState: historyReducer
    }
);

export type RootState = ReturnType<typeof rootReducer>