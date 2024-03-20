import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./theme";

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid ${colors.darkgreen};
    color: ${colors.darkgreen};
    font-size: 0.9em;
    margin: 0;
    padding: 7px 1em;
    cursor: pointer;
    margin-bottom: 1em;
`;

export const Header = styled.header`
    display: flex;
    background-color: ${colors.darkgreen};
    flex-direction: row;
    align-content: center;
    color: white;
    padding: 5px;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    color: ${colors.darkgreen};
    text-decoration: none;
`;

export const BtnLink = styled.button`
    background-color: transparent;
    padding: 1em;
    border-radius: 5px;
    font-size: 0.9em;
    border: 3px solid ${colors.darkgreen};
    cursor: pointer;
    margin: 0.5em;
`;

export const DetailsCont = styled.div`
    background-color: #F5F5F5;
    color: ${colors.darkgreen};
    border: 1px solid ${colors.darkgreen};
    box-shadow: 0px 2px 15px -3px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 2px 15x -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 15px -3px rgba(0,0,0,0.75);
    border-radius: 10px;
    padding: 0.5em;
    margin-top: 1em;
    width: 50%;
    height: 35vh;
    margin: 0 auto;
`;

export const CenteredCont = styled.div`
    height: 100vh;
    width: 80%;
    margin: 0 auto;
`;

export const CenterInfo = styled.div`
    justify-content: center;
    text-align: center;
    width:100%;

    ul li {
        display: inline-block;
    }
`;