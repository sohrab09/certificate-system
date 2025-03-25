import React from 'react'
import ServiceType from '../ServiceType/ServiceType'

const Service = ({ serviceItems }) => {
    return (
        <div className="row g-3">
            {
                serviceItems.map((item, index) => {
                    return (
                        <ServiceType key={index} item={item} />
                    )
                })
            }
        </div>
    )
}

export default Service