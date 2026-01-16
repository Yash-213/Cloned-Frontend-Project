import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className=' relative h-full w-80 bg-red-500 rounded-4xl overflow-hidden shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent id={props.id} tag = {props.tag} color={props.color}/>
    </div>
  )
}

export default RightCard