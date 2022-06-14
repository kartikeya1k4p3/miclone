import React from 'react'
import ProductReviewsCard from './ProductReviewsCard.js';
import '../Styles/ProductReviews.css'

const ProductReviews = ({productReviews}) => {
  console.log(productReviews)
  return (
    <div className='ProductReviews'>
      
      {productReviews.map((item,index) => (
        
        
        <ProductReviewsCard key={item.image} price={item.price} name={item.name} image={item.image} review={item.review} index={index} />
      
      ))}

    </div>
  )
}

export default ProductReviews;
