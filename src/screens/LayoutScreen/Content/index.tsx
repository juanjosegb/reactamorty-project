import React from "react";

import { CustomContainer } from "@Components/Custom/Container";

import Routes from "../../../router/router";

const Content = () => {

    return (
        <CustomContainer maxWidth="xl">
            <Routes />
        </CustomContainer>
    )
};

export default Content;