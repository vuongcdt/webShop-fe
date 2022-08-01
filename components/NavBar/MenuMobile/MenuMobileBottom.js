import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function MenuMobileBottom() {
    const router = useRouter();
    const { pathname } = router;
    React.useEffect(() => {
        feather.replace();
    }, []);

    return (
        <div className="mobile-menu d-sm-none">
            <ul>
                <li>
                    <Link href="/">
                        <a className={pathname === '/' ? 'active' : ''}>
                            <i data-feather="home"></i>
                            <span>Home</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/product-category'}>
                        <a
                            className={
                                pathname === '/product-category' ? 'active' : ''
                            }
                        >
                            <i data-feather="align-justify"></i>
                            <span>Category</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/cart">
                        <a className={pathname === '/cart' ? 'active' : ''}>
                            <i data-feather="shopping-bag"></i>
                            <span>Cart</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/wishlist">
                        <a className={pathname === '/wishlist' ? 'active' : ''}>
                            <i data-feather="heart"></i>
                            <span>Wishlist</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/user-dashboard">
                        <a
                            className={
                                pathname === '/user-dashboard' ? 'active' : ''
                            }
                        >
                            <i data-feather="user"></i>
                            <span>Account</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MenuMobileBottom;
