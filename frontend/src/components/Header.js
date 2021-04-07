import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Header.css';

const Header=()=>{
	const linkStyle={
		textDecoration:'none',
		color: 'white'
	}
	return (
		<div class="container">
			
		
		<div class="header">
			<Link to="/" style={linkStyle}><div class="home">Home</div></Link>
			<form class="search-form">
				<input type="text" class="search" placeholder="Search products"/>
					
				
			</form>
			<div class="options">
				<Link style={linkStyle} to="/cart?"><div>Cart</div></Link> 
				{/* <div>Orders</div> */}
				{/* <div>Sign In</div>	 */}
			</div>
			
			
		</div>
		</div>
	);
};

export default Header;