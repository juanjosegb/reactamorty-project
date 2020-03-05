import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

import {Grid, Paper} from "@material-ui/core"

import {GetCharacters, GetLocations} from "../../../apiClients/RickAndMorty"
import {CardTitle} from "../../../components/Custom/Card/CardTitle"
import {CustomContainerRaw} from "../../../components/Custom/Container"
import {CustomGridCenterItems} from "../../../components/Custom/Grid"
import {CustomSubTitle, CustomTitle} from "../../../components/Custom/Text"
import {ILocation} from "../../../types/location";
import {ICharacter} from "../../../types/character";

export const LocationDetailScreen = () => {

    const {id} = useParams();

    const [location, setLocation] = useState<ILocation>({} as ILocation);
    const [characters, setCharacters] = useState<ICharacter>({} as ICharacter);

    useEffect(() => {

        const fetchResidents = async (location: any) => {
            let characterIds: number[] = [];
            location.residents.forEach((resident: any) => {
                characterIds.push(Number.parseInt(resident.split('character/')[1]))
            });
            let residents = await GetCharacters(characterIds);
            setCharacters(residents.data);
        };

        const fetchLocationById = async () => {
            let result = await GetLocations([id?.toString()]);
            setLocation(result);
            await fetchResidents(result);
        };

        fetchLocationById();
    }, [id]);

    return (

        <CustomContainerRaw key={1}>
            <CustomTitle>
                Detail
            </CustomTitle>
            <CustomGridCenterItems container spacing={6}>
                <Grid item xs={12} sm={12} lg={12}>
                    <Paper>
                        <Grid container spacing={4}>
                            <CustomGridCenterItems xs={12} sm={4}>
                                <CustomSubTitle>Name</CustomSubTitle>
                                <CardTitle>{location.name ? location.name : "Name"}</CardTitle>
                            </CustomGridCenterItems>

                            <CustomGridCenterItems xs={12} sm={4}>
                                <CustomSubTitle>Type</CustomSubTitle>
                                <CardTitle>{location.type ? location.type : "Type"}</CardTitle>
                            </CustomGridCenterItems>

                            <CustomGridCenterItems xs={12} sm={4}>
                                <CustomSubTitle>Dimension</CustomSubTitle>
                                <CardTitle>{location.dimension ? location.dimension : "Dimension"}</CardTitle>
                            </CustomGridCenterItems>

                        </Grid>

                    </Paper>
                </Grid>


            </CustomGridCenterItems>


        </CustomContainerRaw>
    )
};