import React, { useState } from 'react'
import PageHeader from '../../../utils/PageHeader'
import CommonSelectTag from '../../../components/CommonSelectTag';
import CommonInputField from '../../../components/CommonInputField';
import CommonTextArea from '../../../components/CommonTextArea';
import { useGetDivisionQuery } from "../../../features/apiSlice";

const Contact = () => {
    const [selectAddressType, setSelectAddressType] = useState(1);

    const handleAddressTypeChange = (e) => {
        const selectedAddressType = e.target.value;
        setSelectAddressType(+selectedAddressType);
    };

    const { data } = useGetDivisionQuery();


    return (
        <div className="container">
            <PageHeader title="যোগাযোগ" header="যোগাযোগ করুন" />

            <div className="container">
                <div className="col-md-12">
                    <div className="wow fadeInUp shadow-lg rounded bg-white p-4" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">

                            <div className="row g-3 border-rounded mb-3 py-3 custom-card">

                                <div className="col-md-4">
                                    <p>
                                        <i className="fa fa-envelope"></i>
                                        {" "}
                                        <strong>ই-মেইল:</strong>
                                        {" "}
                                        <a href="mailto:prottoyon@olivineltd.com" target="_blank" rel="noreferrer">prottoyon@olivineltd.com</a>
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p>
                                        <i class="fab fa-facebook-f"></i>
                                        {" "}
                                        <strong>ফেসবুক:</strong>
                                        {" "}
                                        <a href="https://fb.com/prottoyon" target="_blank" rel="noreferrer">fb.com/prottoyon</a>
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p>
                                        <i className="fa fa-phone"></i>
                                        {" "}
                                        <strong>হেল্পডেস্ক:</strong>
                                        {" "}
                                        <a href="http://tickets.olivineltd.com/" target="_blank" rel="noreferrer">প্রত্যয়ন সার্ভিস সেন্টার</a>
                                    </p>
                                </div>

                            </div>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <CommonSelectTag
                                            label="বিভাগ"
                                            option="বিভাগ নির্বাচন করুন"
                                            options={data?.map((item) => {
                                                return {
                                                    value: item.id,
                                                    bName: item.divisionNameBn,
                                                    eName: item.divisionNameEng
                                                }
                                            })}
                                            onChange={() => { }}
                                            isRequired={true}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <CommonSelectTag
                                            label="জেলা"
                                            option="জেলা নির্বাচন করুন"
                                            options={[]}
                                            onChange={() => { }}
                                            isRequired={true}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <CommonSelectTag
                                            label="ঠিকানার ধরন"
                                            option="ঠিকানার ধরন নির্বাচন করুন"
                                            options={[
                                                { value: 1, bName: "সিটি কর্পোরেশন", eName: "City Corporation" },
                                                { value: 2, bName: "পৌরসভা", eName: "Municipality" },
                                            ]}
                                            onChange={handleAddressTypeChange}
                                            isRequired={true}
                                        />
                                    </div>

                                    {
                                        selectAddressType === 1 ?
                                            <div className="col-md-6">
                                                <CommonSelectTag
                                                    label="সিটি কর্পোরেশন"
                                                    option="সিটি কর্পোরেশন নির্বাচন করুন"
                                                    options={[]}
                                                    isRequired={true}
                                                />
                                            </div>
                                            :
                                            selectAddressType === 2 ?
                                                <div className="col-md-6">
                                                    <CommonSelectTag
                                                        label="পৌরসভা"
                                                        option="পৌরসভা নির্বাচন করুন"
                                                        options={[]}
                                                        onChange={() => { }}
                                                        isRequired={true}
                                                    />
                                                </div>
                                                : null

                                    }


                                    <div className="col-md-6">
                                        <CommonInputField
                                            label="নাম"
                                            placeholder="নাম"
                                            type="text"
                                            isRequired={true}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <CommonInputField
                                            label="ই-মেইল ঠিকানা"
                                            placeholder="ই-মেইল ঠিকানা"
                                            type="email"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <CommonInputField
                                            label="মোবাইল নাম্বার"
                                            placeholder="মোবাইল নাম্বার"
                                            type="text"
                                            isRequired={true}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <CommonInputField
                                            label="যোগাযোগের বিষয়"
                                            placeholder="যোগাযোগের বিষয়"
                                            type="text"
                                            isRequired={true}
                                        />
                                    </div>

                                    <div className="col-12">
                                        <CommonTextArea
                                            label="বিস্তারিত বার্তা"
                                            placeholder="বিস্তারিত বার্তা"
                                            type="text"
                                            isRequired={true}
                                            cols={1}
                                            rows={5}
                                        />
                                    </div>

                                    <div className="col-12 text-end">
                                        <button className="btn btn-primary">
                                            <i className="fa fa-envelope"></i> বার্তা প্রেরণ করুন
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Contact;