import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Stripe from './Stripe';
import { useSelector } from 'react-redux';
import paymentApi from '../../../src/api/paymentApi';

const stripePromise = loadStripe('pk_test_i2ZAS9FgIW41492LboEw6Yck008KenlQKk');

export default function StripeMethod({ orderId }) {
    const { user } = useSelector((state) => state.auth);

    const appearance = {
        theme: 'stripe',
    };

    const [clientSecret, setClientSecret] = useState('');

    const createPaymentIntent = async () => {
        let result = await paymentApi.createPaymentIntentStripe({
            orderId,
            customerId: user.id,
            description: `Payment for order #${orderId} via Stripe of customer #${user.id} - ${user.username}`,
        });

        setClientSecret(result.data.clientSecret);
    };

    useEffect(() => {
        if (orderId) {
            createPaymentIntent();
        }
    }, [orderId]);

    return clientSecret ? (
        <Elements
            stripe={stripePromise}
            options={{
                clientSecret,
                appearance,
            }}
        >
            <Stripe orderID={orderId} />
        </Elements>
    ) : (
        <div className="text-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
