import HomePage from "../pages/AuthPages/UserDashboard/HomePage"
import AdminHome from "../pages/AuthPages/AdminDashboard/AdminHome"


export const authProtectedUserRoutes = [

    { path: "userhome", component: <HomePage /> },
    { path: "adminHome", component: <AdminHome /> },

]