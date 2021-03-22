import React,{useContext} from 'react';
import { LatestProductsContext } from '../global/LatestProductsContext';
import { CartContext } from '../global/CartContext';
import {Animated} from "react-animated-css";
import { Icon } from 'react-icons-kit';
import { cart } from 'react-icons-kit/entypo/cart';


export const LatestProducts = ()=> {
  const products = useContext(LatestProductsContext);
  console.log(products)
  const {dispatch} = useContext(CartContext);
  return(
  
      <>
        {products.length !== 0 && <h3>Latest Products</h3>}
        <div className='products-container'>
            {products.length === 0 && <div>slow internet...no products to display</div>}
            {products.map(product => (
                <div className='product-card' key={product.ProductID}>
                    <div className='product-img'>
                        <img src={product.ProductImage} alt="not found" />
                    </div>
                    <div className='product-name'>
                        {product.ProductName}
                    </div>
                    <div className='product-price'>
                        Ksh {product.ProductPrice}.00
                </div>
                    <button className='addcart-btn'  onClick={()=>{dispatch({type:'ADD_TO_CART',id:product.ProductID,product})}}>ADD TO CART<Icon icon={cart} /></button>
                </div>
            ))}
        </div>
    </>
  
  )
  
}


