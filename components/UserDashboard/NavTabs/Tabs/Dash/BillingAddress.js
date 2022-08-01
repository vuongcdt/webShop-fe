import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';
import { useCustomerInfor } from '../../../../../reactQueryHook';
import ModalEditBillingAddress from '../../../Modals/ModalEditBillingAddress';

function BillingAddress() {
    const { isLoading, isError, data, error, isFetching } = useCustomerInfor();

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

    return (
        <>
            <h6 className="font-light fw-bold">Billing Address</h6>
            <div className="mb-3">
                {isLoading || isError || isFetching ? (
                    <Skeleton count={11} height={20} />
                ) : (
                    <>
                        <h6 className="font-light">
                            First Name: {data.data.billing.first_name}
                        </h6>
                        <h6 className="font-light">
                            Last Name: {data.data.billing.last_name}
                        </h6>
                        <h6 className="font-light">
                            Email: {data.data.billing.email}
                        </h6>
                        <h6 className="font-light">
                            Phone: {data.data.billing.phone}
                        </h6>
                        <h6 className="font-light">
                            Address 1: {data.data.billing.address_1}
                        </h6>
                        <h6 className="font-light">
                            Address 2: {data.data.billing.address_2}
                        </h6>
                        <h6 className="font-light">
                            Company: {data.data.billing.company}
                        </h6>
                        <h6 className="font-light">
                            City: {data.data.billing.city}
                        </h6>
                        <h6 className="font-light">
                            State: {data.data.billing.state}
                        </h6>
                        <h6 className="font-light">
                            Country: {data.data.billing.country}
                        </h6>
                        <h6 className="font-light">
                            Postcode: {data.data.billing.postcode}
                        </h6>
                    </>
                )}
            </div>
            <button
                className="btn btn-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#editBilling"
            >
                Edit billing address
            </button>

            <ModalEditBillingAddress customerData={data} />
        </>
    );
}

export default BillingAddress;
