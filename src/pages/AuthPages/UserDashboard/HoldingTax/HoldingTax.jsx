import React from 'react'
import PageHeader from '../../../../utils/PageHeader';
import CommonButton from '../../../../components/CommonButton';
import CommonSelectTag from '../../../../components/CommonSelectTag';
import CommonInputField from '../../../../components/CommonInputField';
import CommonRadioField from '../../../../components/CommonRadioField';

const HoldingTax = () => {
    return (
        <div className="container">
            <PageHeader title="হোল্ডিং ট্যাক্স" header="হোল্ডিং ট্যাক্স এর জন্য আবেদন প্রক্রিয়া" />

            <div className="container">
                <div className="col-md-12">
                    <div className="wow fadeInUp shadow-lg rounded bg-white p-4" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">

                            <div className="row">

                                <div className="col-lg-8 col-12">

                                    <div className="service-items rounded mb-3">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                জমি সংক্রান্ত তথ্যাবলী
                                            </h6>
                                        </div>

                                        <div className="p-3">

                                            <div className="tab-content mt-3" id="myTabContent">

                                                <div className="row g-3">

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="বিভাগ"
                                                            option="আপনার বিভাগ নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="জেলা"
                                                            option="আপনার জেলা নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="উপজেলা / সার্কেল"
                                                            option="আপনার উপজেলা / সার্কেল নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="মৌজা / ডাকঘর"
                                                            option="আপনার মৌজা / ডাকঘর নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="জরিপের ধরণ"
                                                            option="আপনার জরিপের ধরণ নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="হোল্ডিং নং"
                                                            placeholder="আপনার হোল্ডিং নং প্রদান করুন"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="সংযুক্তি"
                                                            placeholder="আপনার সংযুক্তি প্রদান করুন"
                                                            type="file"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-9">
                                                        <CommonInputField
                                                            label="খতিয়ান নং"
                                                            placeholder="আপনার খতিয়ান নং প্রদান করুন"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-3 mt-5">
                                                        <CommonButton
                                                            buttonText="খতিয়ান যাচাই"
                                                            icon="fa fa-search"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-items rounded">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                মালিকের ধরণ
                                            </h6>
                                        </div>

                                        <div className="p-3">

                                            <div className="tab-content mt-3" id="myTabContent">

                                                <div className="row g-3">

                                                    <div className="col-md-4">
                                                        <CommonRadioField
                                                            label="মালিকের ধরণ"
                                                            label1="নিজস্ব মালিকানা"
                                                            isRequired={true}
                                                            name="ownerType"
                                                            id="ownerType1"
                                                            value="individual"
                                                            onChange={() => { }}
                                                        />
                                                    </div>

                                                    <div className="col-md-4">
                                                        <CommonRadioField
                                                            label=""
                                                            label1="উত্তরাধিকার মালিকানা"
                                                            isRequired=""
                                                            name="ownerType"
                                                            id="ownerType2"
                                                            value="joint"
                                                            onChange={() => { }}
                                                        />
                                                    </div>


                                                    <div className="col-md-12 text-end">
                                                        <CommonButton
                                                            buttonText="সম্পূর্ণ করুন"
                                                            icon="fa fa-check"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-4 col-12">

                                    <div className="service-items rounded">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                নির্দেশনা
                                            </h6>
                                        </div>
                                        <div className='p-3'>
                                            <ul>
                                                <li>সংযুক্তি আবশ্যক।</li>
                                                <li>ফাইলের টাইপ .jpg, .jpeg, .png, .pdf</li>
                                                <li>ফাইলের সাইজ ২ মেগাবাইট এর কম হতে হবে।</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default HoldingTax;