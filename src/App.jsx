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
import IndianOilHindi from './Pages/IndianOil/IndianOilHindi'
import LanguageToggle from './Components/LanguageToggle/LanguageToggle'
import PerfomanceHighHindi from './Pages/PerformanceHigh/PerfomanceHighHindi'
import DiversePortfolioHindi from './Pages/DiversePortfolio/DiversePortfolioHindi'
import ChairManMessageHindi from './Pages/ChairmanMessage/ChairManMessageHindi'
import GovernanceCapHindi from './Pages/GovernanceOfRisk/GovernanceCapHindi'
import FinancialCapHindi from './Pages/FinancialCapital/FinancialCapHindi'
import ManufactureCapitalHindi from './Pages/ManufacturedCapital/ManufactureCapitalHindi'
import IntellectualCapitalHindi from './Pages/IntellectualCapital/IntellectualCapitalHindi'

function App() {
  const [hindi,SetHindi]=useState(false);
  const handleToggleChange = () => {
    SetHindi(!hindi); // Toggle between Hindi and English
  };

  return (
    
    <>
      <BrowserRouter>
      <Navbar/>
      <LanguageToggle 
        hindi={hindi} 
        onToggleChange={handleToggleChange} 
      />
         <div>
                <Routes>
                      <Route path='/' element={<LandingPage hindi={hindi}/>}/>
                      <Route path='/board-profile' element={!hindi?<BoardProfile/>:<BoardProfileHindi/>}/>
                      <Route path='/bussiness-model' element={<BusinessModel/>}/>
                      <Route path='/diverse-portfolio' element={!hindi?<DiversePortfolio/>:<DiversePortfolioHindi/>}/>
                      <Route path='/chairman-messages' element={!hindi?<ChairmanMessage/>:<ChairManMessageHindi/>}/>
                      <Route path='/energised-leadership' element={<EnergisedLeadership/>}/>
                      <Route path='/financial-capital' element={!hindi?<FinancialCapital/>:<FinancialCapHindi/>}/>
                      <Route path='/governance' element={<Governance/>}/>
                      <Route path='/awards' element={<Awards/>}/>
                      <Route path='/governance-of-risk' element={!hindi?<GovernanceOfRisk/>:<GovernanceCapHindi/>}/>
                      <Route path='/Human-Capital' element={<HumanCapital/>}/>
                      <Route path='/indian-oil' element={!hindi?<IndianOil/>:<IndianOilHindi/>}/>
                      <Route path='/intellectual-capital' element={!hindi?<IntellectualCapital/>:<IntellectualCapitalHindi/>}/>
                      <Route path='/manufactured-capital' element={!hindi?<ManufacturedCapital/>:<ManufactureCapitalHindi/>}/>
                      <Route path='/sdg' element={<SDG/>}/>
                      <Route path='/materiality-assessment' element={<MaterialityAssessment/>}/>
                      <Route path='/natural-capital' element={<NaturalCapital/>}/>
                      <Route path='/performance-higlights' element={!hindi?<PerformanceHigh/>:<PerfomanceHighHindi/>}/>
                      <Route path='/social-capital' element={<SRCapital/>}/>
                      <Route path='/stakeholder-engagement' element={<StakeholderEngagement/>}/>
                      <Route path='/positive-energy' element={<PositiveEnergy/>}/>
                </Routes>
         </div>
      <Footer/>
      </BrowserRouter>
     </>
  )
}

export default App
