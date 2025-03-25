import React from 'react'

const PageHeader = ({ title, header }) => {
    return (
        <div className="text-center wow fadeInUp py-4" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
                {title}
            </h6>
            <h1 className="">
                {header}
            </h1>
        </div>
    )
}

export default PageHeader;