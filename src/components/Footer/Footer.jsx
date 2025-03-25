import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="container-fluid bg-light text-dark footer pt-3 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="https://prottoyon.gov.bd/" target="_blank" rel="noreferrer">
                {new Date().getFullYear()}
              </a>
            </div>
            <div className="col-md-6 text-center text-start text-md-end">
              <div className="footer-menu">
                <a href="/" className="pe-2 border-end border-2 border-primary">
                  <Link to="/contact">
                    যোগাযোগ
                  </Link>
                </a>
                <a href="/" className="pe-2 border-end border-2 border-primary">
                  <Link to="/privacy-policy">
                    গোপনীয়তার নীতিমালা
                  </Link>
                </a>
                <a href="/" className="pe-2 border-end border-2 border-primary">
                  <Link to="/terms">
                    ব্যবহারের শর্তাবলি
                  </Link>
                </a>
                <a href="/" className="pe-2 border-end border-2 border-primary">
                  <Link to="/faq">
                    সচরাচর জিজ্ঞাসা
                  </Link>
                </a>
                <a href="/" className="pe-2">
                  <Link to="/sitemap">
                    সাইট ম্যাপ
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer