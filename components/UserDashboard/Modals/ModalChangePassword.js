import { useForm } from 'react-hook-form';
import { useState } from 'react';
import userApi from '../../../src/api/userApi';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../store/auth/authSlice';
import Swal from 'sweetalert2';

function ModalChangePassword() {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const { cookie, login_method } = useSelector((state) => state.auth);
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { currentPassword, newPassword } = data;
        setIsLoading(true);

        let res = await userApi.ChangePassword({
            current_password: currentPassword,
            new_password: newPassword,
            cookie,
        });

        if (res.error && res.error !== null && res.error !== '') {
            Swal.fire({
                title: 'Error!',
                text: res.error,
                icon: 'error',
                confirmButtonText: 'Close',
            });
            setIsLoading(false);
            return;
        }

        setIsLoading(false);
        reset();
        $('.modal-close-button').click();

        Swal.fire({
            title: `Change password success!`,
            text: 'We have logout you session. Please login with new password!',
            icon: 'success',
            showConfirmButton: false,
        });

        // if (login_method === 'facebook') {
        //     FB.logout(function (response) {
        //         console.log('Logout fb');
        //     });
        // }

        dispatch(logOut());
    };

    return (
        <div className="modal fade reset-email-modal" id="changePassword">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">
                            Change password
                        </h3>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>
                    <div className="modal-body pt-3">
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="currentPassword"
                                    className="form-label font-light"
                                >
                                    Enter current password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="currentPassword"
                                    {...register('currentPassword', {
                                        required: true,
                                        minLength: 6,
                                    })}
                                />

                                {errors.currentPassword?.type ===
                                    'required' && (
                                    <div className="valid-feedback d-block text-danger">
                                        Please fill the current password.
                                    </div>
                                )}
                                {errors.currentPassword?.type ===
                                    'minLength' && (
                                    <div className="valid-feedback d-block text-danger">
                                        Minimum current password length is 6
                                        characters.
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="newPassword"
                                    className="form-label font-light"
                                >
                                    Enter new password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="newPassword"
                                    {...register('newPassword', {
                                        required: true,
                                        minLength: 6,
                                    })}
                                />

                                {errors.newPassword?.type === 'required' && (
                                    <div className="valid-feedback d-block text-danger">
                                        Please fill the new password.
                                    </div>
                                )}
                                {errors.newPassword?.type === 'minLength' && (
                                    <div className="valid-feedback d-block text-danger">
                                        Minimum new password length is 6
                                        characters.
                                    </div>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="reNewPassword"
                                    className="form-label font-light"
                                >
                                    Re-enter new password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="reNewPassword"
                                    {...register('reNewPassword', {
                                        required: true,
                                        validate: {
                                            mathPassword: (v) =>
                                                v === getValues('newPassword'),
                                        },
                                    })}
                                />

                                {errors.reNewPassword?.type === 'required' && (
                                    <div className="valid-feedback d-block text-danger">
                                        Please fill the re-password.
                                    </div>
                                )}
                                {errors.reNewPassword?.type ===
                                    'mathPassword' && (
                                    <div className="valid-feedback d-block text-danger">
                                        Re password not match new password..
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer pt-0">
                        <button
                            className="btn bg-secondary rounded-1 modal-close-button"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                        <button
                            className="btn btn-solid-default rounded-1"
                            style={{ minWidth: 190 }}
                            type="button"
                            onClick={handleSubmit(onSubmit)}
                        >
                            {isLoading ? (
                                <div
                                    className="spinner-border text-black spinner-border-sm"
                                    role="status"
                                >
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <span className="m-0">Change password</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalChangePassword;
