import React from 'react'

const PrevApodCard = ({ apod }) => {
	const dateString = new Date(apod.date);
	return (
		<div className='bg-gray-800 border border-gray-900 rounded-md shadow-md p-3 pb-16 relative'>
			<h4 className='text-sm text-center'>{apod.title}</h4>
			<h6 className="text-xs text-center">{dateString.toDateString()}</h6>
			<div>
				<img className='mx-auto' src={`https://${apod.image_thumbnail}`} alt={apod.title} />
			</div>
			<div className='py-4 text-center absolute inset-x-0 bottom-0'>
				<a className='border-0 rounded bg-teal-500 hover:bg-teal-700 font-semibold py-3 px-4' href={apod.apod_site}>View</a>
			</div>
		</div>
	)
}

export default PrevApodCard
