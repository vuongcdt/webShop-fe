import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import NavTabs from '../../components/UserDashboard/NavTabs/NavTabs';
import SubscribeBox from '../../components/Common/SubscribeBox';
import Breadcrumb from '../../components/Common/BreadCrumb';

function UserDashboard() {
    return (
        <Fragment>
            <Head>
                <title>User Dashboard</title>
            </Head>
            <Breadcrumb title={'User Dashboard'}></Breadcrumb>
            <NavTabs />
            <SubscribeBox />
        </Fragment>
    );
}

export default UserDashboard;
