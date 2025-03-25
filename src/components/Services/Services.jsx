import React from 'react'
import Service from '../Service/Service'
// import OfficeCoverage from '../OfficeCoverage/OfficeCoverage'
// import Subscribe from '../Subscribe/Subscribe'
import ImportantLink from '../ImportantLink/ImportantLink'
import SocialMediaImage from '../SocialMediaImage/SocialMediaImage'
import serviceItems from '../../data/serviceData'
import PageHeader from '../../utils/PageHeader'

const Services = () => {

    return (
        <div className="container">
            <PageHeader title="সনদ" header="সনদের সেবাসমূহ" />
            <div className="row">

                <div className="col-lg-8 col-12">

                    <Service serviceItems={serviceItems} />

                </div>
                <div className="col-lg-4 col-12">

                    {/* <OfficeCoverage />

                    <Subscribe /> */}

                    <ImportantLink />

                    <SocialMediaImage />

                </div>
            </div>

        </div>
    )
}

export default Services