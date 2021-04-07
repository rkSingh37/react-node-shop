import axios from 'axios';

export const listProducts=()=>async (dispatch)=>{ //two arrow functions because we are using thunk
	try{
		dispatch({type: 'PRODUCT_LIST_REQUEST'});
		const {data}=await axios.get('http://localhost:8080/api/products');
		if (data){
			dispatch({type: 'PRODUCT_LIST_SUCCESS',payload: data})
		}
	}catch(error){
		dispatch({type: 'PRODUCT_LIST_FAIL',payload: error.message})
	}
}

export const detailProduct=(id)=>async (dispatch)=>{
	try{
		dispatch({type:'PRODUCT_DETAIL_REQUEST'});
		const {data}=await axios.get(`http://localhost:8080/api/product/${id}`);
		if (data){
			console.log('data is being load');
			dispatch({type: 'PRODUCT_DETAIL_SUCCESS',payload: data})
		}

	}catch(error){
		dispatch({type: 'PRODUCT_DETAIL_FAIL',payload: error.message});
	}
}