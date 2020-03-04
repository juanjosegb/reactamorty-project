import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Grid, Paper } from "@material-ui/core"

import { GetCharacters, GetEpisodes } from "../../../apiClients/RickAndMorty"
import Datatable from "../../../components/Common/Datatable"
import { CardTitle } from "../../../components/Custom/Card/CardTitle"
import { CustomContainerDatatable, CustomContainerRaw } from "../../../components/Custom/Container"
import { CustomGridBordered, CustomGridCenterItems } from "../../../components/Custom/Grid"
import { CustomSubTitle, CustomTitle } from "../../../components/Custom/Text"
import { EpisodesTableColumns } from "../../../constants/EpisodesTableColumns"
import { ICharacter } from "../../../types/character"
import { IEpisode } from "../../../types/episode"
import { responseToEpisodes } from "../../../utils/mappers/responseToEpisodes"

export const CharacterDetailScreen = () => {

    const { id } = useParams()

    const [character, setCharacter] = useState<ICharacter>({} as ICharacter)
    const [episodes, setEpisodes] = useState<IEpisode[]>([] as IEpisode[])

    useEffect(() => {

        const fetchAppareances = async (character: ICharacter) => {
            let episodesIds: number[] = [];
            character.episode.forEach((chapter) => {
                episodesIds.push(Number.parseInt(chapter.split('episode/')[1]))
            });
            let appareances = await GetEpisodes(episodesIds)

            Array.isArray(appareances) ? setEpisodes(responseToEpisodes(appareances)) : setEpisodes(responseToEpisodes([appareances]));
        }

        const fetchCharacterById = async () => {
            let result = await (await GetCharacters([id?.toString()])).data
            setCharacter(result)
            await fetchAppareances(result)
        }

        fetchCharacterById();
    }, [id])

    useEffect(() => {

    })


    return (

        <CustomContainerRaw key={1}>
            <CustomTitle>
                Detail
            </CustomTitle>

            <CustomGridCenterItems container spacing={6} >

                <Grid item xs={12} sm={12} lg={3} spacing={0} >
                    <CustomGridBordered item xs={12}>
                        <img src={character.image ? character.image : "https://evonexus.org/wp-content/uploads/2013/12/dummy-200x200.png"} alt="avatar" width="100%" height="auto" />
                    </CustomGridBordered>
                </Grid>


                <Grid item xs={12} sm={12} lg={9} >
                    <Paper>
                        <Grid container spacing={4}>
                            <CustomGridCenterItems xs={12} sm={6}>
                                <CustomSubTitle>Name</CustomSubTitle>
                                <CardTitle>{character.name ? character.name : "Name"}</CardTitle>
                            </CustomGridCenterItems>

                            <CustomGridCenterItems xs={12} sm={6}>
                                <CustomSubTitle>Status</CustomSubTitle>
                                <CardTitle>{character.status ? character.status : "Status"}</CardTitle>
                            </CustomGridCenterItems>

                            <CustomGridCenterItems xs={12} sm={6}>
                                <CustomSubTitle>Gender</CustomSubTitle>
                                <CardTitle>{character.gender ? character.gender : "Gender"}</CardTitle>
                            </CustomGridCenterItems>

                            <CustomGridCenterItems xs={12} sm={6}>
                                <CustomSubTitle>Species</CustomSubTitle>
                                <CardTitle>{character.species ? character.species : "Species"}</CardTitle>
                            </CustomGridCenterItems>

                            {
                                character.type && (
                                    <CustomGridCenterItems xs={12} sm={6}>
                                        <CustomSubTitle>Type</CustomSubTitle>
                                        <CardTitle>{character.type ? character.type : "Type"}</CardTitle>
                                    </CustomGridCenterItems>
                                )
                            }

                            <CustomGridCenterItems xs={12} sm={6}>
                                <CustomSubTitle>Appearances</CustomSubTitle>
                                <CardTitle>{character.episode ? character.episode.length : "Appearances"}</CardTitle>
                            </CustomGridCenterItems>

                            <CustomGridCenterItems xs={12} sm={6}>
                                <CustomSubTitle>Location</CustomSubTitle>
                                <CardTitle>{character.location ? character.location.name : "Location"}</CardTitle>
                            </CustomGridCenterItems>


                        </Grid>

                    </Paper>
                </Grid>

            </CustomGridCenterItems>

            <CustomTitle>
                Appareances
            </CustomTitle>

            <CustomContainerDatatable>
                {episodes.length > 0 &&
                    <Datatable columns={EpisodesTableColumns} rows={episodes} />
                }
            </CustomContainerDatatable>


        </CustomContainerRaw>
    )
}