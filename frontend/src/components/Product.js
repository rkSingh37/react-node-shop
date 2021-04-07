import React from 'react';
import {Link} from 'react-router-dom';
import Rating from './Rating';
import '../CSS/Product.css';

const Product=({product})=>{
	const nameStyle={
		fontSize: '2rem',
		marginBottom: '2rem'
	}
	const anchorStyle={
		color: 'black',
		textDecoration: 'none',
	}
	return (
		<div className="product">
			<Link to={`/product/${product._id}`} style={anchorStyle}>
				<img src={product.image} style={{height: '60%',width: '100%',marginBottom: '1rem'}}/>
				<div style={nameStyle}>{product.name}</div>
				<Rating value={product.rating} text={`${product.numReviews} reviews`}/>
				<div style={{fontSize: '4rem'}}>
					${product.price}
				</div>
			</Link>
		</div>
	);
};

export default Product;