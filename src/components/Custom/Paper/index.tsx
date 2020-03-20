import styled from "styled-components";

import {Paper} from "@material-ui/core";


export const InlinePaper = styled(Paper)`
    display: inline-block;
`

export const BlockPaper = styled(InlinePaper)`
    border-radius: 20px;
`