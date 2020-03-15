import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import PrevApodCard from './PrevApodCard';
require('dotenv').config();

const Previous = (props) => {
	const [prevApods, setPrevApods] = useState(null)
	const start_date = moment().subtract(9, 'days').format('YYYY-MM-DD');
	const end_date = moment().subtract(1, 'days').format('YYYY-MM-DD');
	const params = {
		start_date: start_date,
		end_date: end_date,
		image_thumbnail_size: 256,
		absolute_thumbnail_url: true,
		thumbs: true
	}
	const paramString = `start_date=${params.start_date}&end_date=${params.end_date}&image_thumbnail_size=${params.image_thumbnail_size}&absolute_thumbnail_url=${params.absolute_thumbnail_url}&thumbs=${params.thumbs}`
	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API_URL}?${paramString}`)
			.then(res => {
				setPrevApods(res.data)
			})
			.catch(err => {
				console.error(err)
			})
	}, [paramString])
	return (
		<div className='container mx-auto pb-3'>
			<div className='bg-gray-800 border border-gray-900 rounded-md shadow-md p-3 mb-3'>
				<h2 className='text-center text-xl'>Previous APODs</h2>
			</div>
			<div className="grid grid-cols-3 gap-4">
				{prevApods ? prevApods.map(prevApod => (
					<PrevApodCard key={prevApod.apod_site} apod={prevApod} changeUrl={props.changeUrl} />
				)) : <div>Loading...</div>}
			</div>
		</div>
	)
}

export default Previous
