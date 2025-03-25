import React, { useState } from 'react'
import PageHeader from '../../../utils/PageHeader';
import faqData from '../../../data/faqData';
import './FAQ.css';

const AccordionItem = ({ title, content, isActive, onClick, index }) => {
    return (
        <div className={`accordion-item ${isActive ? "active" : ""}`}>
            <div className="accordion-header" onClick={onClick}>
                {index + 1}. {title}
                <span className="icon">
                    <i className={`fas ${isActive ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </span>
            </div>
            <div className="accordion-content" style={{ maxHeight: isActive ? "200px" : "0" }}>
                <p>{content}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container">
            <PageHeader title="প্রশ্নাত্তোর" header="সচরাচর জিজ্ঞাসা" />
            <div className="container">
                <div className="col-md-12">
                    <div className="wow fadeInUp shadow-lg rounded bg-white p-4" data-wow-delay="0.1s">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion">
                                    {faqData.map((item, index) => (
                                        <AccordionItem
                                            key={index}
                                            title={item.question}
                                            content={item.answer}
                                            isActive={activeIndex === index}
                                            onClick={() => handleClick(index)}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FAQ;