import React from 'react';

export default function CartCheckoutItem({ data, showAttribute = true }) {
    const { name, price, qty, color, size } = data;
    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0 mb-2">{name}</h6>

                <p className="mb-0">
                    <small>Qty: {qty}</small>
                </p>
                {showAttribute ? (
                    <>
                        {' '}
                        <p className="mb-0">
                            <small>Color: {color}</small>
                        </p>
                        <p className="mb-0">
                            <small>Size: {size}</small>
                        </p>
                    </>
                ) : (
                    <></>
                )}
            </div>
            <span>${price}</span>
        </li>
    );
}
