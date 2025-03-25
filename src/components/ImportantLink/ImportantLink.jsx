import React from 'react'
import sidebarImportantLink from '../../data/sidebarImportantLink'
import ImportantLinks from '../ImportantLinks/ImportantLinks'

const ImportantLink = () => {
    return (
        <div className="service-items rounded mb-3">
            <div className='p-3 text-center custom-border'>
                <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                    গুরুত্বপূর্ণ লিংক
                </h6>
            </div>
            <div className='p-3'>
                {
                    sidebarImportantLink.map((item, index) => {
                        return (
                            <ImportantLinks key={index} item={item} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ImportantLink