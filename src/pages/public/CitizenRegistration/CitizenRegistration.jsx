import React, { useEffect, useState } from 'react'
import PageHeader from '../../../utils/PageHeader'
import CommonInputField from '../../../components/CommonInputField'
import CommonSelectTag from '../../../components/CommonSelectTag'
import { Link } from 'react-router-dom'
import CommonButton from '../../../components/CommonButton'

const CitizenRegistration = () => {

    const [randomCode, setRandomCode] = useState('');

    const generateRandomCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const codeLength = 5;
        let code = '';

        for (let i = 0; i < codeLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }
        setRandomCode(code);
    };

    useEffect(() => {
        generateRandomCode();
    }, []);

    return (
        <div className="container">
            <PageHeader title="একাউন্ট তৈরি" header="নাগরিক একাউন্ট তৈরী করুন" />

            <div className="container">
                <div className="col-md-12">
                    <div className="wow fadeInUp shadow-lg rounded bg-white p-4" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">

                            <div className="row">

                                <div className="col-lg-8 col-12">

                                    <div className="container service-items">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">

                                            <li className="nav-item mt-3">
                                                <button
                                                    className="nav-link active"
                                                    id="birth-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#birth"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <span className="text-center text-secondary p-2">
                                                        জন্ম নিবন্ধনের মাধ্যমে
                                                    </span>
                                                </button>
                                            </li>
                                            <li className="nav-item mt-3">
                                                <button
                                                    className="nav-link"
                                                    id="nid-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nid"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <span className="text-center text-secondary p-2">
                                                        জাতীয় পরিচয়পত্র নম্বরের মাধ্যমে
                                                    </span>
                                                </button>
                                            </li>
                                            <li className="nav-item mt-3">
                                                <button
                                                    className="nav-link"
                                                    id="general-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#general"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <span className="text-center text-secondary p-2">
                                                        সাধারণ নিবন্ধন
                                                    </span>
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content rounded p-3" id="myTabContent">
                                            {/* General Info Tab */}
                                            <div className="tab-pane fade show active" id="birth" role="tabpanel">
                                                <div className="row g-3">
                                                    <div className="col-md-12">
                                                        <CommonInputField
                                                            label="জন্ম নিবন্ধন নম্বর"
                                                            placeholder="জন্ম নিবন্ধন নম্বর প্রদান করুন"
                                                            type="number"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonSelectTag
                                                            label="জন্ম তারিখ"
                                                            option="দিন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonSelectTag
                                                            label="জন্ম মাস"
                                                            option="মাস"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonSelectTag
                                                            label="জন্ম সাল"
                                                            option="সাল"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonInputField
                                                            label="মোবাইল নম্বর"
                                                            placeholder="১১ ডিজিটের মোবাইল নম্বর প্রদান করুন"
                                                            type="number"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonInputField
                                                            label="ইমেইল ঠিকানা"
                                                            placeholder="আপনার ইমেইল ঠিকানা প্রদান করুন"
                                                            type="email"
                                                            isRequired={false}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        {" "}
                                                        <label className="form-check-label" htmlFor="exampleCheck1">আমি প্রত্যয়ন সিস্টেমের <span><a href=" ">তথ্য অ্যাক্সেস নীতিমালার</a></span> সাথে একমত</label>
                                                    </div>

                                                    <div className="col-md-12 text-end">
                                                        <CommonButton
                                                            buttonText="নিবন্ধন করুন"
                                                            icon="fa fa-user-plus"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Office Info Tab */}
                                            <div className="tab-pane fade" id="nid" role="tabpanel">
                                                <div className="row g-3">
                                                    <div className="col-md-12">
                                                        <CommonInputField
                                                            label="জাতীয় পরিচয়পত্র নম্বর"
                                                            placeholder="জাতীয় পরিচয়পত্র নম্বর প্রদান করুন"
                                                            type="number"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonSelectTag
                                                            label="জন্ম তারিখ"
                                                            option="দিন"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonSelectTag
                                                            label="জন্ম মাস"
                                                            option="মাস"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonSelectTag
                                                            label="জন্ম সাল"
                                                            option="সাল"
                                                            options={[]}
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonInputField
                                                            label="মোবাইল নম্বর"
                                                            placeholder="১১ ডিজিটের মোবাইল নম্বর প্রদান করুন"
                                                            type="number"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonInputField
                                                            label="ইমেইল ঠিকানা"
                                                            placeholder="আপনার ইমেইল ঠিকানা প্রদান করুন"
                                                            type="email"
                                                            isRequired={false}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        {" "}
                                                        <label className="form-check-label" htmlFor="exampleCheck1">আমি প্রত্যয়ন সিস্টেমের <span><a href=" ">তথ্য অ্যাক্সেস নীতিমালার</a></span> সাথে একমত</label>
                                                    </div>

                                                    <div className="col-md-12 text-end">
                                                        <CommonButton
                                                            buttonText="নিবন্ধন করুন"
                                                            icon="fa fa-user-plus"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Office Info Tab */}
                                            <div className="tab-pane fade" id="general" role="tabpanel">
                                                <div className="row g-3">
                                                    <div className="col-md-12">
                                                        <CommonInputField
                                                            label="নাম (ইংরেজিতে)"
                                                            placeholder="আপনার নাম ইংরেজিতে প্রদান করুন"
                                                            type="text"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonInputField
                                                            label="নাম (বাংলায়)"
                                                            placeholder="আপনার নাম বাংলায় প্রদান করুন"
                                                            type="text"
                                                            isRequired={false}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonInputField
                                                            label="ই-মেইল ঠিকানা"
                                                            placeholder="আপনার ই-মেইল ঠিকানা প্রদান করুন"
                                                            type="email"
                                                            isRequired={false}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <CommonInputField
                                                            label="মোবাইল নম্বর"
                                                            placeholder="১১ ডিজিটের মোবাইল নম্বর প্রদান করুন"
                                                            type="tel"
                                                            isRequired={true}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        {/* Add a verification code field here */}
                                                        <div className="form-label fw-bold">
                                                            যাচাইকরণ কোড
                                                        </div>
                                                        <div className="form-label fw-bold">
                                                            {randomCode}
                                                        </div>
                                                        {" "}
                                                        {randomCode && <button className="btn btn-primary" onClick={generateRandomCode}>Regenerate</button>}
                                                    </div>

                                                    <div className="col-md-12">
                                                        {/* Add a verification code field here */}
                                                        {
                                                            randomCode !== '' &&
                                                            <CommonInputField
                                                                label="তথ্যের নিরাপত্তার স্বার্থে কোড লিখুন"
                                                                placeholder="যাচাইকরণ কোড প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        }
                                                    </div>

                                                    <div className="col-md-12">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        {" "}
                                                        <label className="form-check-label" htmlFor="exampleCheck1">আমি প্রত্যয়ন সিস্টেমের <span><a href=" ">তথ্য অ্যাক্সেস নীতিমালার</a></span> সাথে একমত</label>
                                                    </div>

                                                    <div className="col-md-12 text-end">
                                                        <CommonButton
                                                            buttonText="নিবন্ধন করুন"
                                                            icon="fa fa-user-plus"
                                                        />
                                                    </div>


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
                                                <li>আপনার মোবাইল নম্বর এর মোট সংখ্যা হবে ১১ ডিজিট ।</li>
                                                <li>আপনার সঠিক ইমেইল ঠিকানা প্রদান করুন (ঐচ্ছিক)।</li>
                                                <li>তথ্য জমা দেওয়ার পর একটি যাচাইকরণ কোড প্রদানকৃত ইমেইল ঠিকানা অথবা মোবাইল নম্বরে পাঠানো হবে।</li>
                                                <li>অনুগ্রহ করে সঠিক তথ্য প্রদান করুন।</li>
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
};

export default CitizenRegistration;