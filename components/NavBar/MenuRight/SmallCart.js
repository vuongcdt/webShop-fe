import _ from 'lodash';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import CartSmallItem from '../../Cart/CartSmallItem';

function SmallCart() {
    const cartState = useSelector((state) => state.cart);

    return (
        <>
            <Link href={'/cart'} >
                <button
                    type="button"
                    className="btn btn-solid-default btn-spacing"
                >
                    <i data-feather="shopping-cart" className="pe-2"></i>
                    <span>
                        ${' '}
                        {_.sumBy(
                            Object.values(cartState.entities),
                            function (o) {
                                return Number(o.price) * o.qty;
                            }
                        ).toFixed(2)}
                    </span>
                </button>
            </Link>
            <div className="onhover-div">
                <div className="cart-menu">
                    <div className="cart-title">
                        <h6>
                            <i data-feather="shopping-bag"></i>
                            <span className="label label-theme rounded-pill">
                                {cartState.ids.length}
                            </span>
                        </h6>
                        <span className="d-md-none d-block">
                            <i className="fas fa-arrow-right back-cart"></i>
                        </span>
                    </div>
                    <ul className="custom-scroll">
                        {cartState.ids.length === 0 ? (
                            <li>
                                <p className="alert alert-warning w-100 mb-0">
                                    No product in cart.
                                </p>
                            </li>
                        ) : (
                            Object.values(cartState.entities).map(
                                (item, index) => (
                                    <CartSmallItem key={index} data={item} />
                                )
                            )
                        )}
                    </ul>
                </div>
                <div className="cart-btn">
                    <h6 className="cart-total">
                        <span className="font-light">Total:</span> ${' '}
                        {_.sumBy(
                            Object.values(cartState.entities),
                            function (o) {
                                return Number(o.price) * o.qty;
                            }
                        ).toFixed(2)}
                    </h6>
                    {cartState.ids.length === 0 ? (
                        <Link href="/product-category">
                            <button
                                type="button"
                                className="btn btn-solid-default btn-block"
                            >
                                View more product
                            </button>
                        </Link>
                    ) : (
                        <Link href="/cart">
                            <button
                                type="button"
                                className="btn btn-solid-default btn-block"
                            >
                                Proceed to payment
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}

export default SmallCart;
