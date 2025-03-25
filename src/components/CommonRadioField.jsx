import React from 'react'

const CommonRadioField = ({ label, label1, isRequired, name, id, value, onChange }) => {
    return (
        <div>
            <label className="form-label fw-bold"><small>{label}</small> {isRequired === true && <span className="text-danger">*</span>} </label>
            <br />
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                />
                <label className="form-check-label" htmlFor={id}>{label1}</label>
            </div>
        </div>
    )
};

export default CommonRadioField;