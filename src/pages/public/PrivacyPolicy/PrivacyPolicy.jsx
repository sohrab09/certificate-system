import React from 'react'
import PageHeader from '../../../utils/PageHeader';
import { privacyDataBangla, privacyDataEnglish } from '../../../data/privacyData';

const PrivacyPolicy = () => {
    return (
        <div className="container">
            <PageHeader title="গোপনীয়তা" header="গোপনীয়তার নীতিমালা" />

            <div className="container">
                <div className="col-md-12">
                    <div className="wow fadeInUp shadow-lg rounded bg-white p-4" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">

                            <div className="row g-3 border-rounded mb-3 py-3 custom-card">

                                <p style={{ textAlign: 'justify' }}>Prottoyon.gov.bd ("আমরা" "আমাদের" বা "আমাদের") সিস্টেমে ব্যবহৃত ডেটার গোপনীয়তার রূপরেখা প্রদান করে। আপনি যখন অনলাইন সার্টিফিকেট সিস্টেম প্রত্যয়ন ("পরিষেবা") ব্যবহার করেন তখন ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষা সম্পর্কিত বিষয়গুলো ব্যাখ্যা করা হয়। আমরা আপনার গোপনীয়তা রক্ষা করতে এবং আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ।
                                </p>

                            </div>

                            {
                                privacyDataBangla.map((section, index) => {
                                    return (
                                        <div className="py-1" key={index}>
                                            <h5 className='left-border'>{section.title}</h5>
                                            {
                                                section.items.map((item, index) => {
                                                    return (
                                                        <ul key={index}>
                                                            <li><strong>{item.category}: </strong> {item.description}</li>
                                                        </ul>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }

                            <div className="py-2">
                                <small><strong>সর্বশেষ আপডেটঃ ৩০শে জুন, ২০২৩ ইং</strong></small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4">
                <div className="col-md-12">
                    <div className="wow fadeInUp shadow-lg rounded bg-white p-4" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">

                            <div className="row g-3 border-rounded mb-3 py-3 custom-card">

                                <p style={{ textAlign: 'justify' }}>This Privacy Policy outlines the data privacy practices of Prottoyon.gov.bd ("we", "our" or "us"). It explains the collection, use, and protection of personal information when you use the online certificate system Prottoyon ("Service"). We are committed to safeguarding your privacy and ensuring that your personal information is protected.
                                </p>

                            </div>

                            {
                                privacyDataEnglish.map((section, index) => {
                                    return (
                                        <div className="py-1" key={index}>
                                            <h5 className='left-border'>{section.title}</h5>
                                            {
                                                section.items.map((item, index) => {
                                                    return (
                                                        <ul key={index}>
                                                            <li><strong>{item.category}: </strong> {item.description}</li>
                                                        </ul>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }

                            <div className="py-2">
                                <small><strong>Last updated: 30th June, 2023</strong></small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PrivacyPolicy;