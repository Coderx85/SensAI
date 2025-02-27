import React from 'react'
import OnboardingForm from './_components/onboarding-form'
import { industries } from '@/data/industries'

const OnboardingPage = () => {
  return (
    <div>OnboardingPage
        <OnboardingForm 
            industries={industries}
        />
    </div>
  )
}

export default OnboardingPage