import React, { Component } from "react";
import CollectionsOverview from "../../component/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collectionpage/collection-page.component";
import ErrorPage from "../errorpage/ErrorPage";
import {
    firestore,
    convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../component/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loading: true
        }
    }
    
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionsRef = firestore.collection("collections");

        this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(
            async snapshot => {
                // console.log('snapshot: ', snapshot);
                const collectionsMap = convertCollectionsSnapshotToMap(
                    snapshot
                );
                // console.log('collectionsMap: ', collectionsMap);
                updateCollections(collectionsMap);
                this.setState({ loading: false });
            }
        );
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
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
    updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
