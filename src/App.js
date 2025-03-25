import React, { useEffect } from 'react'
import CryptoJS from "crypto-js";
import './App.css'; // Import the CSS file

import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { publicRoutes } from './routes/publicRoute'
import { authProtectedUserRoutes } from './routes/userRoute'
import { authProtectedAdminRoutes } from './routes/adminRoute'

import AdminLayout from './layout/AdminLayout';
import UserLayout from './layout/UserLayout';
import AuthMiddleware from './routes/route';

function App() {

  // const [role, setRole] = React.useState("1")


  // useEffect(() => {
  //   const secretKey = process.env.REACT_APP_SECRET_KEY;

  //   if (localStorage.getItem("token")) {
  //     const bytes = CryptoJS.AES.decrypt(localStorage.getItem("token"), secretKey);
  //     const decryptedToken = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  //     if (decryptedToken) {
  //       setRole(decryptedToken)
  //     }
  //   }
  // }, [])


  return (
    <div className="app-container"> {/* Add this container */}
      <Header />
      <div className="content-wrap"> {/* Add this container */}
        <Routes>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={route.component}
              key={idx}
              exact={true}
            />
          ))}


          <Route>
            <Route path="userdashboard" element={
              <AuthMiddleware allowedRoles={['1']}>
                <UserLayout />
              </AuthMiddleware>
            }>
              {authProtectedUserRoutes.map((route, idx) => (
                <Route path={route.path} element={route.component} key={idx} />
              ))}
            </Route>
          </Route>



          {/* {authProtectedUserRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AuthMiddleware allowedRoles={['1']}>
                  {route.component}
                </AuthMiddleware>
              }
              key={idx}
              exact={true}
            />
          ))} */}

          <Route>
            <Route path="dashboard"
              element={
                <AuthMiddleware allowedRoles={['2']}>
                  <AdminLayout />
                </AuthMiddleware>
              }>
              {authProtectedAdminRoutes.map((route, idx) => (
                <Route path={route.path} element={route.component} key={idx} />
              ))}
            </Route>
          </Route>

          {/* {authProtectedAdminRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AuthMiddleware allowedRoles={['2']}>
                  {route.component}
                </AuthMiddleware>
              }
              key={idx}
              exact={true}
            />
          ))} */}

        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App