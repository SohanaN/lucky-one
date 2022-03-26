import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
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
            <div className="qn-sec">
                <div>
                    <h4>
                        <strong>QN:</strong>
                        How react works?</h4>
                    <p>
                        <strong>Ans:</strong>
                        React is a JavaScript library. 
It creates user interfaces (UIs) in a efficient, and flexible  way using declarative code.
 ReactJS is an open-source, component-based front end library responsible 
 only for the view layer of the application.
 It will efficiently update and render just the right component when your data changes.
 It allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
                </div>
                <div>
                    <h4>
                        <strong>QN:</strong>
                        How useState works?
                    </h4>
                    <p>
                        <strong>Ans:</strong>
                        The useState() is a Hook that allows you to have state variables in functional components.
 if  the initial state is passed to this function , it returns a variable with the current state value and another function to update this value.
a destructed array that extracts the count value and some function called setCount and it will initialize count with the default value that I passed into useState.
It enables add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.
useState hook returns a variable and a function.
</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;