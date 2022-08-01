function AuthorBox({ author_avatar, author_name }) {
    return (
        <div className="blog-profile box-center mb-lg-5 mb-4">
            <div className="image-profile">
                <img
                    src={author_avatar}
                    className="img-fluid blur-up lazyload"
                    alt=""
                />
            </div>

            <div className="image-name text-weight">
                <h3>{author_name}</h3>
            </div>
        </div>
    );
}

export default AuthorBox;
