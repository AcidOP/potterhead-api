import React from 'react'
import Navigation from '@/app/components/navigation'
import Usage from '@/app/components/usage'

const Homepage = () => {
  return (
    <div>
      <Navigation/>

    <span className='lg:text-3xl text-xl font-semibold text-blue-500 flex justify-center mt-3 '>Welcome to PotterHead API</span>
  
<Usage/>

    </div>
  )
}

export default Homepage