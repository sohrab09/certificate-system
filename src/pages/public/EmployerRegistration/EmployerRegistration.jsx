import React from 'react'
import PageHeader from '../../../utils/PageHeader'
import CommonInputField from '../../../components/CommonInputField'
import CommonSelectTag from '../../../components/CommonSelectTag'
import { Link } from 'react-router-dom'

const EmployerRegistration = () => {
    return (
        <div className="container">
            <PageHeader title="একাউন্ট তৈরি" header="প্রশাসনিক একাউন্ট তৈরী করুন" />

            <div className="container">
                <div className="col-md-12">
                    <div className="wow fadeInUp shadow-lg rounded bg-white p-4" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">

                            <div className="row">

                                <div className="col-lg-8 col-12">

                                    <div className="service-items rounded mb-3">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                সাধারণ তথ্য
                                            </h6>
                                        </div>

                                        <div className='shadow-md p-3'>
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <CommonInputField
                                                        label="নাম (বাংলায়)"
                                                        placeholder="নাম লিখুন"
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
                                                    <CommonInputField
                                                        label="জাতীয় পরিচয়পত্র নম্বর"
                                                        placeholder="জাতীয় পরিচয়পত্র নম্বর লিখুন"
                                                        type="number"
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

                                                <div className="col-md-6">
                                                    <CommonSelectTag
                                                        label="একাউন্ট ধরন"
                                                        option="একাউন্ট ধরন নির্বাচন করুন"
                                                        options={[
                                                            { value: '1', name: 'মেয়র' },
                                                            { value: '2', name: 'প্রশাসক' },
                                                            { value: '3', name: 'মেয়র সচিব' },
                                                            { value: '4', name: 'ইউনিয়ন সচিব' },
                                                        ]}
                                                        isRequired={true}
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="service-items rounded mb-3">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                অফিস তথ্য
                                            </h6>
                                        </div>

                                        <div className='shadow-md p-3'>
                                            <div className="row g-3">

                                                <div className="col-md-6">
                                                    <CommonSelectTag
                                                        label="ঠিকানার ধরণ"
                                                        option="একাউন্ট ধরন নির্বাচন করুন"
                                                        options={[
                                                            { value: '1', name: 'সিটি কর্পোরেশন' },
                                                            { value: '2', name: 'পৌরসভা' },
                                                            { value: '3', name: 'ইউনিয়ন' },
                                                        ]}
                                                        isRequired={true}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <CommonSelectTag
                                                        label="বিভাগ"
                                                        option="বিভাগ নির্বাচন করুন"
                                                        options={[
                                                            { value: '1', name: 'ঢাকা' },
                                                            { value: '2', name: 'চট্টগ্রাম' },
                                                            { value: '3', name: 'রাজশাহী' },
                                                        ]}
                                                        isRequired={true}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <CommonSelectTag
                                                        label="জেলা"
                                                        option="জেলা নির্বাচন করুন"
                                                        options={[
                                                            { value: '1', name: 'ঢাকা' },
                                                            { value: '2', name: 'চট্টগ্রাম' },
                                                            { value: '3', name: 'রাজশাহী' },
                                                        ]}
                                                        isRequired={true}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <CommonSelectTag
                                                        label="থানা / উপজেলা"
                                                        option="থানা / উপজেলা নির্বাচন করুন"
                                                        options={[
                                                            { value: '1', name: 'ঢাকা' },
                                                            { value: '2', name: 'চট্টগ্রাম' },
                                                            { value: '3', name: 'রাজশাহী' },
                                                        ]}
                                                        isRequired={false}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <CommonSelectTag
                                                        label="সিটি কর্পোরেশন"
                                                        option="সিটি কর্পোরেশন নির্বাচন করুন"
                                                        options={[
                                                            { value: '1', name: 'ঢাকা' },
                                                            { value: '2', name: 'চট্টগ্রাম' },
                                                            { value: '3', name: 'রাজশাহী' },
                                                        ]}
                                                        isRequired={true}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <CommonSelectTag
                                                        label="অফিস"
                                                        option="অফিস নির্বাচন করুন"
                                                        options={[
                                                            { value: '1', name: 'ঢাকা' },
                                                            { value: '2', name: 'চট্টগ্রাম' },
                                                            { value: '3', name: 'রাজশাহী' },
                                                        ]}
                                                        isRequired={true}
                                                    />
                                                </div>


                                                <div className="col-12 text-end">
                                                    <button className="btn btn-primary">
                                                        <i className="fa fa-user-plus"></i> নিবন্ধন করুন
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-lg-4 col-12">

                                    <div className="service-items rounded mb-3">
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
                                                <li>আপনার সঠিক একাউন্ট ধরন নির্বাচন করুন।</li>
                                                <li>তথ্য জমা দেওয়ার পর আপনার মোবাইলে একটি যাচাইকরণ কোড প্রেরণ করা হবে।</li>
                                                <li>আপনার প্রেরিত তথ্য যাচাই করার পর আপনার অ্যাকাউন্ট দিয়ে আপনি কার্যক্রম পরিচালনা করতে পারবেন।</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="service-items rounded mb-3">
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
}

export default EmployerRegistration