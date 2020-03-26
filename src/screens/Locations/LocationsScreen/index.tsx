import React, {useEffect, useState} from 'react'

import Datatable from "@Components/Common/Datatable";
import {LocationsTableColumns} from "@Constants/LocationsTableColumns";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilteredLocations} from "@Store/actions/locations";
import {RootState} from "@Store/reducers";
import {getLocations, ILocationState} from "@Store/reducers/locations";
import {LocationsFilterOptions} from "@Constants/FilterOptions";
import {CustomTitle} from "@Custom/Text";
import {CustomGridCenterItems} from "@Custom/Grid";
import {TransitionsModal} from "@Components/Common/Modal";
import {FilterLocationDefault, LocationCriteria, ValuesLocationsCriteria} from "@Constants/locations";
import {IFilterLocation} from "@Types/location";
import {valuesToFilterLocation} from "@Utils/mappers/valuesToFilterLocation";

const LocationsScreen = () => {
    const dispatch = useDispatch();
    const locationsState: ILocationState = useSelector((state: RootState) => state.locationsState);
    const [filteredValues, setFilteredValues] = useState<IFilterLocation>(FilterLocationDefault);


    useEffect(() => {
        setFilteredValues(valuesToFilterLocation(filteredValues));
        dispatch(fetchFilteredLocations(filteredValues));
    }, [filteredValues]);

    return (
        <>
            <CustomTitle>
                List of all Locations
            </CustomTitle>
            <CustomGridCenterItems>
                <TransitionsModal button={"Complex Filter"} title={"Complex Filter"} topicCriteria={LocationCriteria}
                                  initialValues={ValuesLocationsCriteria} setFilteredValues={setFilteredValues}/>
            </CustomGridCenterItems>
            {getLocations(locationsState).length > 0 && (
                <Datatable columns={LocationsTableColumns} rows={getLocations(locationsState)} topic={"locations"}
                           filter={LocationsFilterOptions} state={locationsState} getTopic={getLocations}/>)}
        </>
    );
};

export default LocationsScreen