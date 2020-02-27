import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = (collection_id_key) => {
    return createSelector(
        [selectCollections],
        collections => collections[collection_id_key]
    );
};

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections)
        .map(key => collections[key])
        .filter((item, index) => index < 4)
)
