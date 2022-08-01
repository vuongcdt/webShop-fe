import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import PageContentLoading from '../../components/Common/PageContentLoading';
import Custom404 from '../404';

// Replace with your Public API Key
builder.init(process.env.BUILDER_IO_API_KEY);

export async function getStaticProps({ params }) {
    // Fetch the builder content
    const page = await builder
        .get('page', {
            userAttributes: {
                urlPath: '/landings/' + (params?.page?.join('/') || ''),
            },
        })
        .toPromise();

    return {
        props: {
            page: page || null,
        },
        revalidate: 5,
    };
}

export async function getStaticPaths() {
    // Get a list of all pages in builder
    const pages = await builder.getAll('page', {
        // We only need the URL field
        fields: 'data.url',
        options: { noTargeting: true },
    });
    return {
        paths: pages.map((page) => `${page.data?.url}`),
        fallback: true,
    };
}

export default function Page({ page }) {
    const router = useRouter();
    const isPreviewing = useIsPreviewing();

    if (router.isFallback) {
        return <PageContentLoading />;
    }

    if (!page && !isPreviewing) {
        return <Custom404 />;
    }

    return (
        <>
            <Head>
                <title>{page?.data.title}</title>
            </Head>
            {/* Render the Builder page */}
            <BuilderComponent model="page" content={page} />
        </>
    );
}
