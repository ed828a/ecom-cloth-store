import React from 'react';
import CollectionsOverview from '../../component/collections-overview/CollectionsOverview';
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/CollectionPage';


export const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

    </div>
)

export default ShopPage;
