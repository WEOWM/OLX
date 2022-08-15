import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
// import {FirebaseContext,AuthContext} from '../../store/FirebaseContext'
const Create = () => {
  // const {firebese} = useContext(FirebaseContext);
  // const {user} = useContext(AuthContext);
   const[name,setName] = useState('')
   const[Category,setCategory] = useState('')
   const[Price,setPrice] = useState('')
   const[image,setImage] = useState('')
   const handlesubmit=()=>{
    // firebese.storge().ref(`/image/${image.name}`).put(image).then(({ref})=>{
    // //   ref.getDownloadURL().then((url)=>{
    // //     console.log(url);


    //   })

    // })


   }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={Category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input" 
            type="number"
            value={Price}
            onChange={(e)=>setPrice(e.target.value)} 
            id="fname" 
            name="Price" />
            <br />
          </form>
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) :''}></img>
          
            <br />
            <input type="file" onChange={(e)=>{
              setImage(e.target.files[0])
            }} />
            <br />
            <button className="uploadBtn" onClick={handlesubmit}>upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
