import './cart-dropdown.scss';

import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const ITEM = {
    id: 1,
    name: 'Brown Brim',
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    price: 25,
    quantity: 3
  }

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown' >
            <div className="cart-items">
                {
                    cartItems.map(item => ( 
                        <CartItem key={item.id} item={item}/>
                     ))
                }                 
            </div>
            <CustomButton >go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ( state ) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
