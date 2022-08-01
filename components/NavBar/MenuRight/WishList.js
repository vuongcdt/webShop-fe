import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

function WishList() {
    const productLikedState = useSelector((state) => state.productLiked);

    return (
        <>
            <div className="cart-media">
                <Link href="/wishlist">
                    <a>
                        <i data-feather="heart"></i>
                        <span className="label label-theme rounded-pill">
                            {productLikedState.ids.length}
                        </span>
                    </a>
                </Link>
            </div>
            {/* <div className="onhover-div">
                <Link href="/wishlist">
                    <a>
                        <div className="wislist-empty">
                            <i className="fab fa-gratipay"></i>
                            <h6 className="mb-1">Your wislist empty !!</h6>
                            <p className="font-light mb-0">
                                explore more and shortlist items.
                            </p>
                        </div>
                    </a>
                </Link>
            </div> */}
        </>
    );
}

export default WishList;
