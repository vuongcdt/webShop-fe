import Link from 'next/link';
import { Fragment, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';

function WishListItem({ item }) {
    return (
        <tr>
            <td>
                <a href="product-left-sidebar.html">
                    <img
                        src={item.image}
                        className="blur-up lazyload"
                        alt={item.name}
                    />
                </a>
            </td>
            <td>
                <p className="m-0">#{item.id}</p>
            </td>
            <td>
                <p className="fs-6 m-0">{item.name}</p>
            </td>
            <td>
                <p className="theme-color fs-6">
                    ${Number(item.price).toFixed(2)}
                </p>
            </td>
            <td>
                <Link href={'/product/' + item.slug}>
                    <a className="btn btn-solid-default btn-sm fw-bold ms-2">
                        View
                    </a>
                </Link>
            </td>
        </tr>
    );
}

export default WishListItem;
