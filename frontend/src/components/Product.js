import React from "react"
import { Card } from "react-bootstrap"
import { Rating } from "./Rating"

export const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<a href={`/product/${product._id}`}>
				<Card.Img src={product.image} />
			</a>

			<Card.Body>
				<a href={`/product/${product._id}`}>
					<Card.Title as='div'>
						<b>{product.name}</b>
					</Card.Title>
				</a>

				<Card.Text as='div'>
					<Rating value={product.rating} text={`${product.numReviews} products`} />
				</Card.Text>

				<Card.Text as='h3'>${product.price}</Card.Text>
			</Card.Body>
		</Card>
	)
}
