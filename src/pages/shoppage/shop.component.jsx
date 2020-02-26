import React from "react";
import CollectionsOverview from '../../component/collections-overview/collections-overview.component'
import { Route } from "react-router-dom";
import CategoryPage from "../category/category.component";

const ShopPage = ({ match }) => {
    console.log('match:', match); // rigth now, match.path='/shop'
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={ CollectionsOverview } />
            <Route path={`${match.path}/:categoryId`} component={ CategoryPage } />
            <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
        </div>
    );
};



export default ShopPage;
