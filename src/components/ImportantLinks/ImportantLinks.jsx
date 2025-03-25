import React from 'react'

const ImportantLinks = ({ item, index }) => {
    return (
        <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="d-block text-decoration-none text-primary"
        >
            {item.icon}
            {" "}
            {item.title}
        </a>
    )
}

export default ImportantLinks;