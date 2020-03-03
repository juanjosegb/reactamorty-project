import React from "react"

import { Grid } from "@material-ui/core"

import { CustomGridCenterItems } from "../components/Custom/Grid"
import { BoldSpan, CustomSpanStatus } from "../components/Custom/Text"
import { ICharacter } from "../types/character"

export const formatDescription = (character: ICharacter) => {

    return (
        <CustomGridCenterItems container>
            <Grid item xs={6}>
                <div>
                    <BoldSpan>Gender:</BoldSpan> {character.gender}
                </div>
                <div>
                    <BoldSpan>Status:</BoldSpan> <CustomSpanStatus>{character.status}</CustomSpanStatus>
                </div>
                <div>
                    <BoldSpan>Species:</BoldSpan> {character.species}
                </div>
                <div>
                    <BoldSpan>Species:</BoldSpan> {character.species}
                </div>
            </Grid>


            <Grid item xs={6}>
                <div>
                    <BoldSpan>Origin:</BoldSpan> {character.origin.name}
                </div>
                <div>
                    <BoldSpan>Location:</BoldSpan> {character.location.name}
                </div>
            </Grid>
        </CustomGridCenterItems>
    )
}