// import React,{useEffect} from 'react';
// import {useDispatch,useSelector} from 'react-redux';
// import {Link} from 'react-router-dom';
// import {addToCart} from '../actions/cartActions';
// 
// const CartScreen=({match,location,history})=>{
// 	const productId=match.params.id;
// 	const qty=location.search?Number(location.search.split("=")[1]):1;
// 	const dispatch=useDispatch();
// 	useEffect(()=>{
// 		if (productId){
// 			dispatch(addToCart(productId,qty));
// 		}
// 	},[dispatch,productId,qty]);
// 
// 	return (
// 		<div>
// 			CartScreen
// 		</div>
// 	);
// };
// 
// export default CartScreen;

import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card,Container } from 'react-bootstrap'
// import Message from '../components/Message'
import { addToCart} from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
		const itemStyle={
		display: 'flex',
		padding: '20px'
	}
	const imgStyle={
		height: '200px',
		flex: '0 0 20%'
	}	
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

 

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }


  return (
  	<div>
  	{cartItems.length === 0?(<h1>Cart is Empty</h1>):(
  		<div>
  		{cartItems.map(item=>(
  			
  			<div style={itemStyle}>
  				<img src={item.image} alt={item.name} style={imgStyle}/>
  				<div style={{marginLeft:'20px', fontSize: '20px'}}>
  					<p>{item.name}</p>
  					<p>Quantity: {item.qty}</p>
  					<p>Price of one: ${item.price}</p>
  					<p>Total Price: {item.price*item.qty}</p>

  				</div>
  			</div>
  			))}
  			<h1 style={{marginLeft:'20px'}}>Grand Total : ${cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}</h1>
            
  		</div>

  		)}
  	
    </div>
  );
};

export default CartScreen