import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
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
`;

export const NamePriceContainer = styled.span`
   width: 23%;
        text-align: center;
`;

export const QuantityContainer = styled.span`
  width: 23%;
        display: flex;
        justify-content: center;

        .value{
            margin: 0 0.5rem;
        }
        .arrow{
            cursor: pointer;
        }
`;

export const RemoveButtonContainer = styled.span`
  width: 8%;
        cursor: pointer;
        text-align: center;
`;
