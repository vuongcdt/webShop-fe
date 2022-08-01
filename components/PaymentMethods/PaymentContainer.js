import React from 'react';
import { userGetOrderToPayment } from '../../reactQueryHook';
import StripeMethod from '../../components/PaymentMethods/Stripe';
import PaypalMethod from '../../components/PaymentMethods/Paypal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CartCheckoutItem from '../Cart/CartCheckoutItem';

export function OrderPaymentLoading() {
    return (
        <div className="row">
            <div className="col-12">
                <p className="alert alert-warning text-center">
                    Loading data order and payment method...
                </p>
            </div>
        </div>
    );
}

export function OrderPaymentNotExits() {
    return (
        <div className="row">
            <div className="col-12">
                <p className="alert alert-warning text-center">
                    Order not exits!
                </p>
            </div>
        </div>
    );
}

export function OrderPaymentNotAlready({ orderId }) {
    return (
        <div className="row">
            <div className="col-12">
                <p className="alert alert-warning text-center">
                    Order not already to payment. Please tracking order at{' '}
                    <Link href={`/order-tracking/${orderId}`}>link here</Link>.
                </p>
            </div>
        </div>
    );
}

export function OrderPaymentProcessing({ orderId }) {
    return (
        <div className="row">
            <div className="col-12">
                <p className="alert alert-success text-center">
                    Order payment successfully. Please tracking order at{' '}
                    <Link href={`/order-tracking/${orderId}`}>link here</Link>.
                </p>
            </div>
        </div>
    );
}

export default function PaymentContainer() {
    const router = useRouter();
    const { query } = router;
    const { orderId, payment_intent_client_secret: clientSecret } = query;

    const { data, error, isLoading, isFetching, isError } =
        userGetOrderToPayment({
            include: orderId,
        });

    if (!orderId) {
        return <OrderPaymentNotExits />;
    }

    if (isLoading || isFetching) {
        return <OrderPaymentLoading />;
    }

    if (data.length !== 1) {
        return <OrderPaymentNotExits />;
    }

    if (data[0].status == 'processing') {
        return <OrderPaymentProcessing orderId={orderId} />;
    }

    if (data[0].status !== 'pending') {
        return <OrderPaymentNotAlready orderId={orderId} />;
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <h3 className="mb-3 d-flex text-capitalize">
                    Select payment online
                </h3>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingPaypal">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsePaypal"
                                aria-expanded="true"
                                aria-controls="collapsePaypal"
                            >
                                Paypal
                            </button>
                        </h2>
                        <div
                            id="collapsePaypal"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingPaypal"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <div className="row">
                                    <p className="alert alert-warning w-100">
                                        Payment order via Paypal.
                                    </p>
                                    <PaypalMethod
                                        orderId={data[0].id}
                                        amount={data[0].total}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingStripe">
                            <button
                                className={
                                    clientSecret
                                        ? 'accordion-button'
                                        : 'accordion-button collapsed'
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseStripe"
                                aria-expanded="false"
                                aria-controls="collapseStripe"
                            >
                                Stripe
                            </button>
                        </h2>
                        <div
                            id="collapseStripe"
                            className={
                                clientSecret
                                    ? 'accordion-collapse show'
                                    : 'accordion-collapse collapse'
                            }
                            aria-labelledby="headingStripe"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p className="alert alert-warning w-100">
                                    Payment order via Stripe.
                                </p>
                                <StripeMethod
                                    orderId={data[0].id}
                                    amount={data[0].total}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="your-cart-box">
                    <h3 className="mb-3 d-flex text-capitalize">
                        Your cart
                        <span className="badge bg-theme new-badge rounded-pill ms-auto bg-dark">
                            {data[0].line_items.length}
                        </span>
                    </h3>

                    <ul className="list-group mb-3">
                        {data[0].line_items.map((item, index) => (
                            <CartCheckoutItem
                                key={index}
                                data={{
                                    ...item,
                                    price: Number(
                                        item.subtotal / item.quantity
                                    ).toFixed(2),
                                    qty: item.quantity,
                                }}
                                showAttribute={false}
                            />
                        ))}
                        {data[0]?.coupon_lines &&
                        data[0]?.coupon_lines.length !== 0 ? (
                            <li className="list-group-item d-flex justify-content-between lh-condensed active">
                                <div className="text-dark">
                                    <h6 className="my-0">Coupon code</h6>
                                    <small>
                                        {data[0]?.coupon_lines[0].code}
                                    </small>
                                </div>
                                <span>
                                    -$
                                    {Number(
                                        data[0]?.coupon_lines[0].discount
                                    ).toFixed(2)}
                                </span>
                            </li>
                        ) : (
                            <></>
                        )}
                        <li className="list-group-item d-flex lh-condensed justify-content-between">
                            <span className="fw-bold">Total</span>
                            <strong>
                                $ {Number(data[0].total).toFixed(2)}
                            </strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
