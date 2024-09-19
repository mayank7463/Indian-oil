import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import IndianOil from './Pages/IndianOil/IndianOil'
import DiversePortfolio from './Pages/DiversePortfolio/DiversePortfolio'
import ChairmanMessage from './Pages/ChairmanMessage/ChairmanMessage'
import BusinessModel from './Pages/BusinessModel/BusinessModel'
import MaterialityAssessment from './Pages/MaterialityAssessment/MaterialityAssessment'
import EnergisedLeadership from './Pages/EnergisedLeadership/EnergisedLeadership'
import BoardProfile from './Pages/BoardProfile/BoardProfile'
import SDG from './Pages/SDG/SDG'
import FinancialCapital from './Pages/FinancialCapital/FinancialCapital'
import Awards from './Pages/Awards/Awards'
import GovernanceOfRisk from './Pages/GovernanceOfRisk/GovernanceOfRisk'
import Governance from './Pages/Governance/Governance'
import PerformanceHigh from './Pages/PerformanceHigh/PerformanceHigh'
import StakeholderEngagement from './Pages/StakeholderEngagement/StakeholderEngagement'
import ManufacturedCapital from './Pages/ManufacturedCapital/ManufacturedCapital'
import NaturalCapital from './Pages/NaturalCapital/NaturalCapital'
import HumanCapital from './Pages/HumanCapital/HumanCapital'
import IntellectualCapital from './Pages/IntellectualCapital/IntellectualCapital'
import SRCapital from './Pages/SRCapital/SRCapital'
import LandingPage from './Pages/Landingpage/Landingpage'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import PositiveEnergy from './Pages/PositiveEnergy/PositiveEnergy'
import BoardProfileHindi from './Pages/BoardProfile/BoardProfileHindi'
import SDGHindi from './Pages/SDG/SdgHindi'
import EnergisedLeadershipHindi from './Pages/EnergisedLeadership/EnergisedLeadHindi.jsx/EnergisedLeadershiphindi'
import GovernanceHindi from './Pages/Governance/GovernanceHindi'
import StakeholderEngagementHindi from './Pages/StakeholderEngagement/StakeholderEngagmentHindi'
import MaterialityAssessmentHindi from './Pages/MaterialityAssessment/MaterialityAspectHindi'
import BusinessModelHindi from './Pages/BusinessModel/BuisnessModelHindi'
import SRCapitalHindi from './Pages/SRCapital/SRCapitalHindi'
import HumanCapitalHindi from './Pages/HumanCapital/HumanCapitalHindi'
import NaturalCapitalHindi from './Pages/NaturalCapital/NaturalCapitalHindi'

function App() {
  const [hindi,SetHindi]=useState(true);
  return (
    <>
      <BrowserRouter>
      <Navbar/>
         <div>
                <Routes>
                      <Route path='/' element={<LandingPage hindi={hindi}/>}/>
                      <Route path='/board-profile' element={!hindi?<BoardProfile/>:<BoardProfileHindi/>}/>
                      <Route path='/bussiness-model' element={!hindi?<BusinessModel/>:<BusinessModelHindi/>}/>
                      <Route path='/diverse-portfolio' element={<DiversePortfolio/>}/>
                      <Route path='/chairman-messages' element={<ChairmanMessage/>}/>
                      <Route path='/energised-leadership' element={ !hindi?<EnergisedLeadership/>:<EnergisedLeadershipHindi/>}/>
                      <Route path='/financial-capital' element={<FinancialCapital/>}/>
                      <Route path='/governance' element={!hindi? <Governance/>:<GovernanceHindi/>}/>
                      <Route path='/awards' element={<Awards/>}/>
                      <Route path='/governance-of-risk' element={<GovernanceOfRisk/>}/>
                      <Route path='/Human-Capital' element={ !hindi?<HumanCapital/>:<HumanCapitalHindi/>}/>
                      <Route path='/indian-oil' element={<IndianOil/>}/>
                      <Route path='/intellectual-capital' element={<IntellectualCapital/>}/>
                      <Route path='/manufactured-capital' element={<ManufacturedCapital/>}/>
                      <Route path='/sdg' element={!hindi?<SDG/>:<SDGHindi/>}/>
                      <Route path='/materiality-assessment' element={ !hindi?<MaterialityAssessment/>:<MaterialityAssessmentHindi/>}/>
                      <Route path='/natural-capital' element={!hindi?<NaturalCapital/>:<NaturalCapitalHindi/>}/>
                      <Route path='/performance-higlights' element={<PerformanceHigh/>}/>
                      <Route path='/social-capital' element={!hindi? <SRCapital/>:<SRCapitalHindi/>}/>
                      <Route path='/stakeholder-engagement' element={!hindi? <StakeholderEngagement/>:<StakeholderEngagementHindi/>}/>
                      <Route path='/positive-energy' element={<PositiveEnergy/>}/>
                </Routes>
         </div>
      <Footer/>
      </BrowserRouter>
     </>
  )
}

export default App
