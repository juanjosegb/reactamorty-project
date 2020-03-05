import React, { useEffect, useState } from 'react'

import Datatable from "@Components/Common/Datatable";
import { CustomContainerDatatable } from "@Components/Custom/Container";
import { LocationsTableColumns } from "@Constants/LocationsTableColumns";

import { GetAllLocations } from "../../../apiClients/RickAndMorty";
import { ILocation } from "../../../types/location";
import { responseToLocations } from '../../../utils/mappers/responseToLocations';

const LocationsScreen = () => {

    const [locations, setLocations] = useState([] as ILocation[]);

    useEffect(() => {
        //Forced call to get data from API
        //TODO: Use sagas
        const fetchLocations = async () => {
            setLocations(responseToLocations((await GetAllLocations())))
        };
        fetchLocations();
    }, []);


    return (

        <CustomContainerDatatable>

            {locations &&
                <Datatable columns={LocationsTableColumns} rows={locations} topic={"locations"} />
            }
        </CustomContainerDatatable>
    );
};

export default LocationsScreen