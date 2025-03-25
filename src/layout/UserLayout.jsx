import { Outlet, Link } from "react-router-dom";

const UserLayout = () => {
    return (
        <div className="container row mx-auto">
            <nav className="col-md-5  mt-3">
                <Link to="userhome" className="mr-4 d-block">userhome</Link>
                <Link to="/" className="mr-4 d-block">Home</Link>
            </nav>
            <main className="col-md-7">
                <Outlet />
            </main>
        </div>
    );
};

export default UserLayout;
