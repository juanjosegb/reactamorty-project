import React, {useState} from 'react'
import {CustomContainerRaw} from '@Components/Custom/Container';
import {CustomGridCenterItems} from '@Components/Custom/Grid';
import {CustomSubTitle, CustomTitle} from '@Components/Custom/Text';
import {Grid, Paper} from '@material-ui/core';
import {Comparer} from "@Components/Common/ComparerInput";
import {ICharacter} from "@Types/character";

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
                                        {defaultFirstCharacterTitle}
                                    </CustomSubTitle>
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item xs={12} sm={6}>
                                    <CustomSubTitle>Name</CustomSubTitle>
                                    {firstCharacter && firstCharacter.name}
                                    {!firstCharacter && defaultSlash}
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item xs={12} sm={6}>
                                    <CustomSubTitle>Status</CustomSubTitle>
                                    {firstCharacter && firstCharacter.status}
                                    {!firstCharacter && defaultSlash}
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item xs={12} sm={6}>
                                    <CustomSubTitle>Gender</CustomSubTitle>
                                    {firstCharacter && firstCharacter.gender}
                                    {!firstCharacter && defaultSlash}
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item xs={12} sm={6}>
                                    <CustomSubTitle>Species</CustomSubTitle>
                                    {firstCharacter && firstCharacter.species}
                                    {!firstCharacter && defaultSlash}
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item xs={12} sm={6}>
                                    <CustomSubTitle>Type</CustomSubTitle>
                                    {firstCharacter && firstCharacter.type}
                                    {!firstCharacter && defaultSlash}
                                </CustomGridCenterItems>
                            </Grid>
                        </Paper>
                    </CustomGridCenterItems>

                    <CustomGridCenterItems item xs={12} sm={6}>
                        <Paper>
                            <Grid container spacing={4}>
                                <CustomGridCenterItems item xs={12}>
                                    <CustomSubTitle>
                                        {defaultSecondCharacterTitle}
                                    </CustomSubTitle>
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item sm={6}>
                                    <CustomSubTitle>Name</CustomSubTitle>
                                    {secondCharacter && secondCharacter.name}
                                    {!secondCharacter && defaultSlash}
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item sm={6}>
                                    <CustomSubTitle>Status</CustomSubTitle>
                                    {secondCharacter && secondCharacter.status}
                                    {!secondCharacter && defaultSlash}
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item sm={6}>
                                    <CustomSubTitle>Gender</CustomSubTitle>
                                    {secondCharacter && secondCharacter.gender}
                                    {!secondCharacter && defaultSlash}
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item sm={6}>
                                    <CustomSubTitle>Species</CustomSubTitle>
                                    {secondCharacter && secondCharacter.species}
                                    {!secondCharacter && defaultSlash}
                                </CustomGridCenterItems>
                                <CustomGridCenterItems item sm={6}>
                                    <CustomSubTitle>Type</CustomSubTitle>
                                    {secondCharacter && secondCharacter.type}
                                    {!secondCharacter && defaultSlash}
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