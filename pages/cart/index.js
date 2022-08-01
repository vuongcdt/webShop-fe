import Breadcrumb from '../../components/Common/BreadCrumb';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import CartTableItem from '../../components/Cart/CartTableItem';
import Link from 'next/link';
import {
    cartCouponAdded,
    cartCouponRemove,
    productCartRemoveAll,
} from '../../store/cart/cartSlice';
import SubscribeBox from '../../components/Common/SubscribeBox';
import _ from 'lodash';
import { useCoupon } from '../../reactQueryHook';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import wooApi from '../../src/api/woocommerce/wooApi';

function Cart() {
    const { user } = useSelector((state) => state.auth);
    const cartState = useSelector((state) => state.cart);
    const { couponCode, couponValue } = cartState.coupon;
    const dispatch = useDispatch();
    const inputCouponRef = useRef();
    const [loading, setLoading] = useState(false);
    const [couponError, setCouponError] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setCouponError('');
        setLoading(true);
        try {
            let result = await wooApi.getCoupon({
                code: data.couponCode,
            });

            setLoading(false);

            let dataCoupon = result.data[0];

            if (!dataCoupon) {
                setCouponError('Coupon code does not exist!');
                return;
            }

            if (dataCoupon.used_by.includes(user.id.toString())) {
                setCouponError('Coupon usage limit has been reached!');
                return;
            }

            if (moment().isSameOrAfter(dataCoupon.date_expires)) {
                setCouponError('Coupon has expired!');
                return;
            }

            dispatch(
                cartCouponAdded({
                    couponCode: dataCoupon.code,
                    couponValue: Number(dataCoupon.amount),
                })
            );

            toast.success('Add coupon successfully!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            setLoading(false);
            toast.error(JSON.stringify(error), {
                position: 'bottom-left',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleRemoveAll = () => {
        dispatch(productCartRemoveAll());
    };

    const removeCouponCart = () => {
        setValue('couponCode', '');
        dispatch(cartCouponRemove());
    };

    return (
        <>
            <Breadcrumb title={'Shopping Cart'} />

            {/* Cart Section Start */}
            <section className="cart-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 table-responsive mt-4">
                            <table className="table cart-table">
                                <thead>
                                    <tr className="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">price</th>
                                        <th scope="col">quantity</th>
                                        <th scope="col">action</th>
                                        <th scope="col">total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartState.ids.length === 0 ? (
                                        <tr>
                                            <td colSpan={6}>
                                                <p className="alert alert-warning w-100">
                                                    No products in cart.
                                                </p>
                                            </td>
                                        </tr>
                                    ) : (
                                        cartState.ids.map((item, index) => (
                                            <CartTableItem
                                                key={index}
                                                data={cartState.entities[item]}
                                            />
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="col-12 mt-md-5 mt-4">
                            <div className="row">
                                <div className="col-sm-7 col-5 order-1">
                                    <div className="left-side-button text-end d-flex d-block justify-content-end">
                                        <a
                                            onClick={handleRemoveAll}
                                            className="text-decoration-underline btn-remove-all theme-color d-block text-capitalize"
                                        >
                                            clear all items
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-7">
                                    <div className="left-side-button float-start">
                                        <Link href={'/product-category'}>
                                            <a className="btn btn-solid-default btn fw-bold mb-0 ms-0">
                                                <i className="fas fa-arrow-left"></i>{' '}
                                                Continue Shopping
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cart-checkout-section">
                            <div className="row g-4">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="promo-section">
                                        <form
                                            className="row g-3"
                                            onSubmit={handleSubmit(onSubmit)}
                                        >
                                            <div className="col-7">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="number"
                                                    placeholder="Coupon Code"
                                                    defaultValue={couponCode}
                                                    ref={inputCouponRef}
                                                    {...register('couponCode', {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                            <div className="col-5">
                                                <button
                                                    type="button"
                                                    onClick={handleSubmit(
                                                        onSubmit
                                                    )}
                                                    className="btn btn-solid-default rounded btn w-100"
                                                >
                                                    {loading ? (
                                                        <div
                                                            className="spinner-border text-black spinner-border-sm"
                                                            role="status"
                                                        >
                                                            <span className="sr-only">
                                                                Loading...
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <span>
                                                            Apply Coupon
                                                        </span>
                                                    )}
                                                </button>
                                            </div>

                                            <div className="col-12">
                                                {errors.couponCode?.type ===
                                                    'required' && (
                                                    <p className="mt-2 alert alert-warning">
                                                        Please fill the coupon
                                                        code.
                                                    </p>
                                                )}

                                                {couponError &&
                                                    couponError !== '' && (
                                                        <p className="mt-2 alert alert-warning">
                                                            {couponError}
                                                        </p>
                                                    )}
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 ">
                                    <div className="checkout-button">
                                        <Link href={'/checkout'}>
                                            <a className="btn btn-solid-default btn fw-bold">
                                                Check Out{' '}
                                                <i className="fas fa-arrow-right ms-1"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="cart-box">
                                        <div className="cart-box-details">
                                            <div className="total-details">
                                                <div className="top-details">
                                                    <h3>Cart Totals</h3>
                                                    <h6>
                                                        Subtotal{' '}
                                                        <span>
                                                            ${' '}
                                                            {_.sumBy(
                                                                Object.values(
                                                                    cartState.entities
                                                                ),
                                                                function (o) {
                                                                    return (
                                                                        Number(
                                                                            o.price
                                                                        ) *
                                                                        o.qty
                                                                    );
                                                                }
                                                            ).toFixed(2)}
                                                        </span>
                                                    </h6>
                                                    {couponCode ? (
                                                        <h6>
                                                            Coupon Discount
                                                            <br />({
                                                                couponCode
                                                            }){' '}
                                                            <i
                                                                onClick={
                                                                    removeCouponCart
                                                                }
                                                                className="fas fa-times-circle btn-remove-coupon"
                                                            ></i>
                                                            <span className="text-danger">
                                                                -${' '}
                                                                {couponValue.toFixed(
                                                                    2
                                                                )}{' '}
                                                            </span>
                                                        </h6>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    <h6>
                                                        Total{' '}
                                                        <span className="text-success">
                                                            ${' '}
                                                            {_.sumBy(
                                                                Object.values(
                                                                    cartState.entities
                                                                ),
                                                                function (o) {
                                                                    return (
                                                                        Number(
                                                                            o.price
                                                                        ) *
                                                                        o.qty
                                                                    );
                                                                }
                                                            ).toFixed(2) -
                                                                couponValue.toFixed(
                                                                    2
                                                                )}
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="bottom-details">
                                                    <Link href={'/checkout'}>
                                                        <a>Process Checkout</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cart Section End */}

            <SubscribeBox />
        </>
    );
}

export default Cart;
