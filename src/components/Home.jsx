import React, { useContext } from 'react'
import { allData } from './DataProvider'

import Hero from './Hero'
import HotelCard from './HotelCard'
import { Container, Row, Col } from 'react-bootstrap'

// filter hotels by stars
function filterByStars(stars, arr) {
	return arr.filter((item) => item.stars === stars)
}

export default function Home() {
	const { data } = useContext(allData)

	return data === null ? (
		'loading'
	) : (
		<>
			<Hero />
			<Container className="card-container">
				{/* Show Top 20 of 5 stared hotels */}
				<Row>
					{filterByStars(5, data)
						.slice(0, 20)
						.map((hotel) => (
							<Col md={6} lg={3} className="card-column" key={hotel.id}>
								<HotelCard hotel={hotel} />
							</Col>
						))}
				</Row>
			</Container>
		</>
	)
}