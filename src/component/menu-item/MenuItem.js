import React from 'react';
import './menu-item.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({ title, image, size, history, linkUrl, match }) => {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
                className="image-background"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div >
    )
}

export default withRouter(MenuItem);