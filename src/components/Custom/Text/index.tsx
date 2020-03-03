import styled from "styled-components";

export const CustomTitle = styled.h1`
    font-weight: bold;
    color: #ED9896;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 15px;
    text-shadow: 1px 0 #B22825, -1px 0 #B22825, 0 -1px #B22825, 0 1px #B22825;
`

export const BoldSpan = styled.span`
    font-weight: bold
`

export const CustomSpanStatus = styled.span`
    color: ${props => props.children?.toString() == 'Alive' ? 'green' : props.children?.toString() == 'Dead' ? 'red' : 'black'};
`
