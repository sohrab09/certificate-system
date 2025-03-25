import React from 'react'

const CommonButton = ({ icon, buttonText, onClick }) => {
    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={onClick}
            >
                <i className={icon}></i> {buttonText}
            </button>
        </div>
    )
};

export default CommonButton;