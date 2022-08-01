import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { saveSetting } from '../../../../store/user/webSettingSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import userApi from '../../../../src/api/userApi';
import Swal from 'sweetalert2';
import { storageFireBase } from '../../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { updateAvatar } from '../../../../store/auth/authSlice';

const schema = yup.object().shape({
    avatar: yup
        .mixed()
        .test('required', 'You need to provide a file', (value) => {
            return value && value.length;
        })
        .test('fileSize', 'The file is too large', (value, context) => {
            return value && value[0] && value[0].size <= 2000000;
        })
        .test('type', 'We only support jpeg or png', function (value) {
            return (
                value &&
                value[0] &&
                ['image/jpeg', 'image/png'].includes(value[0].type)
            );
        }),
});

function Profile() {
    const { user, cookie } = useSelector((state) => state.auth);
    const { theme } = useSelector((state) => state.webSetting);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            const storageRef = ref(
                storageFireBase,
                'avatar/' + Date.now() + data.avatar[0].name
            );

            let uploadTask = uploadBytesResumable(storageRef, data.avatar[0]);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    setLoading(false);
                    // Handle unsuccessful uploads
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        icon: 'error',
                        confirmButtonText: 'Close',
                    });
                },
                async () => {
                    let downloadURL = await getDownloadURL(
                        uploadTask.snapshot.ref
                    );

                    try {
                        let res = await userApi.UpdateAvatar({
                            avatar_url: downloadURL,
                            userId: user.id,
                            cookie,
                        });

                        setLoading(false);

                        if (
                            res.error &&
                            res.error !== null &&
                            res.error !== ''
                        ) {
                            Swal.fire({
                                title: 'Error!',
                                text: res.error,
                                icon: 'error',
                                confirmButtonText: 'Close',
                            });
                            return;
                        } else {
                            reset();
                            dispatch(updateAvatar(downloadURL));
                            Swal.fire({
                                title: 'Success!',
                                text: 'Upload avatar succesfully!',
                                icon: 'success',
                                confirmButtonText: 'Close',
                            });
                        }

                        console.log(res);
                    } catch (error) {
                        Swal.fire({
                            title: 'Error!',
                            text: error,
                            icon: 'error',
                            confirmButtonText: 'Close',
                        });
                    }
                }
            );
        } catch (error) {
            setLoading(false);
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Close',
            });
        }
    };

    return (
        <div className="tab-pane fade dashboard-profile dashboard" id="profile">
            <div className="box-head">
                <h3>Avatar</h3>
            </div>
            <ul className="dash-profile">
                <li>
                    <div className="left">
                        <div className="user-avatar">
                            <img src={user.avatar} alt="avatar" />
                        </div>

                        <form
                            encType="multipart/form-data"
                            onSubmit={handleSubmit(onSubmit)}
                            className="wrap-upload d-flex align-items-center mt-3"
                        >
                            <div className="input-group">
                                <label
                                    className="input-group-text"
                                    htmlFor="inputGroupFile01"
                                >
                                    Upload
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="inputGroupFile01"
                                    {...register('avatar')}
                                />
                            </div>
                            <button
                                style={{
                                    minWidth: 103,
                                    height: 48,
                                }}
                                type="submit"
                                className="btn btn-danger ms-3"
                            >
                                {loading ? (
                                    <div
                                        className="spinner-border text-black spinner-border-sm"
                                        role="status"
                                    >
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                ) : (
                                    'Upload'
                                )}
                            </button>
                        </form>

                        {errors.avatar && (
                            <p className="alert alert-warning">
                                {errors.avatar.message}
                            </p>
                        )}
                    </div>
                </li>
            </ul>

            {/* <div className="box-head mt-lg-5 mt-3">
                <h3>Settings</h3>
            </div>

            <ul className="dash-profile">
                <li>
                    <div className="left">
                        <h6 className="font-light">Theme</h6>
                    </div>
                    <div className="right d-flex">
                        <div className="label-switch me-2">Dark</div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                checked={theme === 'light'}
                                onChange={() => {
                                    dispatch(
                                        saveSetting(
                                            theme === 'light'
                                                ? { theme: 'dark' }
                                                : { theme: 'light' }
                                        )
                                    );
                                }}
                            />
                        </div>
                        <div className="label-switch ms-2">Light</div>
                    </div>
                </li>
            </ul> */}
        </div>
    );
}

export default Profile;
