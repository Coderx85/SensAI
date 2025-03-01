import { getResume } from '@/actions/resume.action'
import React from 'react'
import ResumeBuilder from './_components/resume-builder'

const ResumePage = async () => {
	const resume = await getResume()
	console.log(resume)

  return (
    <div className='container mx-auto'>
			<ResumeBuilder initialContent={resume?.content || ''} />
		</div>
  )
}

export default ResumePage