import React from 'react'
import Modal from './Modal';

const ModalContainer = ({ apod, show, toggleShow }) => {

	if (show) {
		return (
			<div className='fixed top-0 left-0 bottom-0 right-0 z-50 overflow-auto flex transform origin-center'>
				<div className='bg-gray-200 w-full h-full min-h-100 opacity-25 absolute' onClick={toggleShow}></div>
				<div className="relative w-full lg:max-w-4xl m-auto flex-col flex">
					{apod ? <Modal apod={apod} toggle={toggleShow} /> : <div></div>}
				</div>
			</div>
		)
	} else {
		return (
			<div></div>
		)
	}
}

export default ModalContainer
