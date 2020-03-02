import React from "react";
import { withRouter } from 'react-router-dom';
import { 
    SubTitleContainer,
    TitleContainer,
    ContentContainer,
    BackgroundImage,
    MenuItemContainer
} from './menu-item.styles'

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
    // console.log('linkUrl: ', `${match.url}${linkUrl}`);
    return (
        <MenuItemContainer 
            className={`${size}`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}

        >
            <BackgroundImage imageUrl={imageUrl} />
            <ContentContainer className="content">
                <TitleContainer>{title}</TitleContainer>
                <SubTitleContainer >Shop now</SubTitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    );
}  

export default withRouter(MenuItem);
