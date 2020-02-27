import "./menu-item.scss";
import React from "react";
import { withRouter } from 'react-router-dom'

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
    // console.log('linkUrl: ', `${match.url}${linkUrl}`);
    return (
        <div 
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}

        >
            <div
                className="image-background"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);
