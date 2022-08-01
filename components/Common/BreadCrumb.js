import Link from 'next/link';
import { Fragment } from 'react';

function Breadcrumb({ title, bredcrumbList = [] }) {
    return (
        <section className="breadcrumb-section section-b-space">
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>{title}</h3>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href={'/'}>
                                        <a>
                                            <i className="fas fa-home"></i>{' '}
                                            {bredcrumbList.length > 0 && '/'}
                                        </a>
                                    </Link>
                                </li>

                                {bredcrumbList.length > 0 &&
                                    bredcrumbList.map((bredcrumb, index) => (
                                        <Fragment key={index}>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                <Link href={bredcrumb.href}>
                                                    <a>{bredcrumb.title} /</a>
                                                </Link>
                                            </li>
                                        </Fragment>
                                    ))}

                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                     {title}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Breadcrumb;
