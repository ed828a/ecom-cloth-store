import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import ErrorPage from "../errorpage/ErrorPage";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../component/collections-overview/collection-overview.container";
import CollectionPageContainer from "../collectionpage/collection-page.container";

export const ShopPage = ({ match, fetchCollectionsStartAsync }) => {
    useEffect(() => {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                exact
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
            <Route
                path={`${match.path}/:collectionId/*`}
                component={ErrorPage}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
