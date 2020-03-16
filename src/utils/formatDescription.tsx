import React from "react"

import {CustomDivider} from "@Components/Custom/Container"
import {CustomGridCenterItems} from "@Components/Custom/Grid"
import {BoldSpan, CustomSpanStatus} from "@Components/Custom/Text"
import {Grid} from "@material-ui/core"

import {ICharacter} from "@Types/character"

export const formatDescription = (character: ICharacter) => {

    return (
        <CustomGridCenterItems container>
            <Grid item xs={6}>
                <CustomDivider>
                    <BoldSpan>Gender:</BoldSpan> {character.gender}
                </CustomDivider>
                <CustomDivider>
                    <BoldSpan>Status:</BoldSpan> <CustomSpanStatus>{character.status}</CustomSpanStatus>
                </CustomDivider>
                <CustomDivider>
                    <BoldSpan>Species:</BoldSpan> {character.species}
                </CustomDivider>
                <CustomDivider>
                    <BoldSpan>Species:</BoldSpan> {character.species}
                </CustomDivider>
            </Grid>


            <Grid item xs={6}>
                <CustomDivider>
                    <BoldSpan>Origin:</BoldSpan> {character.origin.name}
                </CustomDivider>
                <CustomDivider>
                    <BoldSpan>Location:</BoldSpan> {character.location.name}
                </CustomDivider>
            </Grid>
        </CustomGridCenterItems>
    )
}