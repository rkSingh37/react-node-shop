import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {detailProduct} from '../actions/productActions';
import '../CSS/ProductScreen.css';

const ProductScreen=({history,match})=>{
	const [qty,setQty]=useState(1);
	const dispatch=useDispatch();
	useEffect(()=>{
		//console.log('hello there, this is testing');
		dispatch(detailProduct(match.params.id));
	},[dispatch,match.params.id]);
	console.log(match.params.id);
	

	

	const productDetails=useSelector(state=>state.productDetails);
	const {product,loading,error}=productDetails;
	const onAddToCartHandler=()=>{
		history.push(`/cart/${match.params.id}?qty=${qty}`);
	}

	return (
		<div className="product_screen">
			{loading?<h1>Loading...</h1>:error?<h1>Error</h1>:
			<>
				<div className="prod_container">
					<div>
					<img src={product.image} alt={product.name}/></div>
					<div className="detail">
						<h1 style={{marginBottom:'1rem'}}>{product.name}</h1>
						<h2>Description</h2>
						<p style={{fontSize: '1.5rem'}}>{product.description}</p>
					</div>
					<div className="selector">
						<div><div>Price</div><div>{product.price}</div></div><hr></hr>
						<div><div>Status In Stocks</div><div>{product.countInStock}</div></div><hr></hr>
						<div>
							<div style={{color: product.countInStock===0?'red':'black'}}>{product.countInStock>0? 'Quantity':'Sorry not in stock'}</div>
							{product.countInStock>0 && (
								<form style={{padding: '1.5rem'}}>
									<select value={qty} onChange={(e)=>setQty(e.target.value)} style={{padding: '.3rem .7rem'}}>
										{[...Array(product.countInStock)].map((x, i) =>
										    <option value={i+1} key={i}>{i+1}</option>
										  )}
									</select>
								</form>
								)}
							
						</div>
						<hr></hr>
						{product.countInStock!==0 && (
							<div className="button_container"><button className="select_button" onClick={onAddToCartHandler}>Add to Cart</button></div>

							)}
					</div>
				</div>
			</>}
			
		</div>
	);
};

export default ProductScreen;