import { useDispatch, useSelector } from 'react-redux'
import './cardSellCoffe.css' 
export function CardSellCoffe({title , body, response,action}){
	const dispatch = useDispatch()

	const Value = useSelector(state => state[response])
	const handleValue = (e)=>{
		dispatch(action)
		const ParentElement = e.currentTarget.parentElement
		Array.from(ParentElement.children).forEach((child) =>
      child.classList.remove("value_selected")
    );
		e.currentTarget.classList.add('value_selected')
	}
	return (
		<div onClick={(e)=>handleValue(e)} className='card-sell-item'>
			<strong className='card-sell-item-title'>{title}</strong>
			<p className='card-sell-item-body'>{body}</p>
		</div>
	)
}