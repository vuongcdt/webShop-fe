import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Common/BreadCrumb';
import { useRouter } from 'next/router';
import { userGetOrderToPayment } from '../../reactQueryHook';
import StripeMethod from '../../components/PaymentMethods/Stripe';
import PaypalMethod from '../../components/PaymentMethods/Paypal';
import Link from 'next/link';
import PaymentContainer from '../../components/PaymentMethods/PaymentContainer';

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

export default function Payment() {
    const router = useRouter();
    const { query } = router;
    const { orderId } = query;

    return (
        <>
            <Breadcrumb
                title={
                    'Payment for order ' + (orderId ? '#' + orderId : '....')
                }
                bredcrumbList={[
                    {
                        href: '/order-tracking/' + orderId,
                        title: 'Order tracking',
                    },
                ]}
            />

            <section className="section-b-space">
                <div className="container">
                    <PaymentContainer />
                </div>
            </section>
        </>
    );
}
