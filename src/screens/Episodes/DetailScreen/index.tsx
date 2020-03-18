import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {ListCharacters} from "@Components/Common/List/ListCharacters";
import {Grid, Paper} from "@material-ui/core";

import {GetCharacters, GetEpisodes} from "@ApiClients/RickAndMorty";
import {CardTitle} from "@Components/Custom/Card/CardTitle";
import {CustomContainerRaw} from "@Components/Custom/Container";
import {CustomGridCenterItems} from "@Components/Custom/Grid";
import {CustomSubTitle, CustomTitle} from "@Components/Custom/Text";
import {ICharacter} from "@Types/character";
import {IEpisode} from "@Types/episode";
import {addEpisodeHistory} from "@Store/actions/history";
import {useDispatch} from "react-redux";

export const EpisodeDetailScreen = () => {

    const {id} = useParams();

    const [characters, setCharacters] = useState<ICharacter[]>({} as ICharacter[]);
    const [episode, setEpisode] = useState<IEpisode>({} as IEpisode);
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchCharacters = async (episode: any) => {
            let characterIds: number[] = [];
            episode.characters.forEach((character: any) => {
                characterIds.push(Number.parseInt(character.split('character/')[1]))
            });
            let characters = await GetCharacters(characterIds);
            setCharacters(characters.data);
        };

        const fetchEpisodeById = async () => {
            let result = await GetEpisodes([id?.toString()]);
            setEpisode(result);
            await fetchCharacters(result);
            if (id) {
                dispatch(addEpisodeHistory(id, result.name))
            }
        };

        fetchEpisodeById();
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
                                <CardTitle>{episode.name ? episode.name : "Name"}</CardTitle>
                            </CustomGridCenterItems>

                            <CustomGridCenterItems xs={12} sm={4}>
                                <CustomSubTitle>Type</CustomSubTitle>
                                <CardTitle>{episode.air_date ? episode.air_date : "Air Date"}</CardTitle>
                            </CustomGridCenterItems>

                            <CustomGridCenterItems xs={12} sm={4}>
                                <CustomSubTitle>Dimension</CustomSubTitle>
                                <CardTitle>{episode.episode ? episode.episode : "Episode"}</CardTitle>
                            </CustomGridCenterItems>
                        </Grid>
                    </Paper>
                </Grid>
            </CustomGridCenterItems>


            <CustomTitle>
                Participants
            </CustomTitle>

            <ListCharacters characters={characters}/>


        </CustomContainerRaw>
    )
};