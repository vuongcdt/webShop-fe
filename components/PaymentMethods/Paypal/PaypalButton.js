import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import wooApi from '../../../src/api/woocommerce/wooApi';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

const style = { layout: 'vertical' };

export default function PaypalButton({
    currency,
    showSpinner,
    currentOrderId,
    amount,
}) {
    const [{ isPending }] = usePayPalScriptReducer();
    const { user } = useSelector((state) => state.auth);
    const queryClient = useQueryClient();
    const router = useRouter();

    return (
        <>
            {showSpinner && isPending && (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[currentOrderId, user]}
                createOrder={async (data, actions) => {
                    const orderId = await actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: currency,
                                    value: amount,
                                },
                                custom_id: user.id,
                                description: `Payment order #${currentOrderId} of customer ${user.id} via paypal.`,
                                invoice_id: currentOrderId,
                            },
                        ],
                    });
                    return orderId;
                }}
                onApprove={async function (data, actions) {
                    let rerulst = await actions.order.capture();

                    console.log('Paypal result', rerulst);

                    let updateResult = await wooApi.updateOrder(
                        currentOrderId,
                        {
                            status: 'processing',
                        }
                    );

                    console.log('Update result', updateResult);

                    let updateOrderNote = await wooApi.createOrderNote(
                        currentOrderId,
                        {
                            note: `Payment successfully via Paypal <br> Transaction ID: <b>${rerulst.purchase_units[0].payments.captures[0].id}</b> <br> Create time: ${rerulst.create_time} <br> Update time: ${rerulst.update_time}`,
                        }
                    );

                    console.log('Update order note', updateOrderNote);
                 
                    queryClient.invalidateQueries('getOrderToPayment');
                }}
                onCancel={async function (data) {
                    toast.warn('Cancel payment.', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }}
                onError={async function (err) {
                    toast.error('Payment error! Please try again.', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }}
            />
        </>
    );
}
