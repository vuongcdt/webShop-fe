import React from 'react';

function OnSale({ on_sale, price, regular_price, type = 'card' }) {
    return (
        on_sale && (
            <span
                className={
                    type === 'compare' ? 'theme-color' : 'label label-theme'
                }
            >
                {Math.floor((1 - price / regular_price) * 100)}% Off
            </span>
        )
    );
}

export default OnSale;
