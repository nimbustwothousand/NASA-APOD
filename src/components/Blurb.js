import React from 'react';

const Blurb = ({ date, desc, hdurl }) => {
	const dateString = new Date(date);
	return (
		<div className='container mx-auto py-2 px-6'>
			<div className="text-center text-lg">{dateString.toDateString()}</div>
			<div className='mb-1'>{desc}</div>
			<div className='py-4 text-center'>
				<a className='border-0 rounded bg-teal-500 hover:bg-teal-700 font-semibold py-3 px-4' href={hdurl}>View the HD version</a>
			</div>
		</div>
	)
}

export default Blurb
