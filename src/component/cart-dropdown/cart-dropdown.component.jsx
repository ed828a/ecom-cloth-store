import './cart-dropdown.scss';

import React from 'react'
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">

            </div>
            <CustomButton>Go to checkout </CustomButton>
        </div>
    )
}

export default CartDropdown
