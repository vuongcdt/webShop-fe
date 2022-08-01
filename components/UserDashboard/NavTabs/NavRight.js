import { useSelector } from 'react-redux';
import Dash from './Tabs/Dash';
import Order from './Tabs/Order';
import WishList from './Tabs/WishList';
import Save from './Tabs/Save';
import Pay from './Tabs/Pay';
import Profile from './Tabs/Profile';
import Security from './Tabs/Security';

function NavRight() {
    
    return (
        <div className="col-lg-9">
            <div className="filter-button dash-filter dashboard">
                <button className="btn btn-solid-default btn-sm fw-bold filter-btn">
                    Show Menu
                </button>
            </div>

            <div className="tab-content" id="myTabContent">
                <Dash />

                <Order />

                <WishList />

                <Save />

                {/* <Pay /> */}

                <Profile />

                {/* <Security /> */}
            </div>
        </div>
    );
}

export default NavRight;
