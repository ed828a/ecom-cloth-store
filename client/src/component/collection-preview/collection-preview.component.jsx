import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from "./collection-priview.styles";
import { withRouter } from 'react-router-dom';

function CollectionPreview({ title, items, history, match, routeName }) {
    // console.log('history: ', history);
    // console.log('match: ', match);
    // console.log('routeName: ', routeName);
    return (
        <CollectionPreviewContainer className="collection-preview">
            <TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)} >{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
}

export default withRouter(CollectionPreview);
