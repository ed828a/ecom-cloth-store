import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    @media screen and (max-width: 500px) {
        flex-direction: column;
        padding: 0;
        margin-bottom: 10px;
        border: 1px solid darkgrey;
        width: 80%;
        min-height: 40px;
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    display: flex;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
        padding: 0;
        height: 30vh;
    }
`;

export const NamePriceContainer = styled.span`
    width: 23%;
    text-align: center;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;

export const QuantityContainer = styled.span`
    width: 23%;
    display: flex;
    justify-content: center;

    .value {
        margin: 0 0.5rem;
    }
    .arrow {
        cursor: pointer;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;

export const RemoveButtonContainer = styled.span`
    width: 8%;
    cursor: pointer;
    text-align: center;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;
