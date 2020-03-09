import { ILocation } from "src/types/location";

import { FETCH_LOCATIONS, FETCH_LOCATIONS_DONE, FETCH_LOCATIONS_ERROR } from "@Store/constants/locations";

import { IReduxAction } from "..";

export const fetchLocations = (): IReduxAction => {
    return { type: FETCH_LOCATIONS };
}

export const fetchLocationsDone = (locations: ILocation[]): IReduxAction => {
    return { type: FETCH_LOCATIONS_DONE, payload: locations };
}

export const fetchLocationsError = (): IReduxAction => {
    return { type: FETCH_LOCATIONS_ERROR };
}