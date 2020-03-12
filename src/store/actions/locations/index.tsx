import { ILocation } from "src/types/location";

import { FETCH_LOCATIONS, FETCH_LOCATIONS_DONE, FETCH_LOCATIONS_ERROR } from "@Store/constants/locations";

import { IReduxAction } from "..";
import {ILocationState} from "@Store/reducers/locations";

export const fetchLocations = (state : ILocationState): IReduxAction => {
    return {
        type: FETCH_LOCATIONS,
        payload: state
    };
};

export const fetchLocationsDone = (locations: ILocation[]): IReduxAction => {
    return { type: FETCH_LOCATIONS_DONE, payload: locations };
};

export const fetchLocationsError = (): IReduxAction => {
    return { type: FETCH_LOCATIONS_ERROR };
};