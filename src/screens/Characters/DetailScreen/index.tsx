import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"

import Datatable from "@Components/Common/Datatable"
import {CardTitle} from "@Components/Custom/Card/CardTitle"
import {CustomContainerDatatable, CustomContainerRaw} from "@Components/Custom/Container"
import {CustomGridBordered, CustomGridCenterItems} from "@Components/Custom/Grid"
import {CustomSubTitle, CustomTitle} from "@Components/Custom/Text"
import {EpisodesTableColumns} from "@Constants/EpisodesTableColumns"
import {Grid, Paper} from "@material-ui/core"

import {GetCharacters, GetEpisodes} from "@ApiClients/RickAndMorty"
import {ICharacter} from "@Types/character"
import {IEpisode} from "@Types/episode"
import {responseToEpisodes} from "@Utils/mappers/responseToEpisodes"
import {EpisodesFilterOptions} from "@Constants/FilterOptions";
import {addCharacterHistory} from "@Store/actions/history";
import {IEpisodeState} from "@Store/reducers/episodes";
import {RootState} from "@Store/reducers";

export const CharacterDetailScreen = () => {

    const {id} = useParams();

    const [character, setCharacter] = useState<ICharacter>({} as ICharacter);
    const [episodes, setEpisodes] = useState<IEpisode[]>([] as IEpisode[]);
    const dispatch = useDispatch();
    const episodesState: IEpisodeState = useSelector((state: RootState) => state.episodesState);


    useEffect(() => {

        const fetchAppareances = async (character: ICharacter) => {
            let episodesIds: number[] = [];
            character.episode.forEach((chapter) => {
                episodesIds.push(Number.parseInt(chapter.split('episode/')[1]))
            });
            let appareances = await GetEpisodes(episodesIds);

            Array.isArray(appareances) ? setEpisodes(responseToEpisodes(appareances)) : setEpisodes(responseToEpisodes([appareances]));
        };

        const fetchCharacterById = async () => {
            let result = await (await GetCharacters([id?.toString()])).data;
            setCharacter(result);
            await fetchAppareances(result);
            if (id) {
                dispatch(addCharacterHistory(id, result.name))
            }
        };
        fetchCharacterById();
    }, [id]);


    return (

        <CustomContainerRaw key={1}>
            <CustomTitle>
                Detail
            </CustomTitle>

            <CustomGridCenterItems container spacing={6}>

                <Grid item xs={12} sm={12} lg={3} spacing={0}>
                    <CustomGridBordered item xs={12}>
                        <img src={character.image ? character.image : "https://i.gifer.com/7TwJ.gif"} alt="avatar"
                             width="100%" height="auto"/>
                    </CustomGridBordered>
                </Grid>


                <Grid item xs={12} sm={12} lg={9}>
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
                <Datatable columns={EpisodesTableColumns} rows={episodes} topic={"episodes"}
                           filter={EpisodesFilterOptions} state={episodesState} getTopic={() => episodes}/>
                }
            </CustomContainerDatatable>


        </CustomContainerRaw>
    )
};