import React from 'react';

const Blurb = ({ date, desc, url, hdurl, media }) => {
	const dateString = new Date(date);
	return (
		<div className='container mx-auto py-2 px-6'>
			<div className="text-center text-lg">{dateString.toDateString()}</div>
			<div className='mb-1'>{desc}</div>
			<div className='py-4 text-center'>
				{
					media === "image" ?
						<a className='border-0 rounded bg-teal-500 hover:bg-teal-700 font-semibold py-3 px-4 cursor-pointer' href={hdurl} target='_blank' rel='noopener noreferrer'>View the HD version</a>
						:
						<a className='border-0 rounded bg-teal-500 hover:bg-teal-700 font-semibold py-3 px-4 cursor-pointer' href={url} target='_blank' rel='noopener noreferrer'>Watch Original</a>
				}
			</div>


		</div>
	)
}

export default Blurb
