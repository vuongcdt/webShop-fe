import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import BillingAddress from './Dash/BillingAddress';
import ContactInfor from './Dash/ContactInfor';
import ShippingAddress from './Dash/ShippingAddress';
import OrderPendingSummary from './Dash/Summary/OrderPendingSummary';
import OrderSummary from './Dash/Summary/OrderSummary';
import WishListSummary from './Dash/Summary/WishListSummary';
import Link from 'next/link';

function Dash() {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="tab-pane fade show active" id="dash">
            <div className="dashboard-right">
                <div className="dashboard">
                    <div className="page-title title title1 title-effect">
                        <h2>My Dashboard</h2>
                    </div>
                    <div className="welcome-msg">
                        <h6 className="font-light">
                            Hello,{' '}
                            {user ? (
                                <span> {user.username} !</span>
                            ) : (
                                <Skeleton count={1} width={80} />
                            )}
                        </h6>
                        <p className="font-light">
                            From your My Account Dashboard you have the ability
                            to view a snapshot of your recent account activity
                            and update your account information. Select a link
                            below to view or edit information.
                        </p>
                    </div>

                    <div className="order-box-contain my-4">
                        <div className="row g-4">
                            <div className="col-lg-4 col-sm-6">
                                <OrderSummary />
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <OrderPendingSummary />
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <WishListSummary />
                            </div>
                        </div>
                    </div>

                    <div className="box-account box-info">
                        <div className="box-head">
                            <h3>Account Information</h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    {/* <div className="box-title">
                                        <h4>Contact Information</h4>
                                        <button className="btn btn-danger btn-sm">
                                            Edit
                                        </button>
                                    </div> */}
                                    <div className="box-content">
                                        <ContactInfor />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-sm-6">
                                <div className="box">
                                    <div className="box-title">
                                        <h4>Newsletters</h4>
                                        <button className="btn btn-danger btn-sm">
                                            Edit
                                        </button>
                                    </div>
                                    <div className="box-content">
                                        <h6 className="font-light">
                                            You are currently not subscribed to
                                            any newsletter.
                                        </h6>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div>
                            <div className="box address-box">
                                <div className="box-title">
                                    <h4>Address</h4>
                                </div>
                                <div className="box-content">
                                    <div className="row g-4">
                                        <div className="col-sm-6">
                                            <BillingAddress />
                                        </div>
                                        <div className="col-sm-6">
                                            <ShippingAddress />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dash;
