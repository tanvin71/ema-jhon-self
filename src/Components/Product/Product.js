import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    console.log(props)
    const {img, name, seller, price,stock} = props.product;
    return (
        <div className='product-part'>
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
              <h4 className='product-name'>{name}</h4>
              <br/>
              <p><small>by: {seller}</small></p>
              <p><small>${price}</small></p>
              <br/>
              <p>only {stock} left in stock- order soon</p>
              <button className="main-button" onClick ={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;