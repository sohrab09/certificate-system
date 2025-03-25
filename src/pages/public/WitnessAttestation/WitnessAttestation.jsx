import React from 'react'
import PageHeader from '../../../utils/PageHeader';
import CommonInputField from '../../../components/CommonInputField';
import CommonButton from '../../../components/CommonButton';
import CommonSelectTag from '../../../components/CommonSelectTag';

const WitnessAttestation = () => {

    return (
        <div className="container">
            <PageHeader title="সাক্ষী দাতার প্রত্যয়ন" header="সাক্ষী দাতার প্রত্যয়নপত্র তৈরী করুন" />

            <div className="container">
                <div className="col-md-12">
                    <div className="wow fadeInUp shadow-lg rounded bg-white p-4" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">

                            <div className="row">

                                <div className="col-lg-8 col-12">

                                    <div className="service-items rounded">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                সাক্ষী দাতার প্রত্যয়নপত্র
                                            </h6>
                                        </div>

                                        <div className="p-3">

                                            <p className='text-primary' style={{ textAlign: 'justify' }}>উত্তরাধিকার কিংবা ওয়ারিশ সনদপত্রের ক্ষেত্রে যদি মৃত ব্যাক্তির মৃত্যুর তারিখ এবং মৃত্যু রেজিস্টারের নিবন্ধন নাম্বার জানা না থাকে তাহলে সত্যতা যাচাই করণের ক্ষেত্রে ধর্ম অনুযায়ী প্রত্যয়ন পত্রের ধরণ অনুসারে আপনি অতি দ্রুত সামান্য তথ্য দিয়ে প্রত্যয়নপত্র তৈরী করে প্রিন্ট করে নিতে পারবেন। পরবর্তীতে প্রত্যয়নপত্রটি আপনি সংযুক্তি হিসাবে ব্যবহার করতে পারবেন।</p>

                                            <div className="row g-3">
                                                <div className="col-md-12">
                                                    <CommonSelectTag
                                                        label="ধর্ম"
                                                        option="ধর্ম নির্বাচন করুন"
                                                        isRequired={true}
                                                        options={[]}
                                                    />
                                                </div>

                                                <div className="col-md-12">
                                                    <CommonSelectTag
                                                        label="প্রত্যয়নপত্রের ধরণ"
                                                        option="প্রত্যয়নপত্রের ধরণ নির্বাচন করুন"
                                                        isRequired={true}
                                                        options={[]}
                                                    />
                                                </div>

                                                <div className="col-md-12">
                                                    <CommonInputField
                                                        label="মৃত ব্যক্তির নাম (বাংলায়)"
                                                        placeholder="আপনার মৃত ব্যক্তির নাম বাংলায় প্রদান করুন"
                                                        type="text"
                                                        isRequired={true}
                                                    />
                                                </div>

                                                <div className="col-md-12">
                                                    <CommonInputField
                                                        label="প্রত্যয়ন দাতার নাম (বাংলায়)"
                                                        placeholder="আপনার প্রত্যয়ন দাতার নাম বাংলায় প্রদান করুন"
                                                        type="text"
                                                        isRequired={true}
                                                    />
                                                </div>

                                                <div className="col-md-12">
                                                    <CommonInputField
                                                        label="প্রত্যয়ন দাতার মোবাইল নম্বর (ইংরেজিতে)"
                                                        placeholder="আপনার প্রত্যয়ন দাতার মোবাইল নম্বর ইংরেজিতে প্রদান করুন"
                                                        type="text"
                                                        isRequired={true}
                                                    />
                                                </div>

                                                <div className="col-md-12">
                                                    <CommonInputField
                                                        label="প্রত্যয়ন দাতার জাতীয় পরিচয়পত্র নম্বর (ইংরেজিতে)"
                                                        placeholder="আপনার প্রত্যয়ন দাতার জাতীয় পরিচয়পত্র নম্বর ইংরেজিতে প্রদান করুন"
                                                        type="text"
                                                        isRequired={true}
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-end gap-2">
                                                    <CommonButton
                                                        buttonText="নমুনা দেখুন"
                                                        icon="fa fa-eye"
                                                    />

                                                    <CommonButton
                                                        buttonText="প্রত্যয়ন তৈরী করুন"
                                                        icon="fa fa-check"
                                                    />
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
                                                <li>(*) চিহ্নিত ক্ষেত্রগুলি পূরণ করা বাধ্যতামূলক। অন্যগুলো ঐচ্ছিক।</li>
                                                <li>জাতীয় পরিচয় পত্র নম্বর হবে ১০ অথবা ১৭ ডিজিট ।</li>
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

export default WitnessAttestation;