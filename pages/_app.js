import store, { persistor } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import NextNProgress from 'nextjs-progressbar';

import Layout from '../components/Layout';
import { Configure, InstantSearch } from 'react-instantsearch-hooks-web';
import {
    configSearch,
    updateDataAlgolia,
} from '../components/component_vuong/Common';
import algoliasearch from 'algoliasearch';
import { useRouter } from 'next/router';
import BottomCompare from '../components/component_vuong/compare/BottomCompare';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

import '../styles/vendors/bootstrap.css';
import '../styles/vendors/font-awesome.css';
import '../styles/vendors/feather-icon.css';
import '../styles/vendors/animate.css';
import '../styles/vendors/ion.rangeSlider.min.css';
import '../styles/vendors/slick/slick.css';
import '../styles/vendors/slick/slick-theme.css';
import '../styles/globals.css';
import '../styles/compare.css';

import CompareModal from '../components/component_vuong/compare/CompareModal';
import { useEffect } from 'react';
import ChatSupportPopup from '../components/Common/ChatSupportPopup';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const { appId, apikey, indexName } = configSearch;
const searchClient = algoliasearch(appId, apikey);
const index = searchClient.initIndex(indexName);

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <NextNProgress
                        color="#dc3545"
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={4}
                        showOnShallow={true}
                    />
                    <InstantSearch
                        searchClient={searchClient}
                        indexName={indexName}
                        routing={router.pathname !== '/compare'}
                    >
                        <Layout>
                            <SkeletonTheme
                                baseColor="#eaeaea"
                                highlightColor="#fff"
                            >
                                <Component {...pageProps} />
                            </SkeletonTheme>
                        </Layout>
                        <BottomCompare />
                    </InstantSearch>
                    <InstantSearch
                        searchClient={searchClient}
                        indexName={indexName}
                    >
                        <CompareModal />
                    </InstantSearch>
                    <ChatSupportPopup />
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
