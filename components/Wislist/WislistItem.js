import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { productRemove } from '../../store/user/productLiked';
import { toast } from 'react-toastify';

export default function WislistItem({
    id,
    image,
    name,
    slug,
    price,
    stock_status,
}) {
    const dispatch = useDispatch();
    const removeProductHandle = (id) => {
        dispatch(productRemove(id));
        toast.warning('Remove product wishlist successfully!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <tr>
            <td>
                <Link href={'/product/' + slug}>
                    <a>
                        <img
                            src={image}
                            className="blur-up lazyload"
                            alt={name}
                        />
                    </a>
                </Link>
            </td>
            <td>
                <Link href={'/product/' + slug}>
                    <a className="font-light">{name}</a>
                </Link>
                <div className="mobile-cart-content row">
                    <div className="col">
                        <p>{stock_status}</p>
                    </div>
                    <div className="col">
                        <p className="fw-bold">${price}</p>
                    </div>
                    <div className="col">
                        <h2 className="td-color">
                            <a
                                onClick={() => {
                                    removeProductHandle(id);
                                }}
                                className="icon"
                            >
                                <i className="fas fa-times"></i>
                            </a>
                        </h2>
                        <h2 className="td-color">
                            <Link href={'/product/' + slug}>
                                <a className="icon">
                                    <i className="fas fa-eye"></i>
                                </a>
                            </Link>
                        </h2>
                    </div>
                </div>
            </td>
            <td>
                <p className="fw-bold">${price}</p>
            </td>
            <td>
                <p>{stock_status}</p>
            </td>
            <td>
                <a
                    onClick={() => {
                        removeProductHandle(id);
                    }}
                    className="icon"
                >
                    <i className="fas fa-times"></i>
                </a>
                <Link href={'/product/' + slug}>
                    <a className="icon">
                        <i className="fas fa-eye"></i>
                    </a>
                </Link>
            </td>
        </tr>
    );
}
