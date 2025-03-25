import React from 'react'
import PageHeader from '../../../utils/PageHeader';
import CommonInputField from '../../../components/CommonInputField';
import CommonButton from '../../../components/CommonButton';

const ApplicationStatus = () => {
    return (
        <div className="container">
            <PageHeader title="আবেদনের অবস্থা" header="আবেদনের অবস্থা জানুন" />

            <div className="container">
                <div className="col-md-12">
                    <div className="wow fadeInUp border shadow-sm rounded bg-white p-5" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">

                            <form className='px-5 py-5'>
                                <h6 className='mb-4 text-primary'> <i className="fa fa-info-circle"></i> কাউন্সিলর/চেয়ারম্যান অফিসে আপনার আবেদনের অবস্থা জানতে নিচে আবেদন আইডি দিয়ে খুঁজুন।</h6>
                                <div className="row g-3">

                                    <div className="col-md-10">
                                        <CommonInputField
                                            label="আবেদন আইডি নং"
                                            placeholder="আবেদন আইডি নং লিখুন"
                                            onChange={() => { }}
                                            type="text"
                                            isRequired={true}
                                        />
                                    </div>


                                    <div className="col-md-2 mt-5">
                                        <CommonButton
                                            icon="fa fa-search"
                                            buttonText="খুঁজুন"
                                        />
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ApplicationStatus;