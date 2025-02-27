import React from 'react'

const AuthLayout = ({children}: React.ReactNode) => {
  return (
    <div className='justify-center items-center flex h-screen'>
      {children}
    </div>
  )
}

export default AuthLayout