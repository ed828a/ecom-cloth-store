import './error-page.scss';
import React from 'react';
import Hero from '../../component/hero/Hero';
import { Link } from 'react-router-dom';
import Banner from '../../component/banner/Banner'


function ErrorPage() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
                
            </Banner>
        </Hero>
    )
}

export default ErrorPage
