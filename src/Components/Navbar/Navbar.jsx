import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='logo flex justify-center items-center'>
          <img src="Navbar/indianOil.svg" alt="logo" className='w-[40%]' />
        </div>
        <label htmlFor="menubrop" className="bartoggle">≡</label>
        <input type="checkbox" id="menubrop" />
        <ul className="NavMenu">
          <li><a href="#">Home</a></li>
          <li>
            <a href="javascript:void(0)"><label htmlFor="droplist1" className="toggle">Corporate Overview</label></a>
            <input type="checkbox" id="droplist1" />
            <ul className="left-open">
              <li><a href="#">Performance Highlights</a></li>
              <li><a href="#">Introducing IndianOil</a></li>
              <li><a href="#">Diverse Portfolio</a></li>
              <li><a href="#">Chairman’s Message</a></li>
              <li><a href="#">Governance of Risks</a></li>
              <li><a href="#">Business Model</a></li>
              <li><a href="#">Materiality Assessment</a></li>
              <li><a href="#">Stakeholder Engagement</a></li>
              <li><a href="#">Governance</a></li>
              <li><a href="#">Energised Leadership Team</a></li>
              <li><a href="#">Stakeholder Engagement</a></li>
              <li><a href="#">Board Profile</a></li>
              <li><a href="#">Sustainable Development Goals</a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)"><label htmlFor="droplist2" className="toggle">Description of Capitals</label></a>
            <input type="checkbox" id="droplist2" />
            <ul className="left-open">
              <li><a href="#">Financial Capital</a></li>
              <li><a href="#">Manufactured Capital</a></li>
              <li><a href="#">Intellectual Capital</a></li>
              <li><a href="#">Social and Relationship Capital</a></li>
              <li><a href="#">Human Capital</a></li>
              <li><a href="#">Natural Capital</a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)"><label htmlFor="droplist3" className="toggle">Statutory Information</label></a>
            <input type="checkbox" id="droplist3" />
            <ul className="left-open">
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Statutory Reports</a></li>
              <li><a href="#">Financial Statements</a></li>
              <li><a href="#">Consolidated</a></li>
              <li><a href="#">Notice</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
