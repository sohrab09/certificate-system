import React from 'react'

const CommonTextArea = ({ label, isRequired, placeholder, rows, cols, type }) => {
    return (
        <div>
            <label className="form-label fw-bold"><small>{label}</small> {isRequired === true && <span className="text-danger">*</span>}</label>
            <textarea
                className="form-control"
                name=""
                id=""
                cols={cols}
                rows={rows}
                placeholder={placeholder}
                type={type}
            ></textarea>
        </div>
    )
};

export default CommonTextArea;