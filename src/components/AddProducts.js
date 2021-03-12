import React,{useState} from 'react'
import firebase from 'firebase/app'
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
        


        // Create the file metadata
var metadata = {
    contentType: 'image/jpeg'
  };
  
  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = storage.ref().child('images/' + productImg.name).put(productImg, metadata);
  
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        
      }
    }, 
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL =>{
          return db.collection('Products')
          .doc()
          .set({
              ProduductName:productName,
              ProductPrice: Number(productPrice),
              ProductImage:downloadURL
          }).then(()=>{ 
              setProductName('');
              setProductPrice(0);
              setProductImg('')
              alert("Upload successfull")
              setError('')
          }).catch(err=>setError(err.message))
      });
    }
  );
  ///----end firebase storage ----         
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
