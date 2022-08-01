import { useSelector } from 'react-redux';
import CartCheckoutItem from '../../components/Cart/CartCheckoutItem';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SubscribeBox from '../../components/Common/SubscribeBox';
import Sekeleton from 'react-loading-skeleton';
import Formcheckout from '../../components/Checkout/Formcheckout';
import { useUserAddressList } from '../../reactQueryHook';
import { useState } from 'react';
import Link from 'next/link';

const initialAddress = {
    address_1: '',
    address_2: '',
    city: '',
    country: '',
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    postal_code: '',
    state: '',
};

function Checkout() {
    const cartState = useSelector((state) => state.cart);
    const { couponCode, couponValue } = cartState.coupon;
    const { isError, error, isLoading, data, isFetching, refetch } =
        useUserAddressList();
    const [address, setAddress] = useState(initialAddress);
    const { cookie } = useSelector((state) => state.auth);

    return (
        <>
            <Breadcrumb
                title={'Checkout'}
                bredcrumbList={[
                    {
                        title: 'Cart',
                        href: '/cart',
                    },
                ]}
            />

            <section className="section-b-space">
                <div className="container">
                    {cartState.ids.length === 0 ? (
                        <p className="alert alert-warning">
                            You don't have order to checkout
                        </p>
                    ) : !cookie ? (
                        <p className="alert alert-warning text-center">
                            You must{' '}
                            <Link href={'/login'}>
                                <a>login</a>
                            </Link>{' '}
                            to checkout
                        </p>
                    ) : (
                        <div className="row g-4">
                            <div className="col-lg-8">
                                <div className="checkout-header d-flex justify-content-between align-items-center">
                                    <h3 className="mb-3">Shipping address</h3>
                                    <div className="select-address d-flex flex-column align-items-end">
                                        <p className="mb-0">Your address</p>
                                        {isLoading || isFetching ? (
                                            <Sekeleton width={100} />
                                        ) : (
                                            <select
                                                onChange={(e) => {
                                                    if (
                                                        e.target.value === '-1'
                                                    ) {
                                                        setAddress(
                                                            initialAddress
                                                        );
                                                        return;
                                                    }

                                                    setAddress({
                                                        ...data.address_list[
                                                            Number(
                                                                e.target.value
                                                            )
                                                        ].billing_information,
                                                    });
                                                }}
                                            >
                                                <option value="-1">
                                                    Select address
                                                </option>
                                                {data.address_list.map(
                                                    (item, index) => (
                                                        <option
                                                            key={index}
                                                            value={index}
                                                        >
                                                            {item.address_title}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        )}
                                    </div>
                                </div>

                                <Formcheckout data={address} />
                            </div>

                            <div className="col-lg-4">
                                <div className="your-cart-box">
                                    <h3 className="mb-3 d-flex text-capitalize">
                                        Your cart
                                        <span className="badge bg-theme new-badge rounded-pill ms-auto bg-dark">
                                            {cartState.ids.length}
                                        </span>
                                    </h3>

                                    <ul className="list-group mb-3">
                                        {Object.values(cartState.entities).map(
                                            (item, index) => (
                                                <CartCheckoutItem
                                                    key={index}
                                                    data={item}
                                                />
                                            )
                                        )}
                                        <li className="list-group-item d-flex justify-content-between lh-condensed active">
                                            <div className="text-dark">
                                                <h6 className="my-0">
                                                    Coupon code
                                                </h6>
                                                <small>{couponCode}</small>
                                            </div>
                                            <span>
                                                -$
                                                {Number(couponValue).toFixed(2)}
                                            </span>
                                        </li>
                                        <li className="list-group-item d-flex lh-condensed justify-content-between">
                                            <span className="fw-bold">
                                                Total
                                            </span>
                                            <strong>
                                                $
                                                {_.sumBy(
                                                    Object.values(
                                                        cartState.entities
                                                    ),
                                                    function (o) {
                                                        return (
                                                            Number(o.price) *
                                                            o.qty
                                                        );
                                                    }
                                                ).toFixed(2) -
                                                    couponValue.toFixed(2)}
                                            </strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <SubscribeBox />
        </>
    );
}

export default Checkout;
