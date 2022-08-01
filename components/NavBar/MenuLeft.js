import Link from 'next/link';

function MenuLeft() {
    return (
        <div className="menu-left">
            <div className="brand-logo">
                <Link href="/">
                    <a>
                        <svg className="svg-icon">
                            <use
                                className="fill-color"
                                xlinkHref="/svg/icons.svg#logo"
                            ></use>
                        </svg>
                        <img
                            src="/images/logo.png"
                            className="img-fluid blur-up lazyload"
                            alt="logo"
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default MenuLeft;
