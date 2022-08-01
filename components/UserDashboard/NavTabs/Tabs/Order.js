import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { useMyOrders } from '../../../../reactQueryHook';
import Pagination from '../../../Common/Pagination';
import OrderItem from '../../Orders/OrderItem';

function Order() {
    const router = useRouter();
    const [pageTotal, setPageTotal] = useState(0);
    const { orderPage, tab } = router.query;

    const { isLoading, isError, data, error, isFetching } = useMyOrders({
        page: orderPage ? Number(orderPage) : 1,
        order: 'desc',
        orderby: 'date',
    });

    useEffect(() => {
        if (isError) {
            toast.error(error, {
                position: 'bottom-left',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [isError]);

    useEffect(() => {
        if (data) {
            setPageTotal(data.headers['x-wp-totalpages']);
        }
    }, [data]);

    const onChangePage = (event) => {
        router.push(
            {
                pathname: '/user-dashboard',
                query: { tab, orderPage: event.selected + 1 },
            },
            null,
            {
                scroll: false,
                shallow: true,
            }
        );
    };

    return (
        <div
            className="tab-pane fade table-dashboard dashboard wish-list-section"
            id="order"
        >
            <div className="box-head mb-3">
                <h3>My Order</h3>
            </div>
            <div className="table-responsive">
                <table className="table cart-table">
                    <thead>
                        <tr className="table-head">
                            <th scope="col">Order Id</th>
                            <th scope="col">Date created</th>
                            <th scope="col">Status</th>
                            <th scope="col">Total Price</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading || isFetching || isError ? (
                            new Array(10).fill(null).map((item, index) => (
                                <tr key={index}>
                                    <td colSpan={5}>
                                        <Skeleton height={24.4} count={1} />
                                    </td>
                                </tr>
                            ))
                        ) : data.data.length === 0 ? (
                            <tr>
                                <td colSpan={5}>
                                    <p className="text-center alert alert-warning">
                                        You don't have any orders
                                    </p>
                                </td>
                            </tr>
                        ) : (
                            data.data.map((order, index) => (
                                <OrderItem orderData={order} key={index} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            {tab === 'order' ? (
                <Pagination pageTotal={pageTotal} onClickEvent={onChangePage} />
            ) : (
                <></>
            )}
        </div>
    );
}

export default Order;
