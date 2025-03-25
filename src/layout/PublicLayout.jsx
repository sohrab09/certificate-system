import { Outlet, Link } from "react-router-dom";

const PublicLayout = () => {
    return (
        <div>
            <nav className="bg-blue-600 text-white p-4">
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/about" className="mr-4">About</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>

            <main className="bg-green-500">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis praesentium fugiat soluta id nesciunt iusto placeat qui autem nemo, sapiente est odit eius quo sunt inventore ipsum fuga excepturi maiores unde aspernatur consequatur. Provident repellendus quibusdam ipsum quis voluptatibus. Ut eius ullam velit ipsam aliquam molestias iure libero voluptas, accusantium consectetur dolor doloribus laudantium neque repellendus. Aliquam quisquam tenetur ipsa, minus ullam dolorum? Cum autem possimus sequi quos, suscipit illo dignissimos voluptas natus aspernatur iste. Dolores unde libero ducimus nisi repellendus! Deserunt, enim! Eos atque corrupti magni assumenda deleniti minus ratione fuga accusantium tenetur nemo. Ab vitae rerum distinctio id veniam eaque praesentium temporibus, a doloremque, porro enim minus eius, consequuntur aut earum tenetur! Autem non, ducimus quidem numquam beatae, quam praesentium ullam amet quae veritatis dolorum ab debitis omnis?</p>
            </main>
            <Outlet />
        </div>
    );
};

export default PublicLayout;
