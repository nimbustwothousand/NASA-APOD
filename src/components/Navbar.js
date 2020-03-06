import React from 'react'

function Navbar() {
	return (
		<div className='flex bg-blue-900 py-2 px-4'>
			<h1 className="text-3xl">
				<span className="text-5xl">A</span>stronomical <span className="text-5xl">P</span>icture <span className="text-5xl">O</span>f the <span className="text-5xl">D</span>ay <span className='text-xs'>Courtesy of <a href="https://apod.nasa.gov/apod/astropix.html" className='underline'>NASA</a></span>
			</h1>
		</div>
	)
}

export default Navbar
