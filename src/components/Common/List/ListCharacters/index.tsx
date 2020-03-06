import React from "react";
import { useHistory } from "react-router-dom";
import { ICharacter } from "src/types/character";

import { CustomGridCenterItems } from "@Components/Custom/Grid";
import { ListItemCard } from "@Components/Custom/ListItem";
import { Avatar, Grid, ListItemAvatar, ListItemText } from "@material-ui/core";

export const ListCharacters = (props: any) => {

    const { characters } = props;

    const history = useHistory();

    const navigateToCharacterDetail = (id: number) => {
        history.push(`/characters/${id}`);
    }

    return (
        <CustomGridCenterItems spacing={4} container>

            {characters.length > 0 &&
                characters.map((character: ICharacter, index: number) => (
                    <Grid item xs={6} sm={4} md={3}>
                        <ListItemCard onClick={() => { navigateToCharacterDetail(character.id) }} button alignItems="center">

                            <ListItemAvatar>
                                <Avatar alt={character.name} src={character.image} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={character.name}
                            />
                        </ListItemCard>
                    </Grid>
                ))
            }

        </CustomGridCenterItems>
    )
}
