import React from 'react'

function MaterialityAssessment() {
  return (
    <div className='marginal'>
         <div className='bg-[#feeee1] p-6'>
                <p className='lg:text-3xl text-2xl font-bold py-6'>Materiality Assessment</p>
                <p className='text-[#12af7e]  font-extrabold lg:text-4xl text-3xl py-4 '>Focussing on
                Core Issues</p>
                <p className='text-xl'>In our pursuit of long-term value creation, we prioritise identification of critical
                factors crucial to our success in a dynamic operating environment. Through thorough
                evaluations including economic, environmental, social, and governance aspects, we
                conduct materiality assessments to ensure sustainable value generation.</p>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 py-4'>
                    <div>
                         <p className='text-xl'>Our recent materiality assessment
                          in 2022-23 facilitated the evaluation
                          of issues deemed significant by our
                          stakeholders. This assessment adheres
                          to established global standards like
                          GRI, UNGC, and UNSDGs. Utilising
                          a structured approach, we engage
                          in extensive discussions with the
                          management to shortlist material
                          issues identified through stakeholder
                          engagement exercises.</p>
                    </div>
                    <div>
                         <img src="./MaterialAssess/ma-1.jpg" alt="" />
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                     <div>
                           <img src="./MaterialAssess/ma-2.jpg" alt="" />
                     </div>
                     <div>
                           <img src="./MaterialAssess/ma-3.jpg" alt="" />
                     </div>
                </div>
         </div>
    </div>
  )
}

export default MaterialityAssessment
