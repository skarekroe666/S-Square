import './CartItem.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from "../assets/cart_cross_icon.png"


const CartItem = () => {

    const {all_product, cartItems, removeFromCart, getTotalCartAmt} = useContext(ShopContext)
    
  return (
    <div className='cartitems'>
        <div className="cartitems-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
                if(cartItems[e.id] > 0){
                    return (
                    <div>
                        <div className="cartitems-format cartitems-main">
                            <img src={e.image} alt="" className='product-icon'/>
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='remove-icon' src={remove_icon} onClick={()=> {removeFromCart(e.id)}} alt="" />
                        </div>
                    </div>);
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Total :</h1>
                    <div>
                        <div className="total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmt()}</p>
                        </div>
                        <hr />
                        <div className='cart-total'>
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-total">
                            <h3>Total</h3>
                            <h3>{getTotalCartAmt()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className="promocode">
                    <p>Promo Code</p>
                    <div className="promobox">
                        <input type="text" placeholder='PromoCode'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CartItem