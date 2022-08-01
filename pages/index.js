import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BannerProductCategory from '../components/Banners/BannerProductCategory';
import BannerProductCategoryGrid from '../components/Banners/BannerProductCategoryGrid';
import BannerTimer from '../components/Banners/BannerTimer';
import NewsletterModal from '../components/Footers/NewsletterModal';
import CategorySlider from '../components/Home/CategorySlider';
import InstagramSlider from '../components/Home/InstagramSlider';
import ProductGrid from '../components/Home/ProductGrid';
import ProductSlider from '../components/Home/ProductSlider';
import Services from '../components/Home/Services';
import Slider from '../components/Home/Slider';
import wooApi from '../src/api/woocommerce/wooApi';
import customApi from '../src/api/wordpress/customApi';
import { setWebData } from '../store/webData/webDataSlice';
import axios from 'axios';

export async function getStaticProps() {
    const res = await customApi.GetHomeData();
    const { acf } = res;
    let listProduct = [];
    acf.home_slider.forEach((item, index) => {
        let type = item.type;
        listProduct.push(item[type + '_banner'].product);
    });
    let productInHome = [
        ...new Set([
            ...listProduct,
            acf.product_sale,
            ...acf.product_instagram,
            ...acf.product_slider,
            ...acf.product_category_grid,
        ]),
    ];

    let resProduct = await wooApi.getProducts({
        include: productInHome.join(','),
        per_page: 99,
    });

    let resCategory = await wooApi.getCategories({
        include: acf.list_category_slider.join(','),
        per_page: 99,
    });

    let dataHome = {
        slider: acf.home_slider.map((item, index) => {
            return {
                type: item.type,
                slide_data: item[item.type + '_banner'],
                product_data: resProduct.data
                    .filter(
                        (product, index) =>
                            product.id === item[item.type + '_banner'].product
                    )
                    .map((item, index) => ({
                        name: item.name,
                        average_rating: item.average_rating,
                        on_sale: item.on_sale,
                        price: item.price,
                        regular_price: item.regular_price,
                        short_description: item.short_description,
                        image: item.images[0].src,
                        categories: item.categories,
                        tags: item.tags.map((items, index) => items.name),
                        images: item.images.map((item, index) => item.src),
                        attributes: item.attributes,
                        date_created: item.date_created,
                        stock_status: item.stock_status,
                        slug: item.slug,
                        pa_brand: item.attributes
                            .filter((item, index) => item.name === 'Brand')
                            .map((item, index) => item.options)[0],
                        pa_color: item.attributes
                            .filter((item, index) => item.name === 'Brand')
                            .map((item, index) => item.options)[0],
                        pa_size: item.attributes
                            .filter((item, index) => item.name === 'Brand')
                            .map((item, index) => item.options)[0],
                    }))[0],
            };
        }),
        collection: acf.collection_banner.map((item, index) => ({
            ...item,
            link_product_category: {
                slug: item.link_product_category.slug,
                name: item.link_product_category.name,
            },
        })),
        productSlider: {
            title: acf.product_slider_title,
            subtitle: acf.product_slider_subtitle,
            products: resProduct.data
                .filter((product, index) =>
                    acf.product_slider.includes(product.id)
                )
                .map((item, index) => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    slug: item.slug,
                    regular_price: item.regular_price,
                    average_rating: item.average_rating,
                    on_sale: item.on_sale,
                    featured: item.featured,
                    acf: item.acf,
                    short_description: item.short_description,
                    categories: item.categories,
                    images: item.images.map((item, index) => item.src),
                    tags: item.tags.map((items, index) => items.name),
                    attributes: item.attributes,
                    date_created: item.date_created,
                    stock_status: item.stock_status,
                    pa_brand: item.attributes
                        .filter((item, index) => item.name === 'Brand')
                        .map((item, index) => item.options)[0],
                    pa_color: item.attributes
                        .filter((item, index) => item.name === 'Color')
                        .map((item, index) => item.options)[0],
                    pa_size: item.attributes
                        .filter((item, index) => item.name === 'Size')
                        .map((item, index) => item.options)[0],
                })),
        },
        category_slider: {
            title: acf.title_category_slider,
            subtitle: acf.subtitle_category_slider,
            list_category: resCategory.data.map((item, index) => ({
                slug: item.slug,
                acf: {
                    thumbnail_home: item.acf.thumbnail_home,
                },
                name: item.name,
            })),
        },
        category_grid: {
            title: acf.title_category_grid,
            subtitle: acf.subtitle_category_grid,
            list: acf.list_category_grid.map((item, index) => ({
                ...item,
                link: {
                    name: item.link.name,
                    slug: item.link.slug,
                },
            })),
        },
        productGrid: {
            title: acf.product_grid_title,
            subtitle: acf.product_grid_subtitle,
            products: resProduct.data
                .filter((product, index) =>
                    acf.product_category_grid.includes(product.id)
                )
                .map((item, index) => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    slug: item.slug,
                    regular_price: item.regular_price,
                    average_rating: item.average_rating,
                    on_sale: item.on_sale,
                    featured: item.featured,
                    acf: item.acf,
                    short_description: item.short_description,
                    categories: item.categories,
                    tags: item.tags.map((items, index) => items.name),
                    attributes: item.attributes,
                    date_created: item.date_created,
                    images: item.images.map((item, index) => item.src),
                    stock_status: item.stock_status,
                    pa_brand: item.attributes
                        .filter((item, index) => item.name === 'Brand')
                        .map((item, index) => item.options)[0],
                    pa_color: item.attributes
                        .filter((item, index) => item.name === 'Color')
                        .map((item, index) => item.options)[0],
                    pa_size: item.attributes
                        .filter((item, index) => item.name === 'Size')
                        .map((item, index) => item.options)[0],
                })),
        },
        sale: {
            title: acf.title_product_sale,
            subtitle: acf.sub_title_product_sale,
            time_end: acf.time_end_countdown,
            product_title: acf.product_title,
            product_subtitle: acf.product_sub_title,
            product_data: resProduct.data
                .filter((product, index) => product.id === acf.product_sale)
                .map((item, index) => ({
                    name: item.name,
                    slug: item.slug,
                }))[0],
            background: acf.background_sale,
        },
        instagram: {
            title: acf.title_instagram,
            subtitle: acf.subtitle_instagram,
            product: resProduct.data
                .filter((product, index) =>
                    acf.product_instagram.includes(product.id)
                )
                .map((item, index) => ({
                    name: item.name,
                    slug: item.slug,
                    image: item.images[0].src,
                })),
        },
        footer: {
            phone: acf.phone_footer,
            address: acf.address_footer,
            email: acf.email_footer,
            coppyright: acf.coppyright_footer,
            category: acf.category_footer,
        },
    };

    return {
        props: {
            dataHome,
        },
    };
}

export default function Home({ dataHome }) {
    // console.log(dataHome);

    const dispatch = useDispatch();

    useEffect(() => {
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

        dispatch(
            setWebData({
                footer: dataHome.footer,
            })
        );
    }, []);

    return (
        <Fragment>
            <Slider dataSliser={dataHome.slider} />
            <BannerProductCategory dataBanner={dataHome.collection} />
            <ProductSlider dataProduct={dataHome.productSlider} />
            <CategorySlider dataCategorySlider={dataHome.category_slider} />
            <BannerProductCategoryGrid
                dataBannerProduct={dataHome.category_grid}
            />
            <ProductGrid dataProduct={dataHome.productGrid} />
            <BannerTimer dataTimer={dataHome.sale} />
            <InstagramSlider dataProduct={dataHome.instagram} />
            <Services />
        </Fragment>
    );
}
