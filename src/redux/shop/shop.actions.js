import ShopActionTypes from './shop.types';

const { UPDATE_COLLECTIONS } = ShopActionTypes;

export const updateCollections = (collections) => ({
    type: UPDATE_COLLECTIONS,
    payload: collections
})