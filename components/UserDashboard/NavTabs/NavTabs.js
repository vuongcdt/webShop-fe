import NavLeft from './NavLeft';
import NavRight from './NavRight';

function NavTabs() {
    return (
        <section className="section-b-space">
            <div className="container">
                <div className="row">
                    <NavLeft />
                    <NavRight />
                </div>
            </div>
        </section>
    );
}

export default NavTabs;
