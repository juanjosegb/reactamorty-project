import React from "react"

import { Grid } from "@material-ui/core"

import { CustomDivider } from "../components/Custom/Container"
import { CustomGridCenterItems } from "../components/Custom/Grid"
import { BoldSpan, CustomSpanStatus } from "../components/Custom/Text"
import { ICharacter } from "../types/character"

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