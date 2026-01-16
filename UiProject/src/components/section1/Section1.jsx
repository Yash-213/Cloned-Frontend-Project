import React from 'react'
import Navbar from './Navbar'
import Page1Content from './page1Content'

const Section1 = () => {
  const users = [ 
    {
      img:"https://plus.unsplash.com/premium_photo-1663047305318-c6debe9f633c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      color:"blue",
      tag:"Satisfied"
    },{
      img:"https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      color:"pink",
      tag:"Underserved"
    },{
      img:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      color:"lightseagreen",
      tag:"Underbanked"
    },
    {
      img:"https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      color:"black",
      tag:"Unsatisfied"
    }
  ]
  return (
    <div className='h-screen w-full bg-white-950 text-amber-50'>
      <Navbar />
      <Page1Content users={users}/>
    </div>
  )
}

export default Section1