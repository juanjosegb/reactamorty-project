import React from "react";
import Routes from "../../../router/router";
import styled from "styled-components";

const Content = () => {
    const Container = styled.div`
        flex: 1 1 auto;
        background-color: #F5F5F5;
        width: 100%;
        margin: auto;
        padding-top: 40px;
        min-height: 80vh;`;
    return (
        <Container>
            <Routes/>
        </Container>
    )
};

export default Content;