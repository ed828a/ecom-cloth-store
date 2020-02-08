import './cart-dropdown.scss';

import React from 'react';
import CustomButton from '../custom-button/CustomButton';


const CartDropdown = () => {
    return (
        <div className='cart-dropdown' >
            <div className="cart-items">

            </div>
            <CustomButton >go to checkout</CustomButton>
        </div>
    )
}

export default CartDropdown
