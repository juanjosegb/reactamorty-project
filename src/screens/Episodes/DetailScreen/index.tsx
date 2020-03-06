import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";

import { ListCharacters } from "@Components/Common/List/ListCharacters";
import { ListItemCard } from "@Components/Custom/ListItem";
import { Avatar, Grid, List, ListItemAvatar, ListItemText, Paper } from "@material-ui/core";

import { GetCharacters, GetEpisodes } from "../../../apiClients/RickAndMorty";
import { CardTitle } from "../../../components/Custom/Card/CardTitle";
import { CustomContainerRaw } from "../../../components/Custom/Container";
import { CustomGridCenterItems } from "../../../components/Custom/Grid";
import { CustomSubTitle, CustomTitle } from "../../../components/Custom/Text";
import { ICharacter } from "../../../types/character";
import { IEpisode } from "../../../types/episode";

export const EpisodeDetailScreen = () => {

    const { id } = useParams();

    const [characters, setCharacters] = useState<ICharacter[]>({} as ICharacter[]);
    const [episode, setEpisode] = useState<IEpisode>({} as IEpisode);

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
            await fetchCharacters(result)
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

            <ListCharacters characters={characters} />


        </CustomContainerRaw>
    )
};