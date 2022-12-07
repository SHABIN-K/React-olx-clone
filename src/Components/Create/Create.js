import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useContext } from 'react';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)

  const {Firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)

  const date = new Date();

  const navigate = useNavigate();

  const handleSubmit =() =>{
    Firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        Firebase.firestore().collection("products").add({
          name,
          category,
          price,
          url,
          userid:user.uid,
          createdAt:date.toDateString()
        })
        navigate('/');
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
              className="input" 
              type="number" 
              id="fname" 
              name="Price"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
             />
             <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button className="uploadBtn" 
              onClick={handleSubmit}>upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
