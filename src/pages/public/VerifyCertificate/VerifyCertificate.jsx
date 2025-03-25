import React from 'react'
import PageHeader from '../../../utils/PageHeader';
import CommonInputField from '../../../components/CommonInputField';
import CommonButton from '../../../components/CommonButton';

const VerifyCertificate = () => {
    return (
        <div className="container">
            <PageHeader title="সনদ যাচাই" header="সনদ যাচাই করুন" />

            <div className="container">
                <div className="col-md-12">
                    <div className="wow fadeInUp border shadow-sm rounded bg-white p-5" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">

                            <form className='px-5 py-5'>
                                <div className="row g-3">

                                    <div className="col-md-10">
                                        <CommonInputField
                                            label="আবেদন আইডি নং / সনদ নং"
                                            placeholder="আবেদন আইডি নং / সনদ নং লিখুন"
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

export default VerifyCertificate;