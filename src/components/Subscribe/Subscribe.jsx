import React from 'react'

const Subscribe = () => {
    return (
        <div className="service-items rounded mb-3">
            <div className='p-3 text-center custom-border'>
                <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                    সাবস্ক্রাইব করুন
                </h6>
            </div>
            <div className='p-3'>
                <h6 className="text-center custom-text-style1">
                    আমাদের সাথে যোগাযোগ করুন
                </h6>

                <div className="input-group mb-3 mt-3">
                    <input
                        type="email"
                        className="form-control rounded"
                        placeholder="ইমেইল ঠিকানা লিখুন"
                    />
                    <span className="input-group-text bg-white border-start-0" style={{ cursor: 'pointer' }}>
                        <i className="fa fa-envelope text-primary"></i>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Subscribe