import React from 'react';
import Picture from './Picture';
import Blurb from './Blurb';

const Modal = ({ apod, toggle }) => {
	return (
		<div className='container mx-auto h-screen lg:h-auto lg:my-3 bg-gray-800 border border-gray-900 rounded-lg shadow-xl'>
			<div className='bg-gray-800 px-2 py-1 border border-gray-800 hover:border-gray-200 rounded-md m-4 mt-6 absolute top-0 right-0 cursor-pointer' onClick={toggle} >X</div>
			<Picture url={apod.url} title={apod.title} credits={apod.copyright} media={apod.media_type} />
			<Blurb url={apod.url} date={apod.date} desc={apod.description} hdurl={apod.hdurl} media={apod.media_type} />
		</div >
	)
}

export default Modal
