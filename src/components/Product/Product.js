import React from 'react';
import'./Product.css';
const Product = ({product , handleAddToCart}) => {
    const {name, image, price} = product;   
    return (
        <div className='product'>
           <img src={image} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
           <p>Price: ${price}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>               
            </button>
        </div>
    );
};

export default Product;