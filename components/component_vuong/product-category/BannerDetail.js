import React from 'react';

function BannerDetail({ dataCategory }) {
    const { name, description, acf } = dataCategory[0];
    const { banner_image, title_banner, desc_banner } = acf;
    return (
        <div className="banner-deatils">
            <div className="banner-image">
                <img
                    src={
                        banner_image
                            ? banner_image
                            : '/images/fashion/banner.jpg'
                    }
                    className="img-fluid bg-img blur-up lazyload"
                    alt={name}
                />
                <div className="banner-content">
                    <div>
                        <h3>{title_banner}</h3>
                        <p>{desc_banner}</p>
                    </div>
                </div>
            </div>
            <div className="banner-contain mt-3 mb-5">
                <p className="font-light">{description}</p>
            </div>
        </div>
    );
}

export default BannerDetail;
