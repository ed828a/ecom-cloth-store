import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media screen and (max-width: 500px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 10px;
    @media screen and (max-width: 500px) {
        width: 50px;
        padding: 0;
    }
`;

export const UserNameContainer = styled.div`
    font-size: 2rem;
    text-transform: uppercase;
    margin: auto 0;

    @media screen and (max-width: 500px) {
        font-size: 0.5rem;
        display: none;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 500px) {
        width: 80%;
    }
`;

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
    text-transform: uppercase;
`;
export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;
export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
    /* to style <Link> tag which is actually <a> tag.  */
    text-decoration: none;
    color: black;
`;
