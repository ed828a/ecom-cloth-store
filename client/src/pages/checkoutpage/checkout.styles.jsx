import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    button {
        margin-left: auto; 
        margin-top: 1.5rem;
    }  
    
    @media screen and (max-width: 500px) {
        width: 80%;
    }
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;
    display: inline-flex;
    justify-content: center;

    &:last-child {
        width: 8%;
    }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const TestWarningContainer = styled.div`
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 24px;
    color: red;

`;

