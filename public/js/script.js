/*-----------------------------------------------------------------------------------

 Template Name:Voxo
 Template URI: themes.pixelstrap.com/Voxo
 Description: This is Ecommerce website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- */
// 01.Tap to top js
// 02.Image to background js
// 03.menu js
// 04.search box function
// 05.color select function
// 06.size select function
// 07.modal function
// 08.add to cart
// 09.add to wishlist
// 10.category menu
// 11.Footer function
// 12.cart dunction
// 13.log in functions
// 14.product page quantity counter
// 15.other js
// 16.Recently puchase modal
// 17.active ul js
// 18.cookie bar js
// 19.hide header on scroll down js
// 20.shop list-grid js
// 21.Shop List-grid js
// 22.Mouseup functions
// 23.Feather js
// 24.header Dropdown js

(function ($) {
    'use strict';

    /*=====================
      1. Tap To Top Js
      ==========================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.tap-to-top').addClass('show');
        } else {
            $('.tap-to-top').removeClass('show');
        }
    });

    $('.tap-to-top').on('click', function () {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            600
        );
        return false;
    });
    /*=====================
      2. Image to background js
      ==========================*/
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

    /*=====================
       4. search box function
       ==========================*/

    // ------------ demo 6 ------------
    $('.search-box').on('click', function () {
        $('.search-box1').addClass('open');
    });
    $(window).on('load resize', function () {
        // open searchbox
        $('.search-type').on('click', function () {
            $(this).parents('.search-box1').addClass('show');
        });

        // close seach
        $('.close-search').on('click', function () {
            $('.search-box1').removeClass('open');
        });
    });
    // ------------ demo 6 ------------

    /*=====================
      5. color select function
      ==========================*/
    $('.color-variant li').on('click', function () {
        $(this).toggleClass('selected').siblings('li').removeClass('selected');
    });

    /*=====================
      6. size select function
      ==========================*/
    $('.size-detail ul li').on('click', function () {
        $(this).toggleClass('selected').siblings('li').removeClass('selected');
    });

    /*=====================
       7. modal function
       ==========================*/

    /*=====================
       8. Add to cart
       ==========================*/
    $('.product-box .cart-wrap li .addtocart-btn').on('click', function () {
        $.notify(
            {
                icon: 'fa fa-check',
                title: 'Success!',
                message: 'Item Successfully added to your cart',
            },
            {
                element: 'body',
                position: null,
                type: 'success',
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: true,
                placement: {
                    from: 'top',
                    align: 'right',
                },
                offset: 20,
                spacing: 10,
                z_index: 1031,
                delay: 5000,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp',
                },
                icon_type: 'class',
                template:
                    '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-info progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>',
            }
        );
    });

    /*=====================
      9. Add to wishlist
      ==========================*/
    $('.product-box a.wishlist').on('click', function () {
        $.notify(
            {
                icon: 'fa fa-check',
                title: 'Success!',
                message: 'Item Successfully added in wishlist',
            },
            {
                element: 'body',
                position: null,
                type: 'info',
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: true,
                placement: {
                    from: 'top',
                    align: 'right',
                },
                offset: 20,
                spacing: 10,
                z_index: 1031,
                delay: 5000,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp',
                },
                icon_type: 'class',
                template:
                    '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-info progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>',
            }
        );
    });

    /*=====================
       11. Footer function
       ==========================*/

    /*=====================
       12. cart function
       ==========================*/
    // $(".cart-dropdown .cart-media, .cart-dropdown > button").on("click", function () {
    //     $(".cart-dropdown").addClass("show");
    //     $("body").addClass("o-hidden");
    // });

    // $(".back-cart").on("click", function () {
    //     $(".cart-dropdown").removeClass("show");
    //     $("body").removeClass("o-hidden");
    // });

    /*=====================
      14. Product page Quantity Counter
     ==========================*/
    $('.qty-box .quantity-right-plus').on('click', function () {
        var $qty = $('.qty-box .input-number');
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });

    $('.qty-box .quantity-left-minus').on('click', function () {
        var $qty = $('.qty-box .input-number');
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal) && currentVal > 1) {
            $qty.val(currentVal - 1);
        }
    });

    /*=====================
      15. Other Js
     ==========================*/
    $('.size-box ul li').on('click', function (e) {
        $('.size-box ul li').removeClass('active');
        $('#selectSize').removeClass('cartMove');
        $(this).addClass('active');
        $(this).parent().addClass('selected');
    });

    $('#cartEffect').on('click', function (e) {
        if ($('#selectSize .size-box ul').hasClass('selected')) {
            $('#cartEffect').text('Added to bag ');
            $('.added-notification').addClass('show');
            setTimeout(function () {
                $('.added-notification').removeClass('show');
            }, 5000);
        } else {
            $('#selectSize').addClass('cartMove');
        }
    });

    /*=====================
     16. Recently puchase modal
     ==========================*/
    // setInterval(function () {
    //     $(".recently-purchase").toggleClass("show");
    // }, 20000);

    $('.recently-purchase .close-popup').on('click', function () {
        $('.recently-purchase').removeClass('show');
    });

    /*=====================
    17. active ul js
     ==========================*/
    $('.image-section li').on('click', function () {
        $('.image-section li').removeClass('active');
        $(this).addClass('active');
    });

    /*=====================
      18. Coockie js
     ==========================*/
    $('.cookie-bar-section #button').on('click', function () {
        $('.cookie-bar-section').toggleClass('hide');
    });
})(jQuery);

/*=====================
    21. Shop List-grid js
 ==========================*/

/*=====================
    22. Mouseup functions
 ==========================*/
$(document).mouseup(function (e) {
    // searchbox
    var searchbar = $('.search-full');
    if (!searchbar.is(e.target) && searchbar.has(e.target).length === 0) {
        $('.search-full').removeClass('show');
    }

    // menu sidebar
    var navMenu = $('.nav-menu');
    if (!navMenu.is(e.target) && navMenu.has(e.target).length === 0) {
        $('.nav-menu').css('right', '-410px');
        $('body').removeClass('o-hidden');
    }

    // category menu
    var categoryMenu = $('.category-dropdown');
    if (!categoryMenu.is(e.target) && categoryMenu.has(e.target).length === 0) {
        $('.category-dropdown').removeClass('open');
        $('body').removeClass('o-hidden');
    }

    // category menu
    // var categoryMenu = $(".cart-dropdown");
    // if (!categoryMenu.is(e.target) && categoryMenu.has(e.target).length === 0) {
    //     $(".cart-dropdown").removeClass("show");
    //     $("body").removeClass("o-hidden");
    // }

    // top filter
    var topFilter = $('.top-filter-section .onclick-title');
    if (!topFilter.is(e.target) && topFilter.has(e.target).length === 0) {
        $('.top-filter-section .onclick-title').removeClass('show');
    }
});

/*=====================
    23. Feather js
 ==========================*/
feather.replace();

/*=====================
    24. header Dropdown js
 ==========================*/
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this)
        .parents('.dropdown')
        .find('input')
        .attr('value', $(this).attr('id'));
});
