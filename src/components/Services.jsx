import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div id="services">
      <div className="footer" style={{ backgroundColor: '#17232e', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#ff3241', paddingBottom: '0.7rem' }}>Microgravity Research Services</h3>
              <p className="p-heading p-large">
                From <Link style={{ textDecoration: 'none', color: 'white', borderBottom: '1px solid #ff3241', fontWeight: '400' }} to="/payloads">tailor-made satellite payloads</Link> to a
                <Link style={{ textDecoration: 'none', color: 'white', borderBottom: '1px solid #ff3241', fontWeight: '400' }} to="/missions">range of space mission types</Link> to provide a seamless, end-to-end Space Research Solutions
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-4">
              <div className="footer-col">
                <img src="/src/assets/images/svr2.jpg" alt="Company Logo-image" width="360px" height="auto" />
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="footer-col middle">
                <h4>Satellite Payloads</h4>
                <p>Innovative Payload Solutions for Life-Changing Discoveries with custom payloads tailored to your unique space biology research needs</p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media" style={{ fontWeight: 600, textDecoration: 'underline' }}>
                    <div className="media-body">Payload Type</div> R&D Interest
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Microbe Culture</div> AMR Research
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Protein Crystallization</div> Novel Drug
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Double Emulsion</div> Drug Delivery
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Cell Culture</div> Bioreactor
                  </li>
                  <li style={{ paddingTop: '2rem' }}>
                    <Link className="btn-solid-reg callAction" to="/payloads">Payloads</Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="footer-col middle">
                <h4>Space Missions</h4>
                <p>Space missions tailored to your research objectives with a choice from a range of mission durations and types to best suit your space biology research"</p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media" style={{ fontWeight: 600, textDecoration: 'underline' }}>
                    <div className="media-body">Mission Type</div> Duration
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Atmospheric Misssions</div> - 9 sec
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Sub-Orbital Missions</div> - 9 min
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Orbital Missions</div> - 9 weeks
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">ISS Missions</div> - 9 months
                  </li>
                  <li style={{ paddingTop: '2rem' }}>
                    <Link className="btn-solid-reg callAction" to="/missions">Missions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
