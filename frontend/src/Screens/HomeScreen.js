import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Product from '../components/Product';
import {listProducts} from '../actions/productActions';
import '../CSS/HomeScreen.css';

const HomeScreen=()=>{
	const dispatch=useDispatch();
	useEffect(()=>{
		//console.log('this is testing');
		dispatch(listProducts());
	},[dispatch]);

	const productList=useSelector(state=>state.productList);
	const {products,loading,error}=productList;

	const myStyle={
		display: 'flex',
		flexWrap: 'wrap'
	}
	return (
		<div class="homeScreen">
			<h1 style={{marginBottom: '2rem'}}>Latest Products</h1>
			{loading?<h1>Loading...</h1>:error?<h1>Error</h1>:<div style={myStyle}>
				{products.map(product=>{

					return <Product product={product} key={product._id}/>;
					})}
			
			</div>}
			
			
			
		</div>
		
	);
};

export default HomeScreen;
