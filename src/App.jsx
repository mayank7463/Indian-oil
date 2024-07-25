import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import IndianOil from './Pages/IndianOil/IndianOil'
import DiversePortfolio from './Pages/DiversePortfolio/DiversePortfolio'
import ChairmanMessage from './Pages/ChairmanMessage/ChairmanMessage'
import Governance from './Pages/Governance/Governance'
import BusinessModel from './Pages/BusinessModel/BusinessModel'
import MaterialityAssessment from './Pages/MaterialityAssessment/MaterialityAssessment'

function App() {
  return (
    <div>
         <Navbar/>
         {/* <IndianOil/>
         <DiversePortfolio/> */}
         {/* <ChairmanMessage/> */}
         {/* <Governance/> */}
         {/* <BusinessModel/> */}
         <MaterialityAssessment/>
         <Footer/>
    </div>
  )
}

export default App
