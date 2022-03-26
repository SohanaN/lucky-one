import React from 'react';
import './Cart.css';
const Cart = ({cartData}) => {
    const {name, image} = cartData;
    return (
        <div className='cart'>
            <p>{name}</p>
            <img src={image} alt="" />
        </div>
    );
};

export default Cart;