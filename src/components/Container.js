import React from 'react';
import Picture from './Picture';
import Blurb from './Blurb';

const Container = ({ apod }) => {

	return (
		<div className='container mx-auto bg-gray-800 border border-gray-900 rounded-lg shadow-xl my-3'>
			<Picture url={apod.url} title={apod.title} credits={apod.copyright} media={apod.media_type} />
			<Blurb url={apod.url} date={apod.date} desc={apod.description} hdurl={apod.hdurl} media={apod.media_type} />
		</div>
	)
}

export default Container
