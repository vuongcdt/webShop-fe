import { useRouter } from 'next/router';

function NavItem({ tabId, target, title, isActive = false }) {
    const router = useRouter();
    const onClickTab = () => {
        router.push(
            {
                pathname: '/user-dashboard',
                query: { tab: target.replace('#', '') },
            },
            null,
            {
                scroll: false,
            }
        );
    };
    return (
        <li className="nav-item mb-2">
            <button
                className={
                    isActive
                        ? 'nav-link font-light active'
                        : 'nav-link font-light'
                }
                id={tabId}
                data-bs-toggle="tab"
                data-bs-target={target}
                type="button"
                onClick={onClickTab}
            >
                <i className="fas fa-angle-right"></i>
                {title}
            </button>
        </li>
    );
}

export default NavItem;
