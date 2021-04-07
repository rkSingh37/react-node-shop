export const cartReducer=(state={cartItems:[]},action)=>{
	switch(action.type){
		case 'CART_ADD_ITEM':
			const item=action.payload;
			const exists=state.cartItems.find(p=>p.product===item.product);
			if (exists){
				return {
					...state,
					cartItems: state.cartItems.map(x=>x.product===exists.product?item:x)
				}

			}else{
				return {...state,cartItems: [...state.cartItems,item]}
			}
		default: 
			return state
	}
}