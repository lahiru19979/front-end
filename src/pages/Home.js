import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Update from './Productedit';
    

export default function Home(){
    
    const[products,setProducts]=useState([]);
const navigate =useNavigate();
    
useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/productslist').then(res =>{
    console.log(res)
    setProducts(res.data.products);
    console.log(products)
    });
    },[])

 const handleDelete =(id)=>{
    const confirm =window.confirm("would you like to Delete?");
    if(confirm){
        axios.delete('http://127.0.0.1:8000/api/deleteproducts/'+id)
        .then(res=>{
            reloadPage();
        }).catch(err =>console.log(err));
    }
 }
 const reloadPage = () => {
    window.location.reload();
  };
   var productslist="";
   productslist=products.map((item,index) => {

    return(  
    
    <tr key={index}>
        <td >{item.id}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td><img src={item.image}/></td>
        <td>
        <Link to={'/update/'+item.id}  class="btn btn-sm  btn-success me-2" role="button">update</Link>
        <button type='button' onClick={e=>handleDelete(item.id)} class="btn btn-sm btn-danger me-2" href="#" role="button">delete</button>
        </td>
        </tr>)
   });
   
    return(
            
        <div class="container">   
          <table class="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {productslist}
                </tbody>
                </table>
            </div>
    );
}


