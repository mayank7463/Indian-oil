import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTimes, faChevronRight, faChevronLeft, faBars, faCloudDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const openLevel = (event) => {
        const $openLevel = event.currentTarget;
        const $navLevel = $openLevel.nextSibling;
        $navLevel.classList.add('isOpen');
    };

    const closeLevel = (event) => {
        const $closeLevel = event.currentTarget;
        const $navLevel = $closeLevel.closest('.js-pushNavLevel');
        $navLevel.classList.remove('isOpen');
    };

    const closePushNav = () => {
        setIsOpen(false);
        document.body.classList.remove('pushNavIsOpen');
    };

    const handleMenuItemClick = () => {
        closePushNav();
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navnav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="wrapper">
                    <Link to={"/"} className="logo">
                        <img src="./Navbar/indian-oil.svg" alt="Logo" className='w-[19%]' />
                    </Link>
                    <div className="burger js-menuToggle" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faBars} size="2x" color='black' />
                    </div>
                </div>
                <div className="nav-background" />
                <ul className={`pushNav js-topPushNav ${isOpen ? 'isOpen' : ''}`}>
                    <li className="closeLevel js-closeLevelTop hdg" onClick={closePushNav}>
                        <FontAwesomeIcon icon={faTimes} /> Close
                    </li>
                    <li>
                        <Link to="/" onClick={handleMenuItemClick}>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="indian-oil" onClick={handleMenuItemClick}>Introducing IndianOil</Link>
                    </li>
                    <li>
                        <Link to="/performance-higlights" onClick={handleMenuItemClick}>Performance Highlights</Link>
                    </li>
                    <li>
                        <Link to="/diverse-portfolio" onClick={handleMenuItemClick}>Diverse Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/chairman-messages" onClick={handleMenuItemClick}>Chairman’s Message</Link>
                    </li>
                    <li>
                        <Link to="/governance-of-risk" onClick={handleMenuItemClick}>Governance of Risks</Link>
                    </li>
                    <li>
                        <Link to="/bussiness-model" onClick={handleMenuItemClick}>Business Model</Link>
                    </li>
                    <li>
                        <Link to="/materiality-assessment" onClick={handleMenuItemClick}>Materiality Assessment</Link>
                    </li>
                    <li>
                        <Link to="/stakeholder-engagement" onClick={handleMenuItemClick}>Stakeholder Engagement</Link>
                    </li>
                    <li>
                        <Link to="/governance" onClick={handleMenuItemClick}>Governance</Link>
                    </li>
                    <li>
                        <Link to="/energised-leadership" onClick={handleMenuItemClick}>Energised Leadership Team</Link>
                    </li>
                    <li>
                        <Link to="/board-profile" onClick={handleMenuItemClick}>Board Profile</Link>
                    </li>
                    <li>
                        <Link to="/sdg" onClick={handleMenuItemClick}>Sustainable Development Goals</Link>
                    </li>
                    <hr />
                    <li>
                        <div className="openLevel js-openLevel font-medium text-[#433f3f]" onClick={openLevel}>
                        Description of Capitals <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                        <ul className="pushNav pushNav_level js-pushNavLevel">
                            <li className="closeLevel js-closeLevel hdg" onClick={closeLevel}>
                                <FontAwesomeIcon icon={faChevronLeft} /> Go Back
                            </li>
                            <li>
                                <Link to="/financial-capital" target='_blank' onClick={handleMenuItemClick}>
                                     Financial Capital
                                </Link>
                            </li>
                            <li>
                                <Link to="/manufactured-capital" target='_blank' onClick={handleMenuItemClick}>
                                Manufactured Capital
                                </Link>
                            </li>
                            <li>
                                <Link to="/intellectual-capital" target='_blank' onClick={handleMenuItemClick}>
                                Intellectual Capital
                                </Link>
                            </li>
                            <li>
                                <Link to="/social-capital" target='_blank' onClick={handleMenuItemClick}>
                                Social and Relationship Capital
                                </Link>
                            </li>
                            <li>
                                <Link to="/Human-Capital" target='_blank' onClick={handleMenuItemClick}>
                                Human Capital
                                </Link>
                            </li>
                            <li>
                                <Link to="/natural-capital" target='_blank' onClick={handleMenuItemClick}>
                                Natural Capital
                                </Link>
                            </li>
                            <li>
                                <Link to="/awards" target='_blank' onClick={handleMenuItemClick}>
                                Awards & Accolades
                                </Link>
                            </li>
                        </ul>
                    </li> 
                          {/* <li>
                                <Link to="./docs/Abans Holdings AR 2023-24 Revised-swRY0nk3-99-135.pdf" target='_blank' onClick={handleMenuItemClick}>
                                    Standalone Financial Statements with Auditor’s Report
                                </Link>
                            </li> */}
                    <li>
                        <Link className="openLevel js-openLevel font-medium " to={"https://www.iocl.com/download/spreadAnnualReport202324.pdf"} target='_blank' >
                        Corporate Information <FontAwesomeIcon icon={faCloudDownload} />
                        </Link>
                        <Link className="openLevel js-openLevel font-medium " to={"https://www.iocl.com/download/spreadAnnualReport202324.pdf"} target='_blank' >
                        Statutory Reports <FontAwesomeIcon icon={faCloudDownload} />
                        </Link>
                        <Link className="openLevel js-openLevel font-medium " to={"https://www.iocl.com/download/spreadAnnualReport202324.pdf"} target='_blank' >
                        Financial Statements <FontAwesomeIcon icon={faCloudDownload} />
                        </Link>
                        <Link className="openLevel js-openLevel font-medium " to={"https://www.iocl.com/download/spreadAnnualReport202324.pdf"} target='_blank' >
                            Download Full Report <FontAwesomeIcon icon={faCloudDownload} />
                        </Link>
                    </li>
                </ul>
            </nav>
            <span className="screen" onClick={closePushNav}></span>
        </>
    );
};

export default Navbar;
