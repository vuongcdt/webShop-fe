import { useEffect } from 'react';

function CommentItem({ author_name, content, date, author_avatar_urls }) {
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

    useEffect(() => {
        (function ($) {
            'use strict';
            $('.bg-top').parent().addClass('b-top');
            $('.bg-bottom').parent().addClass('b-bottom');
            $('.bg-center').parent().addClass('b-center');
            $('.bg-left').parent().addClass('b-left');
            $('.bg-right').parent().addClass('b-right');
            $('.bg_size_content').parent().addClass('b_size_content');
            $('.bg-img').parent().addClass('bg-size');
            $('.bg-img.blur-up').parent().addClass('blur-up lazyload');
            $('.bg-img').each(function () {
                var el = $(this),
                    src = el.attr('src'),
                    parent = el.parent();

                parent.css({
                    'background-image': 'url(' + src + ')',
                    'background-size': 'cover',
                    'background-position': 'center',
                    'background-repeat': 'no-repeat',
                    display: 'block',
                });

                el.hide();
            });
        })(jQuery);
        feather.replace();
    }, []);

    return (
        <div className="customer-section">
            <div className="customer-profile">
                <img
                    src={author_avatar_urls[48]}
                    className="img-fluid blur-up lazyload"
                    alt=""
                />
            </div>

            <div className="customer-details">
                <h5>{author_name}</h5>

                <div
                    className="font-light"
                    dangerouslySetInnerHTML={{ __html: content.rendered }}
                ></div>

                <p className="date-custo font-light">{transferDate(date)}</p>
            </div>
        </div>
    );
}

export default CommentItem;
