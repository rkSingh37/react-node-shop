import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomeScreen from '../Screens/HomeScreen';
// import products from '../products';
import ProductScreen from '../Screens/ProductScreen';
import CartScreen from '../Screens/CartScreen';

import '../CSS/App.css';

const App=()=>{
	// const myStyle={
	// 	display: flex,
	// 	flexDirection: column,
	// };
	return (
		<Router>
			<Header/>
			<Switch>
				
			
			<Route path={"/"} component={HomeScreen} exact/>
			{/* <HomeScreen/> */}
			<Route path={"/product/:id"} component={ProductScreen} exact/>
			<Route path={"/cart/:id?"} component={CartScreen} />
			</Switch>
			<Footer/>
		</Router>

	);	
};

export default App;
