import React from 'react'
import { Link } from 'react-router-dom'
import serviceItems from '../../data/serviceData'

const Navbar = () => {


    return (
        <div className="container p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">

                    <img
                        className="w-100 h-100"
                        src="assets/img/logo.png"
                        alt=""
                        style={{ objectFit: "cover" }}
                    />

                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link">
                            প্রথম পাতা
                        </Link>
                        <div className="nav-item dropdown">
                            <Link
                                to="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                সেবা সমূহ
                            </Link>
                            <div className="dropdown-menu" style={{ width: "750px", padding: "0px" }}>
                                <small className="row">
                                    {serviceItems.map((item, index) => {
                                        return (
                                            <small key={index} className="col-md-4">
                                                <Link to="/" className="dropdown-item">
                                                    <small>
                                                        <i className='far fa-dot-circle' />
                                                        {" "}
                                                        {item.title}
                                                    </small>
                                                </Link>
                                            </small>
                                        )
                                    })}
                                </small>

                            </div>

                        </div>
                        <Link to="/application-status" className="nav-item nav-link">
                            আবেদনের অবস্থা জানুন
                        </Link>
                        <Link to="/verify-certificate" className="nav-item nav-link">
                            সনদ যাচাইকরণ
                        </Link>
                        <div className="nav-item dropdown">
                            <Link
                                to="/"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                ফরমস
                            </Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/witness-attestation" className="dropdown-item">
                                    <small>
                                        সাক্ষী দাতার প্রত্যয়ন
                                    </small>
                                </Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">
                            যোগাযোগ
                        </Link>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <form className="d-flex border rounded overflow-hidden">
                            <input
                                className="form-control border-0 rounded-0"
                                type="text"
                                placeholder="সেবা সমূহ অনুসন্ধান করুন"
                            />
                            <button
                                type="button"
                                className="btn btn-primary border-0 rounded-0"
                            >
                                <i className="fa fa-search" />
                            </button>
                        </form>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar