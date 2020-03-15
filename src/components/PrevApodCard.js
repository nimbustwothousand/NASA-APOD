import React from 'react'

const PrevApodCard = (props) => {
	const dateString = new Date(props.apod.date);
	const url = `${process.env.REACT_APP_API_URL}?date=${props.apod.date}`;
	return (
		<div className='bg-gray-800 border border-gray-900 rounded-md shadow-md p-3 pb-16 relative'>
			<h4 className='text-sm text-center'>{props.apod.title}</h4>
			<h6 className="text-xs text-center">{dateString.toDateString()}</h6>
			<div>
				<img className='mx-auto' src={`https://${props.apod.image_thumbnail}`} alt={props.apod.title} />
			</div>
			<div className='py-4 text-center absolute inset-x-0 bottom-0'>
				<button className='border-0 rounded bg-teal-500 hover:bg-teal-700 font-semibold py-3 px-4' href='/' onClick={() => { props.changeUrl(url) }}>View</button>
			</div>
		</div>
	)
}

export default PrevApodCard
