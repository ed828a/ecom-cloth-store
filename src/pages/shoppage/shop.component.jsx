import React, { Component } from "react";
import { Route } from "react-router-dom";
import ErrorPage from "../errorpage/ErrorPage";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../component/collections-overview/collection-overview.container";
import CollectionPageContainer from "../collectionpage/collection-page.container";

export class ShopPage extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    componentWillUnmount() {
        
    }

    render() {
        const { match } = this.props;
        // console.log('loading: ', loading);
        

        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    // component={CollectionsOverview}
                    // render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> }
                    component={CollectionsOverviewContainer}
                    
                />
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    // component={CollectionPage}
                    // render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
                    component={CollectionPageContainer}
                />
                <Route
                    path={`${match.path}/:collectionId/*`}
                    component={ErrorPage}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
