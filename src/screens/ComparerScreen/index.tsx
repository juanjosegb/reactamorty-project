import React, {useState} from 'react'
import {CustomContainerRaw} from '@Components/Custom/Container';
import {CustomGridCenterItems} from '@Components/Custom/Grid';
import {CustomSubTitle, CustomTitle} from '@Components/Custom/Text';
import {Grid, Paper} from '@material-ui/core';
import {Comparer} from "@Components/Common/ComparerInput";
import {ICharacter} from "@Types/character";
import {CardTitle} from "@Custom/Card/CardTitle";

const ComparerScreen = () => {

    const [firstCharacter, setFirstCharacter] = useState<ICharacter>();
    const [secondCharacter, setSecondCharacter] = useState<ICharacter>();
    const defaultFirstCharacterTitle = "Character 1";
    const defaultSecondCharacterTitle = "Character 2";
    const defaultSlash = "------------";

    return (
        <>
            <CustomTitle>
                Comparer
            </CustomTitle>
            <CustomGridCenterItems item xs={12} sm={12}>
                <Comparer setFirstCharacter={setFirstCharacter} setSecondCharacter={setSecondCharacter}/>
            </CustomGridCenterItems>

            <CustomContainerRaw key={1}>
                <Grid container spacing={4}>
                    <CustomGridCenterItems item xs={12} sm={6}>
                        <Paper>
                            <Grid container spacing={4}>
                                <CustomGridCenterItems item xs={12}>
                                    <CustomSubTitle>
                                        {firstCharacter && firstCharacter.name}
                                        {!firstCharacter && defaultFirstCharacterTitle}
                                    </CustomSubTitle>
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item xs={12} sm={6}>
                                    <CustomSubTitle>Status</CustomSubTitle>
                                    <CardTitle>
                                        {firstCharacter && firstCharacter.status}
                                        {!firstCharacter && defaultSlash}
                                    </CardTitle>
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item xs={12} sm={6}>
                                    <CustomSubTitle>Gender</CustomSubTitle>
                                    <CardTitle>
                                        {firstCharacter && firstCharacter.gender}
                                        {!firstCharacter && defaultSlash}
                                    </CardTitle>
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item xs={12} sm={6}>
                                    <CustomSubTitle>Species</CustomSubTitle>
                                    <CardTitle>
                                        {firstCharacter && firstCharacter.species}
                                        {!firstCharacter && defaultSlash}
                                    </CardTitle>
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item xs={12} sm={6}>
                                    <CustomSubTitle>Type</CustomSubTitle>
                                    <CardTitle>
                                        {firstCharacter && firstCharacter.type}
                                        {!firstCharacter && defaultSlash}
                                    </CardTitle>
                                </CustomGridCenterItems>
                            </Grid>
                        </Paper>
                    </CustomGridCenterItems>

                    <CustomGridCenterItems item xs={12} sm={6}>
                        <Paper>
                            <Grid container spacing={4}>
                                <CustomGridCenterItems item xs={12}>
                                    <CustomSubTitle>
                                        {secondCharacter && secondCharacter.name}
                                        {!secondCharacter && defaultSecondCharacterTitle}
                                    </CustomSubTitle>
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item sm={6}>
                                    <CustomSubTitle>Status</CustomSubTitle>
                                    <CardTitle>
                                        {secondCharacter && secondCharacter.status}
                                        {!secondCharacter && defaultSlash}
                                    </CardTitle>
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item sm={6}>
                                    <CustomSubTitle>Gender</CustomSubTitle>
                                    <CardTitle>
                                        {secondCharacter && secondCharacter.gender}
                                        {!secondCharacter && defaultSlash}
                                    </CardTitle>
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item sm={6}>
                                    <CustomSubTitle>Species</CustomSubTitle>
                                    <CardTitle>
                                        {secondCharacter && secondCharacter.species}
                                        {!secondCharacter && defaultSlash}
                                    </CardTitle>
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item sm={6}>
                                    <CustomSubTitle>Type</CustomSubTitle>
                                    <CardTitle>
                                        {secondCharacter && secondCharacter.type}
                                        {!secondCharacter && defaultSlash}
                                    </CardTitle>
                                </CustomGridCenterItems>
                            </Grid>
                        </Paper>
                    </CustomGridCenterItems>


                </Grid>
            </CustomContainerRaw>
        </>

    )
};

export default ComparerScreen