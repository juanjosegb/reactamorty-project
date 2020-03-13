import {IFilterLocation} from "../../types/location";
import {FilterLocationDefault} from "@Constants/locations";

export const valuesToFilterLocation = (values: any) => {
    var locations: IFilterLocation = FilterLocationDefault;
    locations.name = values.name;
    locations.type = values.type;
    locations.dimension = values.dimension;
    return locations;
};