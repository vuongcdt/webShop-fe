import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import {
    productCartRemove,
    productCartUpdate,
} from '../../store/cart/cartSlice';
export default function CartSmallItem({ data }) {
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
        <li>
            <div className="media">
                <Link href={'/product/' + slug}>
                    <img
                        src={image}
                        className="img-fluid blur-up lazyload"
                        alt={name}
                    />
                </Link>
                <div className="media-body">
                    <h6>{name}</h6>
                    <div className="qty-with-price">
                        <span>${price}</span>
                        <span>
                            <input
                                min={1}
                                max={99}
                                type="number"
                                className="form-control"
                                value={qty}
                                onChange={(e) => {
                                    updateProductCart(
                                        id,
                                        e.currentTarget.value
                                    );
                                }}
                            />
                        </span>
                    </div>
                </div>
                <button
                    type="button"
                    className="btn-close d-block d-md-none"
                    aria-label="Close"
                    onClick={removeProductCart}
                >
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </li>
    );
}
