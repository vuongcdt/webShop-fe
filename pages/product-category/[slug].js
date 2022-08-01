import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SubscribeBox from '../../components/Common/SubscribeBox';
import Sidebar from '../../components/ProductCategory/Sidebar';
import BannerDetail from '../../components/component_vuong/product-category/BannerDetail';
import { functionJqueryProductCategory } from '../../components/component_vuong/Common';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SortSearchProduct from '../../components/component_vuong/searchProduct/SortSearchProduct';
import CustomHitSearchProduct from '../../components/component_vuong/searchProduct/CustomHitSearchProduct';
import { useRefinementList } from 'react-instantsearch-hooks-web';
import { useProductCategories } from '../../reactQueryHook';
import Skeleton from 'react-loading-skeleton';

function ProductCategory(props) {
    const {
        query: { slug },
    } = useRouter();
    const { refine, canRefine } = useRefinementList({
        attribute: 'categories.name',
    });

    useEffect(() => {
        functionJqueryProductCategory();
    }, []);

    useEffect(() => {
        slug && refine(slug);
    }, [slug]);

    const { data, isLoading, isError, error, isFetching } =
        useProductCategories({ slug });

    if (!canRefine || !slug) return;

    console.log(data);

    return (
        <>
            <Breadcrumb
                title={data && data[0].name}
                bredcrumbList={[
                    {
                        title: 'Product category',
                        href: '/product-category',
                    },
                ]}
            />

            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <Sidebar {...props} />
                        </div>
                        <div className="col-lg-9 col-12 ratio_30">
                            {isLoading || isLoading || isFetching ? (
                                <Skeleton count={6} className="mb-3" />
                            ) : (
                                <BannerDetail dataCategory={data} />
                            )}
                            <SortSearchProduct itemPerPage={12} />
                            <CustomHitSearchProduct />
                        </div>
                    </div>
                </div>
            </section>

            <SubscribeBox />
        </>
    );
}

export default ProductCategory;
