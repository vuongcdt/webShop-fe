import { withSentry } from '@sentry/nextjs';

import wooApi from '../../../src/api/woocommerce/wooApi';

const stripe = require('stripe')('sk_test_ZWrvOr86Tg0FvE2oetjePW8N00N6yh4R9f');

const calculateOrderAmount = async (orderId) => {
    let result = await wooApi.getOrder(orderId);
    let order = result.data;
    return Number(order.total) * 100;
};

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Method Not Allowed.' });
    }

    if (!req.cookies.wordpress_login) {
        res.status(403).send({
            message: 'You dont have order to create payment.',
        });
    }

    const { orderId, customerId, description } = req.query;

    let amountOrder = await calculateOrderAmount(orderId);

    // // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amountOrder.toString(),
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true,
        },
        description,
    });

    res.json({
        clientSecret: paymentIntent.client_secret,
    });
};

export default withSentry(handler);
