import Link from 'next/link';

const SideBarItem = ({ data }) => {
    // Hàm chuyển đổi thời gian tạo bài
    const transferDate = (date) => {
        const d = new Date(date);
        return (
            d.getDate() +
            '/' +
            (d.getMonth() * 1 + 1) +
            '/' +
            d.getFullYear() +
            ' - ' +
            d.getHours() +
            ':' +
            d.getMinutes()
        );
    };

    return (
        <div className="popular-image">
            <div className="popular-number">
                <h4 className="theme-color">{'0' + (data[1] * 1 + 1)}</h4>
            </div>
            <div className="popular-contain" style={{ cursor: 'pointer' }}>
                <Link href={`/blog/posts/${data[0].slug}`}>
                    <a>
                        <h3>{data[0].title.rendered}</h3>
                    </a>
                </Link>
                {/* <p className="font-light mb-1">
                    <span>King Monster</span> in <span>News</span>
                </p> */}
                <div className="review-box">
                    <span className="font-light clock-time">
                        <i data-feather="clock"></i>
                        {transferDate(data[0].date)}
                    </span>
                    {/* <span className="font-light eye-icon">
                    <i data-feather="eye"></i>
                    8641
                </span> */}
                </div>
            </div>
        </div>
    );
};

export default SideBarItem;
