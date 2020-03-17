import React from "react";
import styled from "styled-components";

import {AlignedItem} from "@Components/Custom/AlignedItem";
import {FooterDivider} from "@Components/Custom/Divider";
import {CustomFooterImage} from "@Components/Custom/FooterImage";
import {GridFooterDivider} from "@Components/Custom/GridFooterDivider";
import LegalAdvice from "@Components/Layout/Footer/LegalAdvice";
import SocialLinks from "@Components/Layout/Footer/SocialLinks";
import StackedMenu from "@Components/Layout/Footer/StackedMenu";
import {Grid} from "@material-ui/core";

const Footer = () => {
    const Trailer = styled.div`
        background-color: #38B1C8;
    `;

    return (
        <Trailer>
            <Grid container spacing={0}>

                <Grid item xs={12} sm={5}>
                    <AlignedItem>
                        <Grid item xs={12}>
                            <CustomFooterImage
                                src="https://media.cdn.adultswim.com/uploads/20191004/191041327281-r&m4_Hero_000000.png"/>
                        </Grid>
                        <Grid container item xs={12} spacing={0}>
                            <SocialLinks/>
                        </Grid>
                    </AlignedItem>
                </Grid>

                <GridFooterDivider item xs={12} sm={2}>
                    <FooterDivider variant={"middle"} orientation={"vertical"}/>
                </GridFooterDivider>
                <Grid item xs={12} sm={5}>
                    <StackedMenu/>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <LegalAdvice/>
            </Grid>
        </Trailer>
    );
};

export default Footer;