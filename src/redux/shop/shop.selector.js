import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
); 


// convert shop.collections object into array
// Object.keys return array of keys of the object param
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections) => Object.keys(collections).map(key => collections[key])
)

// this is a function returning createSelector function call which is another function taking a parameter.
export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
);