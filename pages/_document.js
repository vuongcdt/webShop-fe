import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&amp;display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body className="theme-color2 light ltr">
                <Main />

                <script src="/js/jquery-3.5.1.min.js"></script>

                <script src="/js/bootstrap/bootstrap.bundle.min.js"></script>

                <script src="/js/feather/feather.min.js"></script>

                <script src="/js/lazysizes.min.js"></script>

                <script src="/js/slick/slick.js"></script>
                <script src="/js/slick/slick-animation.min.js"></script>
                <script src="/js/slick/custom_slick.js"></script>

                <script src="/js/isotope.pkgd.min.js"></script>

                {/* <script src="/js/newsletter.js"></script> */}

                <script src="/js/ion.rangeSlider.min.js"></script>

                <script src="/js/bootstrap/bootstrap-notify.min.js"></script>

                <NextScript />

                <script src="/js/script.js"></script>
            </body>
        </Html>
    );
}
