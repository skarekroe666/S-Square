import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../BreadCrums/BreadCrums';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import Related from '../Related/Related';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <Related/>
    </div>
  )
}

export default Product