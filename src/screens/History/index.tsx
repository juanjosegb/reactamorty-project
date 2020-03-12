import React from 'react'
import { useSelector } from "react-redux";

import { TableButton } from '@Components/Custom/Button/TableButton';
import { CustomContainerRaw } from '@Components/Custom/Container';
import { CustomGridCenterItems } from '@Components/Custom/Grid';
import { CustomHistoryLink } from '@Components/Custom/NavLink';
import { CustomSubTitle, CustomTitle } from '@Components/Custom/Text';
import { RootState } from "@Store/reducers";
import { IHistoryState, getCharactersHistory, getEpisodesHistory, getLocationsHistory } from '@Store/reducers/history';
import { Grid, Paper } from '@material-ui/core';

const HistoryScreen = () => {
    const historyState: IHistoryState = useSelector((state: RootState) => state.historyState);

    const resetHistory = () => {
        console.log('Reseting');
    }

    return (
        <>
            <CustomTitle>
                History
            </CustomTitle>
            <CustomGridCenterItems item xs={12} sm={12}>
                <TableButton onClick={resetHistory}>Reset</TableButton>
            </CustomGridCenterItems>

            <CustomContainerRaw key={1}>
                <Grid container spacing={4}>
                    <CustomGridCenterItems item xs={12} sm={4}>
                        <Paper>
                            <CustomSubTitle>
                                Characters
                        </CustomSubTitle>
                            {
                                getCharactersHistory(historyState).length > 0 &&
                                getCharactersHistory(historyState).map((character: any, index) => (
                                    <div><CustomHistoryLink to={`/characters/${character.id}`} key={index}>{character.name}</CustomHistoryLink></div>
                                ))
                            }
                            {
                                getCharactersHistory(historyState).length === 0 &&
                                (<div>No data</div>)
                            }
                        </Paper>
                    </CustomGridCenterItems>

                    <CustomGridCenterItems item xs={12} sm={4}>
                        <Paper>
                            <CustomSubTitle>
                                Locations
                        </CustomSubTitle>

                            {
                                getLocationsHistory(historyState).length > 0 &&
                                getLocationsHistory(historyState).map((location: any, index) => (
                                    <div><CustomHistoryLink to={`/locations/${location.id}`} key={index}>{location.name}</CustomHistoryLink></div>
                                ))
                            }
                            {
                                getLocationsHistory(historyState).length === 0 &&
                                (<div>No data</div>)
                            }
                        </Paper>
                    </CustomGridCenterItems>

                    <CustomGridCenterItems item xs={12} sm={4}>
                        <Paper>
                            <CustomSubTitle>
                                Episodes
                        </CustomSubTitle>
                            {
                                getEpisodesHistory(historyState).length > 0 &&
                                getEpisodesHistory(historyState).map((episode: any, index) => (
                                    <div><CustomHistoryLink to={`/episodes/${episode.id}`} key={index}>{episode.name}</CustomHistoryLink></div>
                                ))
                            }
                            {
                                getEpisodesHistory(historyState).length === 0 &&
                                (<div>No data</div>)
                            }
                        </Paper>
                    </CustomGridCenterItems>


                </Grid>
            </CustomContainerRaw>
        </>

    )
};

export default HistoryScreen