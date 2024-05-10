import React from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className='productDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productDisplay-right-prices">
                    <div className="productDisplay-right-price-old">Rs. {product.old_price}/-</div>
                    <div className="productDisplay-right-price-new">Rs. {product.new_price}/-</div>
                </div>
                <div className="productDisplay-right-description">
                    Coupons for you <br />

                    Special PriceGet extra 10% off upto ₹200 on 1 item(s) (price inclusive of cashback / coupon)T&C

                    <br/><br />
                    Available offers <br />

                    Bank OfferGet ₹25 instant discount on first Flipkart UPI txns on order of ₹250 and aboveT&C <br />

                    Bank Offer5% Cashback on Flipkart Axis Bank CardT&C <br />

                    Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*Know More <br /><br />

                    +1 more offer
                </div>
                <div className="productDisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productDisplay-right-sizes">
                        <div>Small</div>
                        <div>Meduim</div>
                        <div>Large</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='productDisplay-right-category'><span>Category :</span>Sun glass , full frame , Black</p>
                <p className='productDisplay-right-category'><span>Tags :</span>Rectangle , Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay