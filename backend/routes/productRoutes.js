const express=require('express');
const asyncHandler=require('express-async-handler');

const router=express.Router();

const products=require('../data/products.js');

router.get('/api/products',asyncHandler(async (req,res,next)=>{
	res.json(products);
}));

router.get('/api/product/:id',asyncHandler(async (req,res,next)=>{
	const product=await products.find(p=>p._id==req.params.id); //one is number another is string so we are doing double equals.
	console.log(typeof(req.params.id));
	if (product){
		res.json(product);

	}else{
		res.status(404);
		throw new Error('Product not found');
	}
}));

module.exports=router;


