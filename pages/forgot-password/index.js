import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import userApi from '../../src/api/userApi';

function ForgotPassword() {
    const router = useRouter();
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
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await userApi.SendCodeResetPass({
                email: data.email,
            });

            Swal.fire({
                title: `Reset password success!`,
                html: `We send code veryfi to email <b>${data.email}</b>. Please check your email`,
                icon: 'success',
                showConfirmButton: false,
            });

            router.push({
                pathname: '/reset-password',
                query: {
                    email: data.email,
                },
            });
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
                                <h2>Forgot Password</h2>
                            </div>
                            <div className="input">
                                <label htmlFor="email">Enter Email Address</label>
                                <input
                                    type="text"
                                    id="email"
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.email?.type === 'required' && <div className="valid-feedback d-block text-danger">Please fill the email.</div>}
                            {errors.email?.type === 'pattern' && <div className="valid-feedback d-block text-danger">Email format incorrect.</div>}

                            <div className="button login button-1">
                                <button>
                                    {isLoading ? (
                                        <div className="spinner-border text-light spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    ) : (
                                        <span className="m-0">Send code verify</span>
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

export default ForgotPassword;
