import React, { Component } from "react";
import CollectionsOverview from "../../component/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collectionpage/collection-page.component";
import ErrorPage from "../errorpage/ErrorPage";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from "../../component/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export class ShopPage extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    componentWillUnmount() {
        
    }

    render() {
        const { match, loading } = this.props;
        // const { loading } = this.state;
        console.log('loading: ', loading);
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    // component={CollectionsOverview}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> }
                    
                />
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    // component={CollectionPage}
                    render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}
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

const mapStateToProps = createStructuredSelector({
    loading: selectIsCollectionsFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
