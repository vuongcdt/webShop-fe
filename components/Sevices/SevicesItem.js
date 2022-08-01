import React from 'react';

export default function SevicesItem({ title, desc, icon }) {
    return (
        <div className="service-wrap">
            <div className="service-icon">
                <svg>
                    <use xlinkHref={icon} />
                </svg>
            </div>
            <div className="service-content">
                <h3 className="mb-2">{title}</h3>
                <span className="font-light">{desc}</span>
            </div>
        </div>
    );
}
