import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 w-3/4 flex flex-nowrap overflow-x-auto rounded-4xl gap-10'>
        {props.users.map(function(elem, idx){
          return <RightCard idx id={idx} img={elem.img} color={elem.color} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent