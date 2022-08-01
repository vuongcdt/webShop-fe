import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAddPostComment } from '../../../src/api_minhhieu/postcommentsApi';

function CommentBox({postId}) {

    //Lấy thông tin người dùng
    const authState = useSelector(state => state.auth);
    const {user} = authState;

    const [comment, setComment] = useState('');
    const [disableSubmit, setDisableSubmit] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const { mutate: addComment } = useAddPostComment();

    const handleSubmitComment = async () => {
        if (user.id) {
            setDisableSubmit(true);
            setIsSending(true);
            addComment({
                post_id: postId,
                name:user.username,
                email:user.email,
                content:comment
            }, {
                onSuccess: (data) => {
                    if (data.status === 200) {
                        setDisableSubmit(false);
                        setIsSending(false);
                        setComment('');
                    }
                }
            })
        } else {
            setComment('');
        }
    }

    const handleCommentChange = (event) => {
        const value = event.target.value;
        setComment(value);
    }

    return (
        <div className="row g-2">
            <div className="col-12">
                <div className="minus-spacing mb-2">
                    <h3>Leave Comments</h3>
                </div>
            </div>
            <div className="col-12" hidden={user.id ? false : true}>
                <label htmlFor="textarea" className="form-label">
                    Comments
                </label>
                <textarea
                    rows="3"
                    className="form-control"
                    id="textarea"
                    placeholder="Leave a comment here"
                    onChange={handleCommentChange}
                    value={comment}
                    required
                ></textarea>
            </div>

            <div className="mt-3" hidden={user.id ? false : true}>
                <div className='d-inline-block position-relative'>
                    <button
                        type="submit"
                        className="btn btn-solid-default btn-spacing"
                        onClick={handleSubmitComment}
                        disabled={disableSubmit}
                    >
                        Submit
                    </button>
                    <span hidden={!isSending} className='ms-3 position-absolute start-100 top-50 translate-middle-y'>
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </span>
                </div>
                
            </div>

            <div className="col-12" hidden={user.id ? true : false}>
                <div className="d-flex w-100">
                    <p className="alert alert-warning w-100">
                        You must{' '}
                        <b>
                            <Link href="/login">
                                <span className='hover-theme-color' style={{cursor:'pointer'}}>login</span>
                            </Link>
                        </b>{' '}
                        to comment this post!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CommentBox;
