import React from 'react';

const CommonSelectTag = ({ label, option, options, isRequired, onChange }) => {

    return (
        <div>
            <label className="form-label fw-bold">
                <small>{label}</small> {isRequired && <span className="text-danger">*</span>}
            </label>
            <select
                className="form-select"
                onChange={onChange}
            >
                <option value="">{option}</option>
                {options?.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.bName} {item.eName && `(${item.eName})`}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CommonSelectTag;
