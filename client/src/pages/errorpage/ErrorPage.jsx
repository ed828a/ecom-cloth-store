import './error-page.scss';
import React from 'react';
import Hero from '../../component/hero/Hero';
// import { Link } from 'react-router-dom';
import Banner from '../../component/banner/Banner'
import { PrimaryButtonContainer } from './error-page.styles';
// import CustomButton from '../../component/custom-button/CustomButton';


function ErrorPage() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <PrimaryButtonContainer to="/" >
                    return home
                </PrimaryButtonContainer>
                {/* <Link to="/">
                    <CustomButton inverted>
                        return home
                    </CustomButton>
                </Link> */}
                
            </Banner>
        </Hero>
    )
}

export default ErrorPage
