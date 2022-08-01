import React, { useEffect } from 'react';
import ProductCard from '../Product/ProductCard';

export default function ProductSlider({ dataProduct }) {
    const { title, subtitle, products } = dataProduct;
    useEffect(() => {
        let sliderProductSlider = $('.slide-4').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });

        return () => {
            sliderProductSlider.slick('unslick');
        };
    }, []);

    return (
        <section className="ratio_asos">
            <div className="container">
                <div className="row m-0">
                    <div className="col-sm-12 p-0">
                        <div className="title title-2 text-center">
                            <h2>{title}</h2>
                            <h5 className="text-color">{subtitle}</h5>
                        </div>
                        <div className="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space">
                            {products.map((item, index) => (
                                <div
                                    key={index}
                                    className="col-xl-3 col-lg-4 col-6"
                                >
                                    <ProductCard {...item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
