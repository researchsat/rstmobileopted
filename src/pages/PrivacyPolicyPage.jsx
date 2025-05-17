import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | ResearchSat';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy-page">
      {/* Header */}
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Privacy Policy</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className="container">
        <hr className="mt-5 mb-5" style={{ borderColor: '#ef3b47' }} />
      </div>

      {/* Privacy Content */}
      <div className="ex-basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="text-container">
                <h3>Private Data We Receive And Collect</h3>
                <p>
                  ResearchSat also automatically collects and receives certain information from your computer or mobile device, including the activities you perform on our Website, the Platforms, and the Applications, the type of hardware and software you are using (for example, your operating system or browser), and information obtained from cookies. For example, each time you visit the Website or otherwise use the Services, we automatically collect your IP address, browser and device type, access times, the web page from which you came, the regions from which you navigate the web page, and the web page(s) you access (as applicable).
                </p>
                <p>
                  When you first register for a ResearchSat account, and when you use the Services, we collect some <Link className="turquoise" to="#your-link">Personal Information</Link> about you such as:
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled li-space-lg indent">
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">The geographic area where you use your computer and mobile devices</div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">Your full name, username, and email address and other contact details</div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">A unique ResearchSat user ID (an alphanumeric string) which is assigned to you upon registration</div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">Other optional information as part of your account profile</div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">Your IP Address and, when applicable, timestamp related to your consent and confirmation of consent</div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">Other information submitted by you or your organizational representatives via various methods</div>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <ul className="list-unstyled li-space-lg indent">
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">Your billing address and any necessary other information to complete any financial transaction, and when making purchases through the Services, we may also collect your credit card or PayPal information</div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">User generated content (such as messages, posts, comments, pages, profiles, images, feeds or communications exchanged on the Supported Platforms)</div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">Images or other files that you may publish via our Services</div>
                      </li>
                      <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">Information (such as messages, posts, comments, pages, profiles, images) we may receive relating to communications you send us, such as queries or comments concerning</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-container">
                <h3>How We Use ResearchSat Website Data</h3>
                <p>ResearchSat website uses visitors' data for the following general purposes:</p>
                <ol className="li-space-lg">
                  <li>To identify you when you login to your account</li>
                  <li>To enable us to operate the Services and provide them to you</li>
                  <li>To verify your transactions and for purchase confirmation, billing, security, and authentication (including security tokens for communication with installed)</li>
                  <li>To analyze the Website or the other Services and information about our visitors and users, including research into our user demographics and user behaviour in order to improve our content and Services</li>
                  <li>To contact you about your account and provide customer service support, including responding to your comments and questions</li>
                  <li>To share aggregate (non-identifiable) statistics about users of the Services to prospective advertisers and partners</li>
                  <li>To keep you informed about the Services, features, surveys, newsletters, offers, surveys, newsletters, offers, contests and events we think you may find useful or which you have requested from us</li>
                  <li>To sell or market ResearchSat products and services to you</li>
                  <li>To better understand your needs and the needs of users in the aggregate, diagnose problems, analyze trends, improve the features and usability of the Services, and better understand and market to our customers and users</li>
                  <li>To keep the Services safe and secure</li>
                  <li>We also use non-identifiable information gathered for statistical purposes to keep track of the number of visits to the Services with a view to introducing improvements and improving usability of the Services.</li>
                </ol>
              </div>

              <div className="text-container">
                <h3>Information Security And Accuracy</h3>
                <p>
                  We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet or email transmission is ever fully secure or error-free. In particular, email sent to or from the Services may not be secure. Therefore, you should take special care in deciding what information you send to us via email. Please keep this in mind when disclosing any information to ResearchSat via the Internet. In addition, we are not responsible for circumvention of any privacy settings or security measures contained on the Website, or third party websites.
                </p>
                <p>
                  We take all reasonable steps to ensure that the data we collect is reliable for its intended use, accurate, complete and up to date. You can always contact us in order to update your information, request access to it, or request its deletion.
                </p>
              </div>

              <div className="text-container">
                <h3>Changes to this Privacy Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. If we make significant changes in the way we treat your personal information, or to the Privacy Policy, we will provide notice to you on the Services or by some other means, such as email. The most current version of the Privacy Policy will govern our use of your information and will be available on the Website. By continuing to use the Services after those changes become effective, you agree to be bound by the revised Privacy Policy.
                </p>
              </div>

              <div className="text-container last">
                <h3>Contact Us</h3>
                <p>
                  If you have any questions or concerns about this Privacy Policy or its implementation, please contact us at <a href="mailto:info@researchsat.space" className="turquoise">info@researchsat.space</a>.
                </p>
                <p>
                  This Privacy Policy was last updated on <strong>January 1, 2023</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
