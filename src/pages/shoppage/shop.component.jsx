import React from "react";
import CollectionsOverview from '../../component/collections-overview/collections-overview.component'
import { Route } from "react-router-dom";
import CollectionPage from "../collectionpage/collection-page.component";
import ErrorPage from "../errorpage/ErrorPage";

const ShopPage = ({ match }) => {
    // console.log('match:', match); // rigth now, match.path='/shop'
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={ CollectionsOverview } />
            <Route exact path={`${match.path}/:collectionId`} component={ CollectionPage } />
            <Route path={`${match.path}/:collectionId/*`} component={ErrorPage} />
            
        </div>
    );
};



export default ShopPage;
