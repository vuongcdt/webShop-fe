import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePaymentMethods } from '../../reactQueryHook';
import { COUNTRIES } from '../../utils/data/countries';
import Skeleton from 'react-loading-skeleton';
import parse from 'html-react-parser';
import wooApi from '../../src/api/woocommerce/wooApi';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { productCartRemoveAll } from '../../store/cart/cartSlice';

const paymentMethodData = {
    bacs: 'Direct bank transfer',
    cheque: 'Check payments',
    cod: 'Cash on delivery',
    other_payment: 'Payment method online',
};

export default function Formcheckout({ data }) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const { user } = useSelector((state) => state.auth);
    const cartState = useSelector((state) => state.cart);
    const { couponCode } = cartState.coupon;
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const result = await wooApi.createOrder({
                payment_method: payment,
                payment_method_title: paymentMethodData[payment],
                customer_id: user.id,
                billing: { ...data },
                shipping: { ...data },
                line_items: Object.values(cartState.entities).map(
                    (item, index) => ({
                        product_id: item.id,
                        quantity: item.qty,
                    })
                ),
                coupon_lines:
                    couponCode && couponCode !== null
                        ? [
                              {
                                  code: couponCode,
                              },
                          ]
                        : [],
            });

            const orderData = result.data;
            const { id: orderId } = orderData;

            const productNotes = Object.values(cartState.entities).map(
                (item, index) => {
                    return `---------<br/><b>${item.name} - #${item.id}</b> <br/> [Size: <b>${item.size}</b> | Color: <b>${item.color}</b>]<br/>`;
                }
            );

            await wooApi.createOrderNote(orderId, {
                note: '<i>Products note</i>: <br/>' + productNotes.join(''),
            });

            setLoading(false);

            toast.success('Place order successfully!!!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            if (payment === 'other_payment') {
                router.push('/payment?orderId=' + orderId);
            } else {
                router.push('/order-tracking/' + orderId);
            }

            dispatch(productCartRemoveAll());
            dispatch(cartCouponRemove());
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

    useEffect(() => {
        setValue('first_name', data.first_name);
        setValue('last_name', data.last_name);
        setValue('email', data.email);
        setValue('address_1', data.address_1);
        setValue('phone', data.phone);
        setValue('country', data.country);
        setValue('state', data.state);
        setValue('postcode', data.postal_code);
    }, [data]);

    const {
        data: dataPayment,
        isError,
        isFetching,
        error,
        isLoading,
    } = usePaymentMethods();

    const [payment, setPayment] = useState('bacs');

    useEffect(() => {
        if (!isLoading && !isFetching) {
            let tabEl = document.querySelectorAll(
                '.payment-tabs button[data-bs-toggle="pill"]'
            );

            tabEl.forEach((item, index) => {
                item.addEventListener('shown.bs.tab', function (event) {
                    setPayment(event.target.dataset.paymentMethod);
                });
            });
        }
    }, [isLoading, isFetching]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-4">
                <div className="col-md-6">
                    <label htmlFor="first_name" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        placeholder="Enter First Name"
                        {...register('first_name', {
                            required: true,
                        })}
                    />
                    {errors.first_name?.type === 'required' && (
                        <p className="text-danger mt-1 mb-0">
                            Please fill the first name.
                        </p>
                    )}
                </div>

                <div className="col-md-6">
                    <label htmlFor="last_name" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        placeholder="Enter Last Name"
                        {...register('last_name', {
                            required: true,
                        })}
                    />
                    {errors.last_name?.type === 'required' && (
                        <p className="text-danger mt-1 mb-0">
                            Please fill the last name.
                        </p>
                    )}
                </div>

                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="example@example.com"
                        {...register('email', {
                            required: true,
                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        })}
                    />
                    {errors.email?.type === 'required' && (
                        <p className="text-danger mt-1 mb-0">
                            Please fill the email.
                        </p>
                    )}
                    {errors.email?.type === 'pattern' && (
                        <p className="text-danger mt-1 mb-0">
                            Email format incorrect.
                        </p>
                    )}
                </div>

                <div className="col-md-6">
                    <label htmlFor="address_1" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address_1"
                        placeholder="1234 Main St"
                        {...register('address_1', {
                            required: true,
                        })}
                    />
                    {errors.address_1?.type === 'required' && (
                        <p className="text-danger mt-1 mb-0">
                            Please fill the address.
                        </p>
                    )}
                </div>

                <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="+841532562215"
                        {...register('phone', {
                            required: true,
                            pattern:
                                /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                        })}
                    />
                    {errors.phone?.type === 'required' && (
                        <p className="text-danger mt-1 mb-0">
                            Please fill the phone.
                        </p>
                    )}
                    {errors.phone?.type === 'pattern' && (
                        <p className="text-danger mt-1 mb-0">
                            Phone format incorrect.
                        </p>
                    )}
                </div>

                <div className="col-md-6">
                    <label htmlFor="country" className="form-label">
                        Country {data.country}
                    </label>
                    <select
                        className="form-select custome-form-select"
                        id="country"
                        onChange={() => {}}
                        {...register('country', {
                            required: true,
                        })}
                    >
                        <option value="">Select country</option>
                        {COUNTRIES.map((country, index) => (
                            <option key={index} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    {errors.country?.type === 'required' && (
                        <p className="text-danger mt-1 mb-0">
                            Please fill the country.
                        </p>
                    )}
                </div>

                <div className="col-md-6">
                    <label htmlFor="state" className="form-label">
                        State
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="state"
                        placeholder="Enter state"
                        {...register('state', {
                            required: true,
                        })}
                    />
                    {errors.state?.type === 'required' && (
                        <p className="text-danger mt-1 mb-0">
                            Please fill the state.
                        </p>
                    )}
                </div>

                <div className="col-md-6">
                    <label htmlFor="postcode" className="form-label">
                        Zip
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="postcode"
                        placeholder="Enter zip code"
                        {...register('postcode', {
                            required: true,
                        })}
                    />
                    {errors.postcode?.type === 'required' && (
                        <p className="text-danger mt-1 mb-0">
                            Please fill the zip code.
                        </p>
                    )}
                </div>
            </div>

            <hr className="my-lg-5 my-4" />

            <h3 className="mb-3">Payment</h3>

            {isLoading || isFetching ? (
                <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </>
            ) : (
                <div className="payment-tabs">
                    <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${
                                    payment === 'bacs' ? 'active' : ''
                                }`}
                                id="pills-bacs-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-bacs"
                                type="button"
                                role="tab"
                                aria-controls="pills-bacs"
                                aria-selected="true"
                                data-payment-method="bacs"
                            >
                                Direct bank transfer
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${
                                    payment === 'cheque' ? 'active' : ''
                                }`}
                                id="pills-cheque-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-cheque"
                                type="button"
                                role="tab"
                                aria-controls="pills-cheque"
                                aria-selected="false"
                                data-payment-method="cheque"
                            >
                                Check payments
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${
                                    payment === 'cod' ? 'active' : ''
                                }`}
                                id="pills-cod-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-cod"
                                type="button"
                                role="tab"
                                aria-controls="pills-cod"
                                aria-selected="false"
                                data-payment-method="cod"
                            >
                                Cash on delivery
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${
                                    payment === 'other_payment' ? 'active' : ''
                                }`}
                                id="pills-other_payment-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-other_payment"
                                type="button"
                                role="tab"
                                aria-controls="pills-other_payment"
                                aria-selected="false"
                                data-payment-method="other_payment"
                            >
                                Payment online
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        {dataPayment.data.map((item, index) => (
                            <div
                                key={index}
                                className={`tab-pane fade ${
                                    payment === item.id ? 'active show' : ''
                                }`}
                                id={`pills-${item.id}`}
                                role="tabpanel"
                                aria-labelledby={`pills-${item.id}-tab`}
                            >
                                {parse(item.description)}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <button className="btn btn-solid-default mt-4" type="submit">
                {loading ? (
                    <div
                        className="spinner-border text-black spinner-border-sm"
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <span>Place order</span>
                )}
            </button>
        </form>
    );
}


