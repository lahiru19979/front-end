
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';



export default function Update() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const { id } = useParams();
  useEffect(() =>{
    axios.get('http://127.0.0.1:8000/api/searchproducts/'+id)
    .then(res=>{
      if(res.data.products){
        setName(res.data.products.name);
        setDescription(res.data.products.description);
      }
    })
    
  },[]);

  const updateData = (e)=>{
    e.preventDefault();
    console.log({name:name,description:description})
    axios.put('http://127.0.0.1:8000/api/updateproducts/'+id, {name:name,description:description}).then(res=>{
      console.log(res);
      if(res.data.message){
        alert(res.data.message);
        window.location.href = '/';
      }

    });
  }

  return (
    <>
      <div className="container">
        <h3 className="text-center">update product</h3>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              placeholder="Enter product name"
              onChange={e=>setName(e.target.value)}
              required
              
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              id="description"
              value={description}
              placeholder="Enter product description"
              required
              onChange={e=>setDescription(e.target.value)}
            />
          </div>
          
          <br />
          <button type="submit" className="btn btn-primary me-2" onClick={updateData}>
            Submit
          </button>
          <a href="/" className="btn btn-warning">Back</a>
        </form>
      </div>
    </>
  );
}
