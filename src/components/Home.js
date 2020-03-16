import React from 'react'
import Container from './Container';
import Previous from './Previous';

const Home = ({ apod }) => {
	return (
		<div>
			{apod ? <Container apod={apod} /> : <div className='container mx-auto py-2 px-6 text-xl'>Loading...</div>}
			<Previous />
		</div>
	)
}

export default Home
