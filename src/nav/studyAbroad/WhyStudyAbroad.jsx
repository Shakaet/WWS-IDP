import React from 'react'
import WhyStudyAbroadHeader from '../../component/WhyStudyAbroadHeader'
import WhyStudyAbroadParagraph from '../../component/WhyStudyAbroadParagraph'
import WhyStudyAbroadBookNow from '../../component/WhyStudyAbroadBookNow'
import WhyStudyAbroadDetails from '../../component/WhyStudyAbroadDetails'
import WhyStudyAbroadMoredetails from '../../component/WhyStudyAbroadMoredetails'
import StudyAbroadQA from '../../component/StudyAbroadQA'

const WhyStudyAbroad = () => {
  return (
    <div>
        <WhyStudyAbroadHeader></WhyStudyAbroadHeader>
        <WhyStudyAbroadParagraph></WhyStudyAbroadParagraph>
        <WhyStudyAbroadBookNow></WhyStudyAbroadBookNow>
        <WhyStudyAbroadDetails></WhyStudyAbroadDetails>
        <WhyStudyAbroadMoredetails></WhyStudyAbroadMoredetails>
        <StudyAbroadQA></StudyAbroadQA>
        
    </div>
  )
}

export default WhyStudyAbroad