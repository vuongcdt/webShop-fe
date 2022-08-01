import { Fragment, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import {
    useUserAddressList,
    useUserRemoveAddress,
    useUserUpdateAddress,
} from '../../../../reactQueryHook';
import ModalAddAddress from '../../Modals/ModalAddAddress';
import AddressItem from './Save/AddressItem';

function Save() {
    const { user, cookie } = useSelector((state) => state.auth);

    const { isError, error, isLoading, data, isFetching } =
        useUserAddressList();

    const {
        error: errorRemove,
        isError: isErrorRemove,
        isLoading: IsLoadingRemove,
        isSuccess,
        mutate,
        reset: resetMutation,
    } = useUserRemoveAddress();

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
        if (isSuccess) {
            if (data.error && data.error !== null && data.error !== '') {
                Swal.fire({
                    title: 'Error!',
                    text: data.error,
                    icon: 'error',
                    confirmButtonText: 'Close',
                });
            } else {
                resetMutation();
                Swal.fire({
                    title: 'Success!',
                    text: 'Remove address succesfully!',
                    icon: 'success',
                    confirmButtonText: 'Close',
                });
            }
        }
    }, [isSuccess]);

    const onClickRemove = (addressRow) => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to delete address?',
            icon: 'warning',
            confirmButtonText: 'Confirm',
            confirmButtonColor: '#dc3545',
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                mutate({
                    row: addressRow,
                });
                Swal.fire({
                    title: 'Deleting!',
                    text: 'Progress request...',
                    icon: 'info',
                    didOpen: () => {
                        Swal.showLoading();
                    },
                });
            }
        });
    };

    useEffect(() => {
        if (isError) {
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Close',
            });
        }
    }, [isError]);

    const {
        error: errorEdit,
        isError: isErrorEdit,
        isLoading: isLoadingEdit,
        isSuccess: isSuccessEdit,
        mutate: mutateEdit,
        reset: resetMutationEdit,
        data: dataEdit,
    } = useUserUpdateAddress();

    const onClickSubmitEdit = (data) => {
        mutateEdit({
            userId: user.id,
            cookie,
            address_title: data.address_title,
            first_name: data.first_name,
            last_name: data.last_name,
            address_1: data.address_1,
            address_2: data.address_2,
            city: data.city,
            state: data.state,
            postal_code: data.postcode,
            country: data.country,
            email: data.email,
            phone: data.phone,
            row: data.addressRow,
        });
    };

    useEffect(() => {
        if (isErrorEdit) {
            Swal.fire({
                title: 'Error!',
                text: errorEdit,
                icon: 'error',
                confirmButtonText: 'Close',
            });
        }
    }, [isErrorEdit]);

    useEffect(() => {
        if (isSuccessEdit) {
            if (
                dataEdit.error &&
                dataEdit.error !== null &&
                dataEdit.error !== ''
            ) {
                Swal.fire({
                    title: 'Error!',
                    text: dataEdit.error,
                    icon: 'error',
                    confirmButtonText: 'Close',
                });
                return;
            } else {
                resetMutationEdit();
                $('.modal-close-button').click();
                Swal.fire({
                    title: 'Success!',
                    text: 'Edit address succesfully!',
                    icon: 'success',
                    confirmButtonText: 'Close',
                });
            }
        }
    }, [isSuccessEdit]);

    return (
        <Fragment>
            <div className="tab-pane fade dashboard" id="save">
                <div className="box-head">
                    <h3>Save Address</h3>
                    <button
                        className="btn btn-solid-default btn-sm fw-bold ms-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#addAddress"
                    >
                        <i className="fas fa-plus"></i> Add New Address
                    </button>
                </div>
                <div className="save-details-box">
                    <div className="row g-3">
                        {isLoading ? (
                            <Skeleton />
                        ) : data.address_list && data.address_list.length > 0 ? (
                            data.address_list.map((item, index) => (
                                <div className="col-xl-4 col-md-6" key={index}>
                                    <AddressItem
                                        editModaAddresslKey={'#editModal' + index}
                                        onClickRemove={onClickRemove}
                                        addressData={item}
                                        addressRow={index + 1}
                                        onClickSubmitEdit={onClickSubmitEdit}
                                        isLoadingEdit={isLoadingEdit}
                                        isFetching={isFetching}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="alert alert-warning">
                                No address save.
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <ModalAddAddress />
        </Fragment>
    );
}

export default Save;
