import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';
import { useCustomerInfor } from '../../../../../reactQueryHook';
import ModalChangePassword from '../../../../UserDashboard/Modals/ModalChangePassword';

function ContactInfor() {
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
            <div className="mb-3">
                {isLoading || isError || isFetching? (
                    <Skeleton count={4} />
                ) : (
                    <>
                        <h6 className="font-light">
                            First Name: {data.data.first_name}
                        </h6>
                        <h6 className="font-light">
                            Last Name: {data.data.last_name}
                        </h6>
                        <h6 className="font-light">Email: {data.data.email}</h6>
                        <h6 className="font-light">
                            Role:{' '}
                            <b className="text-uppercase">{data.data.role}</b>
                        </h6>
                    </>
                )}
            </div>
            <button
                className="btn btn-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#changePassword"
            >
                Change Password
            </button>

            <ModalChangePassword />
        </>
    );
}

export default ContactInfor;
