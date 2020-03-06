import React, { useEffect, useState } from 'react'

import Datatable from "@Components/Common/Datatable";
import { GenericFilter } from '@Components/Common/Filter';
import { CustomContainerDatatable } from "@Components/Custom/Container";
import { LocationsFilterOptions } from '@Constants/FilterOptions';
import { LocationsTableColumns } from "@Constants/LocationsTableColumns";

import { GetAllLocations } from "../../../apiClients/RickAndMorty";
import { ILocation } from "../../../types/location";
import { responseToLocations } from '../../../utils/mappers/responseToLocations';

const LocationsScreen = () => {

    const [allLocations, setAllLocations] = useState([] as ILocation[]);
    const [locations, setLocations] = useState([] as ILocation[]);

    useEffect(() => {
        //Forced call to get data from API
        //TODO: Use sagas
        const fetchLocations = async () => {
            const locationsCollection: ILocation[] = responseToLocations((await GetAllLocations()));
            setAllLocations(locationsCollection);
            setLocations(locationsCollection);
        };
        fetchLocations();
    }, []);


    return (

        <CustomContainerDatatable>

            <GenericFilter setTopics={setLocations} allTopics={allLocations} filterOptions={LocationsFilterOptions} />

            {locations &&
                <Datatable columns={LocationsTableColumns} rows={locations} topic={"locations"} />
            }
        </CustomContainerDatatable>
    );
};

export default LocationsScreen