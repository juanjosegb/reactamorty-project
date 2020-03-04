import React, {useEffect, useState} from 'react'
import Datatable from "../../components/Common/Datatable";
import {LocationsTableColumns} from "../../constants/LocationsTableColumns";
import {CustomContainerDatatable} from "../../components/Custom/Container";
import {GetAllLocations} from "../../apiClients/RickAndMorty";
import {responseToLocations} from '../../utils/mappers/responseToLocations';
import {ILocation} from "../../types/location";

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
            <Datatable columns={LocationsTableColumns} rows={locations}/>
            }
        </CustomContainerDatatable>
    );
};

export default LocationsScreen