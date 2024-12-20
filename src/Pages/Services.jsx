import React from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const Services = () => {
  return (
    <>
      <div className='md:px-20 px-5 pt-10'>
        <h1 className='font-bold text-4xl'>Services Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sunt. Deserunt quis omnis architecto voluptates molestias et repudiandae rem quam vero praesentium aut iure, ea voluptatem dolorum voluptas? Vitae ipsum earum officiis, iusto optio velit eaque, temporibus eligendi magni dicta odit quam dolore perferendis? Illo necessitatibus eveniet officia porro error.</p>
        
        <div className='flex gap-3 mt-5'>
          <NavLink to={`/services/${uuid()}`} className="bg-black text-white p-2">Service 1</NavLink>
          <NavLink to={`/services/${uuid()}`} className="bg-black text-white p-2">Service 2</NavLink>
          <NavLink to={`/services/${uuid()}`} className="bg-black text-white p-2">Service 3</NavLink>
        </div>
      </div>
    </>
  )
}

export default Services