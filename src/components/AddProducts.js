import React,{useState} from 'react'
import {storage,db} from '../config/Config'

export const AddProducts = () => {

    const[productName,setProductName,] = useState('');
    const[productPrice,setProductPrice,] = useState(0);
    const[productImg,setProductImg,] = useState(null);
    const[error,setError,] = useState('');

    const types = ['image/png','image/jpg','image/jpeg']

    const productImageHandler = (e)=>{
        let selectedfile = e.target.files[0];
        if(selectedfile && types.includes(selectedfile.type)){
            setProductImg(selectedfile);
            setError('')
        }else{
            setProductImg(null)
            setError('Please select a valid image')
        }
    }

    const addProducts = (e) =>{
        e.preventDefault();
        console.log(productPrice,productName)
        


        const fileRef = storage
        .ref("Products")
        .child(productImg.name);

        const uploadTask = fileRef.put(productImg);


        uploadTask.then(snapshot => {
          return snapshot.getDownloadUrl();
        })
        .then(url => {
          return db
            .collection('Products')
            .doc()
            .set({
                ProduductName:productName,
                ProductPrice: Number(productPrice),
                ProductImage:url
            }).then(()=>{
                setProductName('');
                setProductPrice(0);
                setProductImg('')
                setError('')
            }).catch(err=>setError(err.message));
       
        });

         
    }


    return (
        <div className='container'>
            <br/>
            <h2>Add Products</h2>
            <hr/>
            <form autoComplete="off" className='form-group' onSubmit={addProducts}>
                <label htmlFor="product-name">Product name</label>
                <br/>
                <input type="text" className='form-control' required
                onChange={(e)=>setProductName(e.target.value)} value={productName}/>

                <label htmlFor="product-price">Product price</label>
                <br/>
                <input type="number" className='form-control' required
                onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
                <br/>
                
                <label htmlFor="product-img">Product Image</label>
                <br/>
                <input type="file" className='form-control' onChange={productImageHandler}/>
                <br/>
                <button className='btn btn-success btn-md mybtn'>Add</button>
            </form>
            {error && <span>{error}</span>}
        </div>
    )
}
