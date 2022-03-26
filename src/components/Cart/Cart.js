import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    const {name} = cart;
    return (
        <div className='cart'>
             <h2>Selected Items: {cart.length}</h2>
                <p>{name}</p>
                <button>Choose 1 item for me</button>
                <button>Choose Again</button>
        </div>
    );
};

export default Cart;