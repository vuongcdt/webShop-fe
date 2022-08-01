import { useEffect } from 'react';
import NavItem from './Tabs/NavItem';
import { useRouter } from 'next/router';

function NavLeft() {
    const router = useRouter();
    const { tab } = router.query;

    useEffect(() => {
        if (tab) {
            let triggerTabList = [].slice.call(
                document.querySelectorAll('#myTab button')
            );

            triggerTabList.forEach(function (triggerEl) {
                let tabTrigger = new bootstrap.Tab(triggerEl);
                let tabTarget = triggerEl
                    .getAttribute('data-bs-target')
                    .replace('#', '');

                if (tabTarget === tab) {
                    tabTrigger.show();
                }
            });
        }

        $('.filter-btn').click(function () {
            $('.bg-overlay, .category-option').addClass('show');
        });
        $('.button-close, .bg-overlay').click(function () {
            $('.bg-overlay, .category-option').removeClass('show');
        });
    }, [tab]);

    return (
        <div className="col-lg-3">
            <ul
                className="nav nav-tabs custome-nav-tabs flex-column category-option"
                id="myTab"
            >
                <NavItem
                    tabId={'tab-dash'}
                    target={'#dash'}
                    title={'Dashboard'}
                    isActive={true}
                />

                <NavItem
                    tabId={'tab-order'}
                    target={'#order'}
                    title={'Orders'}
                />

                <NavItem
                    tabId={'tab-wishlist'}
                    target={'#wishlist'}
                    title={'Wishlist'}
                />

                <NavItem
                    tabId={'tab-save'}
                    target={'#save'}
                    title={'Saved Address'}
                />

                {/* <NavItem tabId={'tab-pay'} target={'#pay'} title={'Payment'} /> */}

                <NavItem
                    tabId={'tab-profile'}
                    target={'#profile'}
                    title={'Profile'}
                />

                {/* <NavItem
                    tabId={'tab-security'}
                    target={'#security'}
                    title={'Security'}
                /> */}
            </ul>
        </div>
    );
}

export default NavLeft;
