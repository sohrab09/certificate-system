import React from 'react'
import { Link } from 'react-router-dom';

const ServiceType = ({ item, index }) => {
    return (
        <div
            key={index}
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-delay="0.1s"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={item.title}
        >
            <Link to={item.path}>
                <div className="service-item rounded pt-2">
                    <div className="p-2 text-center">
                        {
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="img-fluid"
                                style={{ width: '50px' }}
                            />
                        }
                        <br />
                        <small>
                            {item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}
                        </small>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ServiceType;