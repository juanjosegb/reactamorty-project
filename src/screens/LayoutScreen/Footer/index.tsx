import React from "react";
import styled from "styled-components";
import {Grid} from "@material-ui/core";
import {CustomFooterImage} from "../../../components/Custom/FooterImage";
import SocialLinks from "../../../components/Layout/Footer/SocialLinks";
import StackedMenu from "../../../components/Layout/Footer/StackedMenu";
import LegalAdvice from "../../../components/Layout/Footer/LegalAdvice";
import {AlignedItem} from "../../../components/Custom/AlignedItem";
import {FooterDivider} from "../../../components/Custom/FooterDivider";
import {GridFooterDivider} from "../../../components/Custom/GridFooterDivider";

const Footer = () => {
    const Trailer = styled.div`
        background-color: #38B1C8;`;
    return (
        <Trailer>
            <Grid container xs={12} spacing={0}>

                <Grid item xs={12} sm={5} spacing={0}>
                    <AlignedItem>
                        <Grid item xs={12} spacing={0}>
                            <CustomFooterImage
                                src="https://media.cdn.adultswim.com/uploads/20191004/191041327281-r&m4_Hero_000000.png"/>
                        </Grid>
                        <Grid item xs={12} spacing={0}>
                            <SocialLinks/>
                        </Grid>
                    </AlignedItem>
                </Grid>

                <GridFooterDivider item xs={12} sm={2} spacing={0}>
                    <FooterDivider variant={"middle"} orientation={"vertical"}/>
                </GridFooterDivider>
                <Grid item xs={12} sm={5} spacing={0}>
                    <StackedMenu/>
                </Grid>
            </Grid>
            <Grid item xs={12} spacing={0}>
                <LegalAdvice/>
            </Grid>
        </Trailer>
    );
};

export default Footer;