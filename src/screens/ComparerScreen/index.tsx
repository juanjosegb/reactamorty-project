import React from 'react'
import {CustomContainerRaw} from '@Components/Custom/Container';
import {CustomGridCenterItems} from '@Components/Custom/Grid';
import {CustomSubTitle, CustomTitle} from '@Components/Custom/Text';
import {Grid, Paper} from '@material-ui/core';
import {Comparer} from "@Components/Common/ComparerInput";

const ComparerScreen = () => {

    return (
        <>
            <CustomTitle>
                Comparer
            </CustomTitle>
            <CustomGridCenterItems item xs={12} sm={12}>
                <Comparer/>
            </CustomGridCenterItems>

            <CustomContainerRaw key={1}>
                <Grid container spacing={4}>
                    <CustomGridCenterItems item xs={12} sm={6}>
                        <Paper>
                            <CustomSubTitle>
                                Character 1
                            </CustomSubTitle>
                            <div>Choose character</div>
                        </Paper>
                    </CustomGridCenterItems>

                    <CustomGridCenterItems item xs={12} sm={6}>
                        <Paper>
                            <CustomSubTitle>
                                Character 2
                            </CustomSubTitle>
                            <div>Choose character</div>
                        </Paper>
                    </CustomGridCenterItems>


                </Grid>
            </CustomContainerRaw>
        </>

    )
};

export default ComparerScreen