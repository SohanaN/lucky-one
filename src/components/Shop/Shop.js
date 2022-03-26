import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import QnAns from '../QnAns/QnAns';
import './Shop.css';
const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart]= useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const handleAddToCart = (product)=>{
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product=><Product 
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)}
            </div>
            <div className="cart-container">
               {cart.map((carts)=>
                <Cart key={carts.id} cartData={carts}></Cart>
               )}
                 <button>Choose 1 item for me</button>
                <button>Choose Again</button>
            </div>
            <div className="qn-ans">
                <QnAns></QnAns>
            </div>
        </div>
    );
};

export default Shop;