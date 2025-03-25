import React, { useState } from 'react';
import PageHeader from '../../../../utils/PageHeader';
import CommonInputField from '../../../../components/CommonInputField';
import CommonSelectTag from '../../../../components/CommonSelectTag';
import CommonButton from '../../../../components/CommonButton';

const TradeLicense = () => {
    const [activeTab, setActiveTab] = useState('general');

    const handleButtonClick = () => {
        if (activeTab === 'general') {
            setActiveTab('organization');
        } else if (activeTab === 'organization') {
            setActiveTab('organization-address');
        } else if (activeTab === 'organization-address') {

        }
    };

    return (
        <div className="container">
            <PageHeader title="ট্রেড লাইসেন্স" header="ট্রেড লাইসেন্স এর জন্য আবেদন প্রক্রিয়া" />

            <div className="container">
                <div className="col-md-12">
                    <div className="wow fadeInUp shadow-lg rounded bg-white p-4" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">

                            <div className="row">

                                <div className="col-lg-8 col-12">

                                    <div className="service-items rounded mb-3">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                ব্যবসা প্রতিষ্ঠানের তথ্য
                                            </h6>
                                        </div>

                                        <div className="p-3">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">

                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className={`nav-link ${activeTab === 'general' ? 'active' : ''}`}
                                                        id="general-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#general"
                                                        type="button"
                                                        role="tab"
                                                        onClick={() => setActiveTab('general')}
                                                    >
                                                        <span className="text-center text-secondary p-2">
                                                            সাধারণ তথ্য
                                                        </span>
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className={`nav-link ${activeTab === 'organization' ? 'active' : ''}`}
                                                        id="organization-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#organization"
                                                        type="button"
                                                        role="tab"
                                                        onClick={() => setActiveTab('organization')}
                                                    >
                                                        <span className="text-center text-secondary p-2">
                                                            প্রতিষ্ঠানের তথ্য
                                                        </span>
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className={`nav-link ${activeTab === 'organization-address' ? 'active' : ''}`}
                                                        id="organization-address-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#organization-address"
                                                        type="button"
                                                        role="tab"
                                                        onClick={() => setActiveTab('organization-address')}
                                                    >
                                                        <span className="text-center text-secondary p-2">
                                                            প্রতিষ্ঠানের ঠিকানার তথ্য
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="tab-content mt-3" id="myTabContent">
                                                <div className={`tab-pane fade ${activeTab === 'general' ? 'show active' : ''}`} id="general" role="tabpanel">
                                                    <div className="row g-3">
                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="স্বত্ত্বাধিকারী/প্রোপাইটর নাম (বাংলায়) "
                                                                placeholder="আপনার নাম বাংলায় প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="স্বত্ত্বাধিকারী/প্রোপাইটর নাম (ইংরেজিতে)"
                                                                placeholder="আপনার নাম ইংরেজিতে প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="মাতার নাম (বাংলায়)"
                                                                placeholder="আপনার মাতার নাম বাংলায় প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="মাতার নাম (ইংরেজিতে)"
                                                                placeholder="আপনার মাতার নাম ইংরেজিতে প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="পিতার নাম (বাংলায়)"
                                                                placeholder="আপনার পিতার নাম বাংলায় প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="পিতার নাম (ইংরেজিতে)"
                                                                placeholder="আপনার পিতার নাম ইংরেজিতে প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="স্বামী/স্ত্রীর নাম (বাংলায়)"
                                                                placeholder="আপনার স্বামী/স্ত্রীর নাম বাংলায় প্রদান করুন"
                                                                type="text"
                                                                isRequired={false}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="স্বামী/স্ত্রীর নাম (ইংরেজিতে)"
                                                                placeholder="আপনার স্বামী/স্ত্রীর নাম ইংরেজিতে প্রদান করুন"
                                                                type="text"
                                                                isRequired={false}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="ইমেইল"
                                                                placeholder="আপনার ইমেইল প্রদান করুন"
                                                                type="email"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="মোবাইল নম্বর"
                                                                placeholder="১১ ডিজিটের মোবাইল নম্বর প্রদান করুন"
                                                                type="tel"
                                                                isRequired={true}
                                                            />
                                                        </div>


                                                        <div className="col-md-12 text-end">
                                                            <CommonButton
                                                                buttonText="পরবর্তী"
                                                                icon="fa fa-arrow-right"
                                                                onClick={handleButtonClick}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`tab-pane fade ${activeTab === 'organization' ? 'show active' : ''}`} id="organization" role="tabpanel">
                                                    <div className="row g-3">
                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="প্রতিষ্ঠানের নাম (বাংলায়)"
                                                                placeholder="আপনার প্রতিষ্ঠানের নাম বাংলায় প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="প্রতিষ্ঠানের নাম (ইংরেজিতে)"
                                                                placeholder="আপনার প্রতিষ্ঠানের নাম ইংরেজিতে প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="প্রতিষ্ঠানের ধরণ (বাংলায়)"
                                                                placeholder="আপনার প্রতিষ্ঠানের ধরণ বাংলায় প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="প্রতিষ্ঠানের ধরণ (ইংরেজিতে)"
                                                                placeholder="আপনার প্রতিষ্ঠানের ধরণ ইংরেজিতে প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonSelectTag
                                                                label="প্রতিষ্ঠানের প্রকৃতি"
                                                                option="প্রতিষ্ঠানের প্রকৃতি নির্বাচন করুন"
                                                                options={[]}
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonSelectTag
                                                                label="ট্রেড লাইসেন্স এর ধরণ"
                                                                option="ট্রেড লাইসেন্স এর ধরণ নির্বাচন করুন"
                                                                options={[]}
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="ব্যবসা শুরুর তারিখ (ইংরেজিতে)"
                                                                placeholder="আপনার ব্যবসা শুরুর তারিখ ইংরেজিতে প্রদান করুন"
                                                                type="date"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="TIN নম্বর (ইংরেজিতে)"
                                                                placeholder="আপনার TIN নম্বর ইংরেজিতে প্রদান করুন"
                                                                type="text"
                                                                isRequired={false}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="BIN নম্বর (ইংরেজিতে)"
                                                                placeholder="আপনার BIN নম্বর ইংরেজিতে প্রদান করুন"
                                                                type="text"
                                                                isRequired={false}
                                                            />
                                                        </div>

                                                        <div className="col-md-12 text-end">
                                                            <CommonButton
                                                                buttonText="পরবর্তী"
                                                                icon="fa fa-arrow-right"
                                                                onClick={handleButtonClick}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`tab-pane fade ${activeTab === 'organization-address' ? 'show active' : ''}`} id="organization-address" role="tabpanel">
                                                    <div className="row g-3">
                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="কর অঞ্চল (বাংলায়)"
                                                                placeholder="আপনার কর অঞ্চল বাংলায় প্রদান করুন"
                                                                type="text"
                                                                isRequired={false}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="কর অঞ্চল (ইংরেজিতে)"
                                                                placeholder="আপনার কর অঞ্চল ইংরেজিতে প্রদান করুন"
                                                                type="text"
                                                                isRequired={false}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonSelectTag
                                                                label="কর অঞ্চল এর ওয়ার্ড"
                                                                option="কর অঞ্চল এর ওয়ার্ড নির্বাচন করুন"
                                                                options={[]}
                                                                isRequired={false}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="প্রতিষ্ঠানের গ্রাম/হোল্ডিং/এলাকা (বাংলায়)"
                                                                placeholder="আপনার প্রতিষ্ঠানের গ্রাম/হোল্ডিং/এলাকা বাংলায় প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="প্রতিষ্ঠানের গ্রাম/হোল্ডিং/এলাকা (ইংরেজিতে)"
                                                                placeholder="আপনার প্রতিষ্ঠানের গ্রাম/হোল্ডিং/এলাকা ইংরেজিতে প্রদান করুন"
                                                                type="text"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonInputField
                                                                label="মূলধন সংখ্যায় (ইংরেজিতে)"
                                                                placeholder="আপনার মূলধন সংখ্যায় ইংরেজিতে প্রদান করুন"
                                                                type="number"
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonSelectTag
                                                                label="ঠিকানার ধরণ"
                                                                option="আপনার ঠিকানার ধরণ প্রদান করুন"
                                                                options={[]}
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonSelectTag
                                                                label="বিভাগ"
                                                                option="আপনার বিভাগ প্রদান করুন"
                                                                options={[]}
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonSelectTag
                                                                label="জেলা"
                                                                option="আপনার জেলা প্রদান করুন"
                                                                options={[]}
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonSelectTag
                                                                label="থানা / উপজেলা"
                                                                option="আপনার থানা / উপজেলা প্রদান করুন"
                                                                options={[]}
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonSelectTag
                                                                label="ডাকঘর"
                                                                option="আপনার ডাকঘর প্রদান করুন"
                                                                options={[]}
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonSelectTag
                                                                label="সিটি কর্পোরেশন"
                                                                option="আপনার সিটি কর্পোরেশন প্রদান করুন"
                                                                options={[]}
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <CommonSelectTag
                                                                label="ওয়ার্ড নং"
                                                                option="আপনার ওয়ার্ড নং প্রদান করুন"
                                                                options={[]}
                                                                isRequired={true}
                                                            />
                                                        </div>

                                                        <div className="col-md-12 text-end">
                                                            <CommonButton
                                                                buttonText="সম্পূর্ণ করুন"
                                                                icon="fa fa-check"
                                                                onClick={handleButtonClick}
                                                            />
                                                        </div>
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
                                                স্বত্ত্বাধিকারীর তথ্য
                                            </h6>
                                        </div>
                                        <div className='p-3'>
                                            <div className="row">
                                                <div className="col-md-5 border">
                                                    <small>নাম (বাংলায়)</small>
                                                </div>
                                                <div className="col-md-7 border">
                                                    <small>মোহাম্মদ সোহরাব হোসাইন</small>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5 border">
                                                    <small>নাম (ইংরেজিতে)</small>
                                                </div>
                                                <div className="col-md-7 border">
                                                    <small>Mohammad Sohrab Hossain</small>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5 border">
                                                    <small>জাতীয় পরিচয়পত্র / জন্ম নিবন্ধন নং</small>
                                                </div>
                                                <div className="col-md-7 border">
                                                    <small>3302894914</small>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5 border">
                                                    <small>বর্তমান ঠিকানা (বাংলায়)</small>
                                                </div>
                                                <div className="col-md-7 border">
                                                    <small>১২-এ/৯, , ব্লক-এফ, ৩৩, মোহাম্মদপুর (১২০৭), ঢাকা উত্তর সিটি কর্পোরেশন, মোহাম্মদপুর, ঢাকা, ঢাকা।</small>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5 border">
                                                    <small>বর্তমান ঠিকানা (ইংরেজিতে)</small>
                                                </div>
                                                <div className="col-md-7 border">
                                                    <small>12-A/9, , Block-F, 33, Mohammadpur (1207), Dhaka North City Corporation, Mohammadpur , Dhaka , DHAKA.</small>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5 border">
                                                    <small>স্থায়ী ঠিকানা (বাংলায়)</small>
                                                </div>
                                                <div className="col-md-7 border">
                                                    <small>কর্নপাড়া, কাদরা, , ৯, চিতোষী বাজার (৩৬২৩), চিতষী পূর্ব ইউনিয়ন, শাহরাস্তি, চাঁদপুর, চট্টগ্রাম।</small>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5 border">
                                                    <small>স্থায়ী ঠিকানা (ইংরেজিতে)</small>
                                                </div>
                                                <div className="col-md-7 border">
                                                    <small> Kornopara, Kadra, , 9, Chitoshi Bazar (3623), Chitoshi east Union, Shahrasti, Chandpur, CHITTAGONG.</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-items rounded">
                                        <div className='p-3 text-center custom-border'>
                                            <h6 className="text-center text-secondary" style={{ fontSize: '1.3rem' }}>
                                                নির্দেশনা
                                            </h6>
                                        </div>
                                        <div className='p-3'>
                                            <ul>
                                                <li>স্বত্ত্বাধিকারীর তথ্য ও প্রদানকৃত ব্যবসা প্রতিষ্ঠানের তথ্য অনুযায়ী ট্রেড লাইসেন্স তৈরি হবে।</li>
                                                <li>অনুগ্রহ করে সঠিক তথ্য প্রদান করুন।</li>
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

export default TradeLicense;