import styled from "styled-components";

import {Container} from "@material-ui/core";

export const CustomContainer = styled(Container)`
    background: linear-gradient(#87BFCF, #7dd333);
    padding-top: 10vh;
    padding-bottom: 10vh;
`;

export const CustomContainerRaw = styled.div`
    padding-top: 2vh;
`;

export const CustomContainerDatatable = styled.div`
    margin-top: 10vh;
    table {
        border: solid 2px #38B1C8;
    }
    thead {
        background: linear-gradient(45deg,#7dd333,#87BFCF);
        
    }
    thead > tr > th {
        color: white;
        font-weight: bold;
    }
    
`;