import React, {useContext} from 'react'
import './CSS/ShopCatg.css'
import {ShopContext} from "../Context/ShopContext"
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from "../Item/Item"

const ShopCatg = (props) => {

  const {all_product} = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p><span>Showing 1-12 </span>out of 36 items</p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if(props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  )
}

export default ShopCatg