import React, { useEffect } from 'react';

export default function ModalSliderQuickView({ image }) {
    useEffect(() => {
        if (image) {
            $('.bg-top').parent().addClass('b-top');
            $('.bg-bottom').parent().addClass('b-bottom');
            $('.bg-center').parent().addClass('b-center');
            $('.bg-left').parent().addClass('b-left');
            $('.bg-right').parent().addClass('b-right');
            $('.bg_size_content').parent().addClass('b_size_content');
            $('.bg-img').parent().addClass('bg-size');
            $('.bg-img.blur-up').parent().addClass('blur-up lazyload');
            $('.quick-view-slider .bg-img').each(function () {
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
        }
    }, [image]);

    return (
        <div className="quick-view-slider ratio_2">
            <div>
                <img
                    src={image}
                    className="img-fluid bg-img blur-up lazyload"
                    alt="product"
                />
            </div>
        </div>
    );
}
