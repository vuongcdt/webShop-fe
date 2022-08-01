import { getClassStatus } from '../../../utils/helpers';
import moment from 'moment';
import Link from 'next/link';

function OrderItem({ orderData }) {
    const { id, status, total, date_created } = orderData;
    const classStatus = getClassStatus(status);
    return (
        <tr>
            <td>
                <p className="mt-0">#{id}</p>
            </td>
            <td>
                <p className="fs-6 m-0">
                    {moment(date_created).format('DD/MM/YYYY HH:mm:ss')}
                </p>
            </td>
            <td>
                <p className={`${classStatus} btn btn-sm`}>{status}</p>
            </td>
            <td>
                <p className="theme-color fs-6">${total}</p>
            </td>
            <td>
                <Link
                    href={{
                        pathname: '/order-tracking/[id]',
                        query: {
                            id,
                        },
                    }}
                >
                    <a>
                        <i className="far fa-eye"></i>
                    </a>
                </Link>
            </td>
        </tr>
    );
}

export default OrderItem;
