import React from 'react';
import './menu-item.scss';

const MenuItem = ({ title, image, size }) => {
    return (
        <div className={`${size} menu-item`} >
            <div
                className="image-background"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div >
    )
}

export default MenuItem
