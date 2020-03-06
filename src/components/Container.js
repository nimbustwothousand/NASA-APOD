import React from 'react';
import Picture from './Picture';
import Blurb from './Blurb';

const Container = ({ apod }) => {

	return (
		<div className='container mx-auto bg-gray-800 border-4 border-gray-900 rounded-lg shadow-xl'>
			<Picture url={apod.url} title={apod.title} credits={apod.copyright} />
			<Blurb date={apod.date} desc={apod.description} hdurl={apod.hdurl} />
		</div>
	)
}

export default Container
