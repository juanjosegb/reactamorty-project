import React, {useEffect, useState} from 'react'

import Datatable from "@Components/Common/Datatable";
import {GenericFilter} from '@Components/Common/Filter';
import {CustomContainerDatatable, CustomContainerRaw} from "@Components/Custom/Container";
import {LocationsFilterOptions} from '@Constants/FilterOptions';
import {LocationsTableColumns} from "@Constants/LocationsTableColumns";

import {GetAllLocations} from "../../../apiClients/RickAndMorty";
import {ILocation} from "../../../types/location";
import {responseToLocations} from '../../../utils/mappers/responseToLocations';
import {CustomGridCenterItems} from "@Components/Custom/Grid";
import {CustomTitle} from "@Components/Custom/Text";
import {TransitionsModal} from "@Components/Common/Modal";
import {ComplexFilter} from "@Components/Common/ComplexFilter";
import {LocationCriteria, ValuesLocationsCriteria} from "@Constants/locations";

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

        <CustomContainerRaw key={1}>
            <CustomTitle>
                List of all Locations
            </CustomTitle>

            <CustomContainerDatatable>
                <CustomGridCenterItems xs={12}>

                    <GenericFilter setTopics={setLocations} allTopics={allLocations}
                                   filterOptions={LocationsFilterOptions}/>

                    <TransitionsModal button={"Complex Filter"} title={"Complex Filter"}>
                        <ComplexFilter topicCriteria={LocationCriteria} initialValues={ValuesLocationsCriteria}/>
                    </TransitionsModal>

                </CustomGridCenterItems>

                {locations &&
                <Datatable columns={LocationsTableColumns} rows={locations} topic={"locations"}/>
                }
            </CustomContainerDatatable>
        </CustomContainerRaw>
    );
};

export default LocationsScreen