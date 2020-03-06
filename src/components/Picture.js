import React from 'react'

const Picture = (props) => {
	return (
		<div className='container mx-auto py-2 px-6'>
			<div className='p-2'>
				<h2 className='text-center text-xl'>{props.title}</h2>
				<h3 className='text-center text-xs'>Credits: {props.credits}</h3>
			</div>
			<img src={props.url} alt={props.title} />
		</div>
	)
}

export default Picture
