import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {

    return (
        <div className="container row mx-auto">
            <nav className="col-md-5  mt-3">
                <Link to="marridStatus" className="mr-4 d-block">Marid Sattus</Link>
                <Link to="adminHome" className="mr-4 d-block">AdminHome</Link>
                <Link to="/" className="mr-4 d-block">Home</Link>
            </nav>
            <main className="col-md-7">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
