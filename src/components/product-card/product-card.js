import StarsRate from '../stars-rate/stars-rate'

import './styles.scss'

const ProductCard = ({ image, price, text, stars, reviews }) => {
  return (
    <div className="product-card">
      <div className="image">
        <img src={image || 'http://via.placeholder.com/200x300/000'} alt="product-img" width="200" />
      </div>
      <div className="info">
        {price && <b className="price">{price}</b>} {text && <span className="text">{text}</span>}
      </div>
      <div className="rate">
        <StarsRate stars={stars} />
        <span className="reviews">{reviews || 0} reviews</span>
      </div>
    </div>
  )
}

export default ProductCard
