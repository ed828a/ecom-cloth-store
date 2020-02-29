// import './homepage.scss';
import React from 'react';
import Directory from '../../component/directory/directory.component';
import { HomePageContainer } from './homepage.styles';


function HomePage() {
    return (
        <HomePageContainer className='homepage'>
            <Directory />
        </HomePageContainer>
    )
}

export default HomePage;
