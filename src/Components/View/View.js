import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import './View.css';


function View() {
  const [userDetails, setuserDetails] = useState([]);

  const {PostDetails} = useContext(PostContext);
  const {Firebase} = useContext(FirebaseContext);

  useEffect(()=>{
    const {userId} = PostDetails;
    Firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setuserDetails(doc.data())
      });
    })
  },[])
  return ( 
    <div className="viewParentDiv">
       {userDetails && PostDetails && <div>
      <div className="imageShowDiv">
        <img
          src={PostDetails.url}
          alt=""
          />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {PostDetails.price}</p>
          <span>{PostDetails.name}</span>
          <p>{PostDetails.category}</p>
          <span>{PostDetails.createdAt}</span>
        </div>
       <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
      </div>}
    </div>
  );
}
export default View;
