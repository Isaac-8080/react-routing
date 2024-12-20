import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceDetails = () => {

  const { id } = useParams()

  return (
    <>
      <div className='md:px-20 px-5 pt-10 font-bold text-4xl'>
        Service : {id}
      </div>
    </>
  )
}

export default ServiceDetails
