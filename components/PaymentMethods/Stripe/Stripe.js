import React, { useEffect, useState } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import wooApi from '../../../src/api/woocommerce/wooApi';
import moment from 'moment';
import { useQueryClient } from 'react-query';

export default function Stripe({ orderID }) {
    const router = useRouter();
    const { payment_intent_client_secret: clientSecret } = router.query;

    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isReadyStripePayment, setIsReadyStripePayment] = useState(false);
    const [isUpdateOrder, setIsUpdateOrder] = useState(false);

    const queryClient = useQueryClient();

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        setIsLoading(true);

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: 'http://localhost:3000/payment?orderId=' + orderID,
            },
        });

        if (error.type === 'card_error' || error.type === 'validation_error') {
            setMessage(error.message);
        } else {
            setMessage('An unexpected error occurred.');
        }

        setIsLoading(false);
    };

    const updateStatusOrder = async (currentOrderId, paymentIntent) => {
        console.log(paymentIntent);
        let updateResult = await wooApi.updateOrder(currentOrderId, {
            status: 'processing',
        });

        console.log('Update result', updateResult);

        let updateOrderNote = await wooApi.createOrderNote(currentOrderId, {
            note: `Payment successfully via Stripe <br> Payment ID: <b>${
                paymentIntent.id
            }</b> <br> Create time: ${moment
                .unix(paymentIntent.created)
                .format('DD-MM-YYYY')}`,
        });

        console.log('Update order note', updateOrderNote);
    };

    useEffect(() => {
        if (!stripe) {
            return;
        }

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case 'succeeded':
                    setIsUpdateOrder(true);
                    updateStatusOrder(orderID, paymentIntent).then(() => {
                        setIsUpdateOrder(false);
                        queryClient.invalidateQueries('getOrderToPayment');
                        Swal.fire({
                            title: 'Payment via Stripe',
                            text: 'Payment succeeded!',
                            icon: 'success',
                        });
                    });
                    break;
                case 'processing':
                    Swal.fire({
                        title: 'Payment via Stripe',
                        text: 'Your payment is processing!',
                        icon: 'info',
                    });
                    break;
                case 'requires_payment_method':
                    Swal.fire({
                        title: 'Payment via Stripe',
                        text: 'Your payment was not successful, please try again!',
                        icon: 'warning',
                    });
                    break;
                default:
                    Swal.fire({
                        title: 'Payment via Stripe',
                        text: 'Something went wrong, please try again!',
                        icon: 'error',
                    });
                    break;
            }
        });
    }, [stripe]);

    return (
        <>
            {isReadyStripePayment ? (
                <></>
            ) : (
                <div className="text-center w-100">
                    <div
                        className="spinner-border text-primary my-auto"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {isUpdateOrder ? (
                <div className="text-center w-100 alert alert-warning mt-2">
                    Updating your order...
                </div>
            ) : (
                <PaymentElement
                    onReady={() => {
                        setIsReadyStripePayment(true);
                    }}
                    id="payment-element"
                />
            )}

            {isReadyStripePayment ? (
                <button
                    disabled={
                        isLoading || !stripe || !elements || isUpdateOrder
                    }
                    id="submit"
                    type="button"
                    onClick={handleSubmit}
                    className={'btn btn-primary w-100 mt-3 rounded text-center'}
                >
                    {isLoading || isUpdateOrder ? (
                        <div
                            className="spinner-border text-light spinner-border-sm"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <span id="button-text text-center">Pay now</span>
                    )}
                </button>
            ) : (
                <></>
            )}
        </>
    );
}
