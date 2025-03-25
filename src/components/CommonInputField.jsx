import React from 'react'

const CommonInputField = ({ label, placeholder, onChange, type, isRequired }) => {
    return (
        <div>
            <label className="form-label fw-bold"><small>{label}</small> {isRequired === true && <span className="text-danger">*</span>} </label>
            <input
                className="form-control"
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
};

export default CommonInputField;