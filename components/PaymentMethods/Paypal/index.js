import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useState } from 'react';
import PaypalButton from './PaypalButton';

export default function PaypalMethod({ orderId, amount }) {
    const clientId =
        'AbFx7hNQE0uaz1Z6Aif_zc0rVlq7g7ankaartyrMJ-ltmezdfO93-idKsODDbDHl9shv4rN27sf2tqhh';
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (orderId && amount) {
            setLoading(false);
        }
    }, [orderId, amount]);

    return (
        <PayPalScriptProvider
            deferLoading={loading}
            options={{
                'client-id': clientId,
                components: 'buttons',
                currency: 'USD',
            }}
        >
            <PaypalButton
                showSpinner={true}
                currency={'USD'}
                currentOrderId={orderId}
                amount={amount}
            />
        </PayPalScriptProvider>
    );
}
