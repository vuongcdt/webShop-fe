import { useEffect } from 'react';

function MostPopular() {
    useEffect(() => {
        let slick=$('.product-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        return () => {
            slick.slick("unslick");
         };
    }, []);

    return (
        <div className="most-popular">
            <div className="title title-2 text-lg-start">
                <h3>Most Popular</h3>
            </div>

            <div className="product-slider round-arrow1">
                <div>
                    <div className="row g-3">
                        <div className="col-12">
                            <div className="product-image">
                                <a href="undefined">
                                    <img
                                        src="/images/fashion/product/front/1.jpg"
                                        className="blur-up lazyload"
                                        alt=""
                                    />
                                </a>
                                <div className="product-details">
                                    <h6 className="font-light">Regular Fit</h6>
                                    <a href="undefined" className="">
                                        <h3>Slim Fit Plastic Coat</h3>
                                    </a>
                                    <h4 className="font-light mt-1">
                                        <del>$49.00</del>{' '}
                                        <span className="theme-color">
                                            $35.50
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="product-image">
                                <a href="undefined">
                                    <img
                                        src="/images/fashion/product/front/2.jpg"
                                        className="blur-up lazyload"
                                        alt=""
                                    />
                                </a>
                                <div className="product-details">
                                    <h6 className="font-light">Regular Fit</h6>
                                    <a href="undefined" className="">
                                        <h3>Slim Fit Plastic Coat</h3>
                                    </a>
                                    <h4 className="font-light mt-1">
                                        <del>$49.00</del>{' '}
                                        <span className="theme-color">
                                            $35.50
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="product-image">
                                <a href="undefined">
                                    <img
                                        src="/images/fashion/product/front/3.jpg"
                                        className="blur-up lazyload"
                                        alt=""
                                    />
                                </a>
                                <div className="product-details">
                                    <h6 className="font-light">Regular Fit</h6>
                                    <a href="undefined" className="">
                                        <h3>Slim Fit Plastic Coat</h3>
                                    </a>
                                    <h4 className="font-light mt-1">
                                        <del>$49.00</del>{' '}
                                        <span className="theme-color">
                                            $35.50
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row g-3">
                        <div className="col-12">
                            <div className="product-image">
                                <a href="undefined">
                                    <img
                                        src="/images/fashion/product/front/6.jpg"
                                        className="blur-up lazyload"
                                        alt=""
                                    />
                                </a>
                                <div className="product-details">
                                    <h6 className="font-light">Regular Fit</h6>
                                    <a href="undefined" className="">
                                        <h3>Slim Fit Plastic Coat</h3>
                                    </a>
                                    <h4 className="font-light mt-1">
                                        <del>$49.00</del>{' '}
                                        <span className="theme-color">
                                            $35.50
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="product-image">
                                <a href="undefined">
                                    <img
                                        src="/images/fashion/product/front/7.jpg"
                                        className="blur-up lazyload"
                                        alt=""
                                    />
                                </a>
                                <div className="product-details">
                                    <h6 className="font-light">Regular Fit</h6>
                                    <a href="undefined" className="">
                                        <h3>Slim Fit Plastic Coat</h3>
                                    </a>
                                    <h4 className="font-light mt-1">
                                        <del>$49.00</del>{' '}
                                        <span className="theme-color">
                                            $35.50
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="product-image">
                                <a href="undefined">
                                    <img
                                        src="/images/fashion/product/front/8.jpg"
                                        className="blur-up lazyload"
                                        alt=""
                                    />
                                </a>
                                <div className="product-details">
                                    <h6 className="font-light">Regular Fit</h6>
                                    <a href="undefined" className="">
                                        <h3>Slim Fit Plastic Coat</h3>
                                    </a>
                                    <h4 className="font-light mt-1">
                                        <del>$49.00</del>{' '}
                                        <span className="theme-color">
                                            $35.50
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MostPopular;
