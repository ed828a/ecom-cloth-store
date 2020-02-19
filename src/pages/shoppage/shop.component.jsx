
import React, { Component } from 'react'
import SHOP_DATA from '../../redux/shop/shop.data'
import CollectionPreview from '../../component/collection-preview/collection-preview.component'

export class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections: SHOP_DATA
        }
    }
    
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
               {
                   Object.keys(collections)
                   .map(key => collections[key])
                   .map(({id, ...restCollectionProps}) => (
                       <CollectionPreview key={id} {...restCollectionProps} />
                   ))
               }
            </div>
        )
    }
}

export default ShopPage
