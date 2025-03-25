import React from 'react'
import { Link } from 'react-router-dom'

import CryptoJS from "crypto-js";

const TopHeader = () => {

    const userLoggedIn = localStorage.getItem("token") ? true : false

    const logout = () => {
        localStorage.removeItem("token")
        window.location.href = "/"
    }

    const gotoDashboard = () => {
        const secretKey = process.env.REACT_APP_SECRET_KEY;
        const bytes = CryptoJS.AES.decrypt(localStorage.getItem("token"), secretKey);
        const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        if (decrypted) {
            decrypted === "1" ? window.location.href = '/userdashboard' : window.location.href = '/dashboard'
        }
    }

    return (
        <div className="container-fluid bg-dark px-5 d-lg-block">
            <div className="row gx-0 container mx-auto">
                <div className="col-lg-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div
                        className="d-inline-flex align-items-center"
                        style={{ height: 45 }}
                    >
                        <small className="me-3 text-light">
                            অনলাইন সার্টিফিকেট সিস্টেম
                        </small>

                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                        <a href="/" className="text-light me-3">
                            <Link to="/register-citizen" className="text-light">
                                <small>
                                    <i className="fa fa-users me-2" />
                                    <small>ফ্রি নাগরিক একাউন্ট</small>
                                </small>
                            </Link>
                        </a>
                    </div>
                    <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                        <a href="/" className="text-light me-3">
                            <Link to="/register-employer" className="text-light">
                                <small>
                                    <i className="fa fa-user-secret me-2" />
                                    <small>প্রশাসনিক একাউন্ট খুলুন</small>
                                </small>
                            </Link>
                        </a>
                    </div>

                    {userLoggedIn &&
                        <div onClick={gotoDashboard} className="btn btn-primary ms-3 rounded-pill py-1 px-3 me-3">
                            Dashboard
                        </div>}


                    <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                        {
                            !userLoggedIn ?
                                <Link to="/login" className="btn btn-primary ms-3 rounded-pill py-1 px-3">
                                    <i className="fa fa-sign-in-alt me-2" />
                                    Login
                                </Link>
                                :
                                <button onClick={logout} className="btn btn-danger rounded-pill py-1 px-3">
                                    <i className="fa fa-sign-out-alt me-2" />
                                    Logout
                                </button>

                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader