import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='product-display'>
        <div className="product-display-left">
            <div className="product-display-imglist">
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
            </div>
            <div className="product-display-img">
                <img src={product.image} className='product-display-main' />
            </div>
        </div>
        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="product-display-star">
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_dull_icon}/>
                <p>(122)</p>
            </div>
            <div className="product-display-prices">
                <div className="product-price-old">${product.old_price}</div>
                <div className="product-price-new">${product.new_price}</div>
            </div>
            <div className="product-right-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, mollitia?
            </div>
            <div className="product-size">
                <h1>Select size</h1>
                <div className="product-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>Add to cart</button>
            <p className='product-display-category'><span>Category : </span>Women, T-shirt, Crop Top</p>
            <p className='product-display-category'><span>Tags : </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay