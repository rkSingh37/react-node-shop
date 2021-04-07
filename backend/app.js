const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv').config();
const products=require('./data/products');
const productRoutes=require('./routes/productRoutes');

const app=express();

app.use(cors());


app.use(productRoutes);



app.get('/',(req,res,next)=>{
	res.send('WELCOME!!!');
});

app.use((req,res,next)=>{
	const error=new Error(`Not found ${req.originalUrl}`);
	res.status(404);
	next(error);
});

app.use((err,req,res,next)=>{
	const error=res.statusCode===200?500:res.statusCode;
	res.status(error);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV==='production'?null:err.stack
	})
})

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
	console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});
