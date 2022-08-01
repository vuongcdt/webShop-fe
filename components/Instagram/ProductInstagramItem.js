import React from 'react';

export default function ProductInstagramItem() {
    return (
        <div>
            <div className="product-box">
                <div className="img-wrapper">
                    <div className="top-wishlist product-color">
                        <a
                            href="wishlist.html"
                            className="heart-wishlist heart-color ms-auto"
                        >
                            <i className="far fa-heart"></i>
                        </a>
                    </div>
                    <div className="share share-box share-opacity">
                        <span className="share-plus share-plus-color">+</span>
                        <span>Share</span>
                    </div>
                    <a href="undefined" className="text-center">
                        <img
                            src="images/fashion/instagram/1.jpg"
                            className="bg-img blur-up lazyload"
                            alt=""
                        />
                    </a>
                </div>
                <div className="insta-hover insta-spacing text-center">
                    <div>
                        <h5>New Offer -56% Discount</h5>
                        <h3 className="text-hide">Women T-shirt From $35</h3>
                        <button type="button" className="btn btn-light-white">
                            Shop now{' '}
                            <i className="fas fa-chevron-right ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
