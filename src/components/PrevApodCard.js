import React, { useState } from 'react';
import ModalContainer from './ModalContainer';

const PrevApodCard = ({ apod }) => {
	const dateString = new Date(apod.date);
	const [showModal, setShowModal] = useState(false)
	const handler = () => {
		setShowModal(!showModal)
	}
	return (
		<div className='bg-gray-800 border border-gray-900 rounded-md shadow-md p-3 pb-16 relative'>
			<h4 className='text-sm text-center'>{apod.title}</h4>
			<h6 className="text-xs text-center">{dateString.toDateString()}</h6>
			<div className='mb-2'>
				<img className='mx-auto' src={`https://${apod.image_thumbnail}`} alt={apod.title} />
			</div>
			<div className='py-4 text-center absolute inset-x-0 bottom-0'>
				<button
					className='border-0 rounded bg-teal-500 hover:bg-teal-700 font-semibold py-3 px-4'
					onClick={e => { handler(); }}
				>View</button>
			</div>
			<div className=''>
				<ModalContainer apod={apod} show={showModal} toggleShow={handler} />
			</div>
		</div>
	)
}

export default PrevApodCard
