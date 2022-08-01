import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { fetchApi } from '../../../src/api/Api_vuong/fetchApi';

export const conventToCurrency = (price) =>
    Number(price).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
export const convertObjectToParams = (obj) =>
    Object.entries(obj)
        .map(([key, val]) => `${key}=${val}`)
        .join('&');

export const filter_meta_data = (meta_data, keyTotal, keyFirst, keySecond) => {
    let arrFilter = [];
    const totalItem = meta_data.filter(
        (item, index) => item.key === keyTotal
    )[0]?.value;
    for (let index = 0; index < totalItem; index++) {
        const valueFirst = meta_data.filter(
            (item) => item.key === `${keyTotal}_${index}_${keyFirst}`
        )[0]?.value;
        const valueSecond = meta_data.filter(
            (item) => item.key === `${keyTotal}_${index}_${keySecond}`
        )[0]?.value;
        arrFilter.push({ [keyFirst]: valueFirst, [keySecond]: valueSecond });
    }
    return arrFilter;
};

export const errorModal = (isError, error) => {
    if (isError) {
        Swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Close',
        });
    }
};

export const getPercent = (num, den) => {
    den = den === 0 ? (den = 1) : den;
    return ((num / den) * 100).toFixed(1) + '%';
};

export const reduceStringLength = (str = '', num = 30) => {
    str = str.trim();
    for (let length = str.length; num < length; num++) {
        if (str[num] === ' ') return str.slice(0, num) + '...';
    }
    return str;
};

export const configSearch = {
    appId: 'GJJ9P4ABOH',
    apikey: '84439436976189584f7af70550bdf206',
    indexName: 'products',
};

export const getListCompare = (compareProduct) => [
    ...Object.values(compareProduct),
    ...Array(4 - Object.values(compareProduct).length).fill({}),
];

export const updateDataAlgolia = async (index) => {
    const res = await fetchApi.get('/products?per_page=100');
    console.log(`  ~ res.data`, res.data);
    const objects = res.data.map((item, index) => {
        let {
            id,
            price,
            slug,
            name,
            categories,
            attributes,
            regular_price,
            average_rating,
            on_sale,
            featured,
            acf: { back_image, front_image },
            short_description,
            date_created,
        } = item;

        regular_price = Number(regular_price);
        average_rating = Number(average_rating).toFixed(2);
        price = Number(price);
        const objectID = id;
        const categories_product = categories.map(
            (categorie) => categorie.name
        );
        const discount = 1 - regular_price / price;
        const attributes_color = attributes[0].options;
        const attributes_size = attributes[1].options;
        const attributes_brand = attributes[2].options;
        const material = name[0];

        return {
            id,
            price,
            slug,
            name,
            categories,
            regular_price,
            average_rating,
            on_sale,
            featured,
            acf: { back_image, front_image },
            short_description,
            objectID,
            categories_product,
            discount,
            attributes,
            attributes_color,
            attributes_size,
            attributes_brand,
            date: date_created,
            material,
        };
    });

    console.log(`  ~ objects`, objects);

    // try {
    //    index.replaceAllObjects(objects).then(({ objectIDs }) => {
    //       console.log(objectIDs);
    //    });
    // } catch (error) {
    //    console.log(`  ~ error`, error.respose);
    // }
};

export const functionJquerySearchFull = () => {
    $('.search-box').on('click', function () {
        $('.search-full').addClass('open');
        $('.search-type').focus();
        $('.search-type')[0].value = '';
    });
    // $(".search-type").blur((function(){
    //    $(".search-full").removeClass("open");
    // }))
    // open searchbox
    $('.search-type').on('click', function () {
        $(this).parents('.search-full').addClass('show');
    });

    // close seach
    $('.close-search').on('click', function () {
        $('.search-full').removeClass('open');
    });

    feather.replace();
};

export const functionJquery = () => {
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
};

export const functionJqueryProductCategory = () => {
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

    $('.filter-btn').click(function () {
        $('.bg-overlay, .category-option').addClass('show');
    });
    $('.button-close, .bg-overlay').click(function () {
        $('.bg-overlay, .category-option').removeClass('show');
    });

    var contentwidth = jQuery(window).width();
    if (contentwidth < '991') {
        $('.hide-btn').click(function () {
            $('.bg-overlay, .category-option').addClass('show');
        });
        $('.button-close, .bg-overlay').click(function () {
            $('.bg-overlay, .category-option').removeClass('show');
        });
    }

    $('.hide-btn').click(function () {
        var $this = $(this);
        $this.toggleClass('hide-btn');
        if ($this.hasClass('hide-btn')) {
            $this.text('Hide Filter');
        } else {
            $this.text('Show Filter');
        }
    });

    if ($(window).width() > '992') {
        $('.hide-btn').on('click', function (e) {
            $('.category-side').toggleClass('show');
            $('.category-product').toggleClass('col-lg-12');
            $('.category-product').toggleClass('col-lg-9');
        });
    }

    $('.onclick-title h6').click(function () {
        $(this)
            .parent('.onclick-title')
            .toggleClass('show')
            .siblings()
            .removeClass('show');
    });

    $('.filter-show-button a').click(function () {
        $('.bg-overlay, .top-filter-section').addClass('show');
    });
    $('.back-btn, .bg-overlay').click(function () {
        $('.bg-overlay, .top-filter-section').removeClass('show');
    });

    $(document).ready(function () {
        $('.save-details').click(function () {
            $('.save-details').removeClass('show');
            $(this).addClass('show');
        });
    });

    $(document).ready(function () {
        $('.category-box').click(function () {
            if (!$(this).hasClass('active')) {
                $('.category-box.active').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    $(document).ready(function () {
        $('.category-color li a').click(function () {
            if (!$(this).hasClass('active')) {
                $('i.active').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    $('.grid-options .grid-btn').on('click', function () {
        $('.product-list-section').removeClass('list-style');
    });

    $('.grid-options .list-btn').on('click', function () {
        $('.product-list-section').addClass('list-style');
    });

    $('.two-grid').on('click', function (e) {
        $('.product-list-section')
            .removeClass(
                'row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style'
            )
            .addClass('row-cols-2');
    });
    $('.three-grid').on('click', function (e) {
        $('.product-list-section')
            .removeClass(
                'row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style'
            )
            .addClass('row-cols-md-3 row-cols-2');
    });
    $('.grid-btn').on('click', function (e) {
        $('.product-list-section')
            .removeClass(
                'row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style'
            )
            .addClass('row-cols-lg-4 row-cols-md-3 row-cols-2');
    });
    $('.five-grid').on('click', function (e) {
        $('.product-list-section')
            .removeClass('list-style')
            .addClass('row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2');
    });
    var contentwidth = $(window).width();
    if (contentwidth < '1199') {
        $('.grid-options .grid-btn').addClass('active');
    }
    if (contentwidth < '991') {
        $('.grid-options .three-grid').addClass('active');
    }
    if (contentwidth < '767') {
        $('.grid-options .two-grid').addClass('active');
    }

    $('.grid-options ul li').click(function () {
        $('.grid-options li.active').removeClass('active');
        $(this).addClass('active');
    });
};
