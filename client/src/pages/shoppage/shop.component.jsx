import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
// import ErrorPage from "../errorpage/ErrorPage";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import Spinner from "../../component/spinner/spinner.component";
// import CollectionsOverviewContainer from "../../component/collections-overview/collection-overview.container";
// import CollectionPageContainer from "../collectionpage/collection-page.container";

const CollectionsOverviewContainer = lazy(() =>
    import("../../component/collections-overview/collection-overview.container")
);
const CollectionPageContainer = lazy(() =>
    import("../collectionpage/collection-page.container")
);
const ErrorPage = lazy(() => import("../errorpage/ErrorPage"));

export const ShopPage = ({ match, fetchCollectionsStartAsync }) => {
    useEffect(() => {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync]);

    return (
        <div className="shop-page">
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
