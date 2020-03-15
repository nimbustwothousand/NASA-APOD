import React from 'react'

const Picture = (props) => {
	return (
		<div className='container mx-auto py-2 px-6'>
			<div className='p-2'>
				<h2 className='text-center text-xl'>{props.title}</h2>
				<h3 className='text-center text-xs'>Credits: {props.credits}</h3>
			</div>
			{
				props.media === "image" ?
					<img src={props.url} alt={props.title} /> :
					<iframe className='mx-auto' width='560' height='315' src={props.url} title={props.title} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
			}
		</div >
	)
}

export default Picture
