import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsConditionsPage = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | ResearchSat';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-conditions-page">
      {/* Header */}
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Terms & Conditions</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className="container">
        <hr className="mt-5 mb-5" style={{ borderColor: '#ef3b47' }} />
      </div>

      {/* Terms Content */}
      <div className="ex-basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="text-container">
                <h3>Limitations Of Liability</h3>
                <p>
                  ResearchSat also automatically collects and receives certain information from your computer or mobile device, including the activities you perform on our Website, the Platforms, and the Applications, the type of hardware and software you are using (for example, your operating system or browser), and information obtained from cookies. For example, each time you visit the Website or otherwise use the Services, we automatically collect your IP address, browser and device type, access times, the web page from which you came, the regions from which you navigate the web page, and the web page(s) you access (as applicable).
                </p>
                <p>
                  When you first register for a ResearchSat account, and when you use the Services, we collect some <Link className="turquoise" to="#your-link">Personal Information</Link> about you such as:
                </p>
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

              <div className="text-container">
                <h3>Terms And Conditions</h3>
                <p>
                  Under no circumstances shall ResearchSat be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if ResearchSat or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.
                </p>
              </div>

              <div className="text-container">
                <h3>Copyright & Intellectual Property</h3>
                <p>
                  All our templates inherit the GNU general public license from HTML. All .PSD & CSS files are packaged separately and are not licensed under the GPL 2.0. Instead, these files inherit ResearchSat License. These files are given to all Clients on a personal use basis. You may not offer them, <Link className="turquoise" to="#your-link">modified or unmodified</Link>, for redistribution or resale of any kind. You can't use one of our themes on a HTML domain. More on HTML Vs CSS, you can read here. You can use our templates do develop sites for your clients.
                </p>
                <p>
                  Services help our customers promote their products and services, marketing and advertising; engaging audiences; scheduling and publishing messages; and analyze the results.
                </p>
              </div>

              <div className="text-container">
                <h3>Designer Membership And How It Applies</h3>
                <p>
                  By using any of the Services, or submitting or collecting any Personal Information via the Services, you consent to the collection, transfer, storage disclosure, and use of your Personal Information in the manner set out in this Privacy Policy. If you do not consent to the use of your Personal Information in these ways, please stop using the Services.
                </p>
              </div>

              <div className="text-container last">
                <h3>Cookies and Tracking Technologies</h3>
                <p>
                  ResearchSat uses tracking technology on our website, in the Applications, and in the Platforms, including mobile application identifiers and a unique ResearchSat user ID to help us recognize you across different Services, to monitor usage and web traffic routing for the Services, and to customize and improve the Services. By visiting ResearchSat or using the Services you agree to the use of cookies in your browser and HTML-based emails. Cookies are small text files placed on your device when you visit a <Link className="turquoise" to="#your-link">web site</Link> in order to track use of the site and to improve your user experience.
                </p>
                <Link className="btn-outline-reg" to="/">BACK</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="ex-basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumbs">
                <Link to="/">Home</Link><i className="fa fa-angle-double-right"></i><span>Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
