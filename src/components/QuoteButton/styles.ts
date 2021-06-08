import styled from "@emotion/styled";

export const QuoteButtonContainer = styled.button`
    background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #FFF;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    cursor: pointer;
    transition: background-size .8s ease;

    :hover {
        background-size: 400px;
    }
`;