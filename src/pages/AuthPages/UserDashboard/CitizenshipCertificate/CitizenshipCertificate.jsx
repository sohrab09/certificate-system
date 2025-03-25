import React from 'react'
import PageHeader from '../../../../utils/PageHeader';
import CommonButton from '../../../../components/CommonButton';
import CommonInputField from '../../../../components/CommonInputField';
import CommonSelectTag from '../../../../components/CommonSelectTag';
import { Link } from 'react-router-dom';

const CitizenshipCertificate = () => {
    return (
        <div className="container">
            <PageHeader title="নাগরিকত্ব সনদ" header="নাগরিকত্ব সনদ এর জন্য আবেদন প্রক্রিয়া" />

            <div className="container">
                <div className="col-md-12">
                    <div className="wow fadeInUp shadow-lg rounded bg-white p-4" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">

                            <div className="row">

                                <div className="col-lg-8 col-12">

                                    <div className="service-items rounded mb-3">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                নাগরিক তথ্য
                                            </h6>
                                        </div>

                                        <div className="p-3">

                                            <div className="tab-content mt-3" id="myTabContent">

                                                <div className="row g-3">

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="নাম (বাংলায়)"
                                                            placeholder="আপনার নাম লিখুন"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="নাম (ইংরেজীতে)"
                                                            placeholder="Enter Your Name"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">

                                                        <CommonSelectTag
                                                            label="অভিভাবক এর ধরণ"
                                                            option="অভিভাবক এর ধরণ নির্বাচন করুন"
                                                            options={[
                                                                { value: '1', bName: 'পিতা', eName: 'Father' },
                                                                { value: '2', bName: 'স্বামী', eName: 'Husband' }
                                                            ]}
                                                            isRequired={true}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">

                                                        <CommonInputField
                                                            label="অভিভাবক নাম (বাংলায়)"
                                                            placeholder="অভিভাবক নাম লিখুন"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="অভিভাবক নাম (ইংরেজীতে)"
                                                            placeholder="Enter Your Guardian Name"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="মাতার নাম (বাংলায়)"
                                                            placeholder="মাতার নাম লিখুন"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="মাতার নাম (ইংরেজীতে)"
                                                            placeholder="Enter Your Mother Name"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="নিবন্ধনের ধরণ"
                                                            option="নিবন্ধনের ধরণ নির্বাচন করুন"
                                                            options={[
                                                                { value: '1', bName: 'জাতীয় পরিচয়পত্র', eName: 'National ID' },
                                                                { value: '2', bName: 'জন্ম নিবন্ধন', eName: 'Birth Registration' },
                                                                { value: '3', bName: 'পাসপোর্ট', eName: 'Passport' },
                                                                { value: '4', bName: 'টিন', eName: 'TIN' },
                                                                { value: '5', bName: 'বিন', eName: 'BIN' },
                                                            ]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="নিবন্ধন নং"
                                                            placeholder="নিবন্ধন নং লিখুন"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="ছবি"
                                                            placeholder="আপনার সংযুক্তি প্রদান করুন"
                                                            type="file"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="মোবাইল নম্বর"
                                                            placeholder="মোবাইল নম্বর লিখুন"
                                                            type="number"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-items rounded mb-3">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                বর্তমান ঠিকানার তথ্য
                                            </h6>
                                        </div>

                                        <div className="p-3">

                                            <div className="tab-content mt-3" id="myTabContent">

                                                <div className="row g-3">

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="বাসার ঠিকানা"
                                                            placeholder="বাসার ঠিকানা লিখুন"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="ইউনিয়ন / ওয়ার্ড"
                                                            option="ইউনিয়ন / ওয়ার্ড নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="থানা"
                                                            option="থানা নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="জেলা"
                                                            option="জেলা নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="বিভাগ"
                                                            option="বিভাগ নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-items rounded">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                স্থায়ী ঠিকানার তথ্য
                                            </h6>
                                        </div>

                                        <div className="p-3">

                                            <div className="tab-content mt-3" id="myTabContent">

                                                <div className="row g-3">

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="গ্রাম"
                                                            placeholder="গ্রামের নাম লিখুন"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonInputField
                                                            label="পোস্ট / ডাকঘর"
                                                            placeholder="পোস্ট অফিসের নাম লিখুন"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="থানা"
                                                            option="থানা নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="জেলা"
                                                            option="জেলা নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <CommonSelectTag
                                                            label="বিভাগ"
                                                            option="বিভাগ নির্বাচন করুন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12 text-end">
                                                        <CommonButton
                                                            buttonText="নিবন্ধন করুন"
                                                            icon="fa fa-check"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-4 col-12">

                                    <div className="service-items rounded  mb-3">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                নির্দেশনা
                                            </h6>
                                        </div>
                                        <div className='p-3'>
                                            <ul>
                                                <li><span className="text-danger">(*)</span> চিহ্নিত ক্ষেত্রগুলি পূরণ করা বাধ্যতামূলক। অন্যগুলো ঐচ্ছিক।</li>
                                                <li>আপনার মোবাইল ফোন নম্বর এর মোট সংখ্যা হবে ১১ ডিজিট ।</li>
                                                <li>আপনার জাতীয় পরিচয়পত্রের মোট সংখ্যা হবে ১০, ১৩ অথবা ১৭ ডিজিট।</li>
                                                <li>সংযুক্তি আবশ্যক।</li>
                                                <li>ফাইলের টাইপ .jpg, .jpeg, .png, .pdf</li>
                                                <li>ফাইলের সাইজ ২ মেগাবাইট এর কম হতে হবে।</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="service-items rounded">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                জরুরী প্রয়োজনে
                                            </h6>
                                        </div>
                                        <div className='p-3'>
                                            <h6>যদি আপনি কোনো সমস্যার সম্মুখীন হোন অথবা আপনার কোনো জিজ্ঞাসা থাকলে আমাদের সাথে যোগাযোগ করতে পারেন।</h6>
                                            <h6>
                                                যোগাযোগ করতে {" "}
                                                <Link to="/contact" >
                                                    এখানে ক্লিক করুন
                                                </Link>
                                            </h6>
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

export default CitizenshipCertificate;