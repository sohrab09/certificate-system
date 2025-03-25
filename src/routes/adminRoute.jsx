
import { Navigate } from "react-router-dom"
import AdminHome from "../pages/AuthPages/AdminDashboard/AdminHome"
import MarriedStatus from "../pages/AuthPages/AdminDashboard/MarriedStatus"

export const authProtectedAdminRoutes = [

    { path: "adminHome", component: <AdminHome /> },
    { path: "marridStatus", component: <MarriedStatus /> },

    // {
    //     path: "/",
    //     exact: true,
    //     component: < Navigate to="/" />,
    // },
]