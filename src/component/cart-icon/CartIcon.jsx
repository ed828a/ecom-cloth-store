import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ toggleCartHidden, itemCount }) => {

    return (
        <div className='cart-icon' onClick={toggleCartHidden} >
           <ShoppingIcon className='shopping-icon' />
           <span className='item-count' >{itemCount}</span> 
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// const mapStateToProps = ({ cart: {cartItems} }) => ({
//     itemCount: cartItems.reduce((total, item) => total + item.quantity, 0)
// });

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)