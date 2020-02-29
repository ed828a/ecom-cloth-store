import styled from "styled-components";

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;

    .collection-item {
        margin-bottom: 30px;
    }
`;

export const CollectionPageTitleContainer = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
`;
