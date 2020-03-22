import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// this is a function returning createSelector function call which is another function taking a parameter.
export const selectCollection = (collection_id_key) => {
    return createSelector(
        [selectCollections],
        collections => collections ? collections[collection_id_key] : null
    ); 
};

// convert shop.collections object into an array
// Object.keys() function returns the array of keys of the object param
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectErrorMessage = createSelector(
    [selectShop],
    shop => shop.errorMessage
);

// !! on any false value (like null, empty string, NaN, zero, undefined, false), it returns the actual boolean value.
export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);