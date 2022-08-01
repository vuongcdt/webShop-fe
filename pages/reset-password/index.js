import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import userApi from '../../src/api/userApi';

function ResetPassword() {
    const router = useRouter();
    const { email: emailReset } = router.query;
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        $(function () {
            $('.input input')
                .focus(function () {
                    $(this)
                        .parent('.input')
                        .each(function () {
                            $('label', this).css({
                                'line-height': '18px',
                                'font-weight': '100',
                                top: '0px',
                            });
                            $('.spin', this).css({
                                width: '100%',
                            });
                        });
                })
                .blur(function () {
                    $('.spin').css({
                        width: '0px',
                    });
                    if ($(this).val() == '') {
                        $(this)
                            .parent('.input')
                            .each(function () {
                                $('label', this).css({
                                    'line-height': '60px',
                                    'font-weight': '300',
                                    top: '10px',
                                });
                            });
                    }
                });
        });
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await userApi.ValidateCodeReset({
                email: emailReset,
                code: data.code,
            });

            await userApi.ResetPassword({
                email: emailReset,
                password: data.password,
                code: data.code,
            });

            setIsLoading(false);

            Swal.fire({
                title: `Reset password success!`,
                text: 'Please login account with new password.',
                icon: 'success',
                showConfirmButton: false,
            });

            router.push('/login');
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                Swal.fire({
                    title: 'Error!',
                    text: error.response.data.message,
                    icon: 'error',
                    confirmButtonText: 'Close',
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred, please try again',
                    icon: 'error',
                    confirmButtonText: 'Close',
                });
            }
        }
    };

    return (
        <>
            {/* Sign Up Section Start */}
            <div className="login-section">
                <div className="materialContainer">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="box">
                            <div className="login-title">
                                <h2>Reset Password</h2>
                            </div>
                            <div className="input">
                                <label htmlFor="code">Enter code </label>
                                <input
                                    type="text"
                                    id="code"
                                    {...register('code', {
                                        required: true,
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.code?.type === 'required' && <div className="valid-feedback d-block text-danger">Please fill the code.</div>}

                            <div className="input">
                                <label htmlFor="password">Enter new password </label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.password?.type === 'required' && <div className="valid-feedback d-block text-danger">Please fill the password.</div>}
                            {errors.password?.type === 'minLength' && <div className="valid-feedback d-block text-danger">Minimum password length is 6 characters.</div>}

                            <div className="input">
                                <label htmlFor="repassword">Re-enter new password </label>
                                <input
                                    type="password"
                                    id="repassword"
                                    {...register('repassword', {
                                        required: true,
                                        validate: {
                                            mathPassword: (v) => v === getValues('password'),
                                        },
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.repassword?.type === 'required' && <div className="valid-feedback d-block text-danger">Please fill the re-password.</div>}
                            {errors.repassword?.type === 'mathPassword' && <div className="valid-feedback d-block text-danger">Re password not match password.</div>}

                            <div className="button login button-1">
                                <button>
                                    {isLoading ? (
                                        <div className="spinner-border text-light spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    ) : (
                                        <span className="m-0">Reset password</span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Sign Up Section End */}
        </>
    );
}

export default ResetPassword;
