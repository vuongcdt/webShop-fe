import Link from 'next/link';
import React from 'react';
import {
    productCartRemove,
    productCartUpdate,
} from '../../store/cart/cartSlice';

import { useDispatch } from 'react-redux';

export default function CartTableItem({ data }) {
    const { id, image, price, name, qty, slug } = data;
    const dispatch = useDispatch();
    const updateProductCart = (id, qtyNew) => {
        console.log(id, qtyNew);
        dispatch(
            productCartUpdate({
                id,
                changes: {
                    qty: Number(qtyNew),
                },
            })
        );
    };

    const removeProductCart = () => {
        dispatch(productCartRemove(id));
    };

    return (
        <tr>
            <td>
                <Link href={'/product/' + slug}>
                    <a>
                        <img
                            src={image}
                            className=" blur-up lazyload"
                            alt={name}
                        />
                    </a>
                </Link>
            </td>
            <td>
                <Link href={'/product/' + slug}>
                    <a>{name}</a>
                </Link>
                <div className="mobile-cart-content row">
                    <div className="col">
                        <div className="qty-box">
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="quantity"
                                    className="form-control input-number"
                                    value={qty}
                                    onChange={(e) => {
                                        updateProductCart(
                                            id,
                                            e.currentTarget.value
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h2>${price}</h2>
                    </div>
                    <div className="col">
                        <h2 className="td-color">
                            <div className='btn-remove-product-cart' onClick={removeProductCart}>
                                <i className="fas fa-times"></i>
                            </div>
                        </h2>
                    </div>
                </div>
            </td>
            <td>
                <h2>${price}</h2>
            </td>
            <td>
                <div className="qty-box">
                    <div className="input-group">
                        <input
                            type="number"
                            name="quantity"
                            className="form-control input-number"
                            value={qty}
                            onChange={(e) => {
                                updateProductCart(id, e.currentTarget.value);
                            }}
                        />
                    </div>
                </div>
            </td>
            <td>
                <a onClick={removeProductCart}>
                    <i className="fas fa-times"></i>
                </a>
            </td>
            <td>
                <h2 className="td-color">
                    ${(Number(price) * qty).toFixed(2)}
                </h2>
            </td>
        </tr>
    );
}
