
import React, { useState } from 'react';
import Api from '../components/Api';


export default function Createproduct() {
  const { http } = Api();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);

    try {
      http.post('/storeproducts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(res=>{
        if(res.data.message){
          alert(res.data.message);
          window.location.href = '/';
        }
      });
      
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <h3 className="text-center">Add new product</h3>
        <form encType="multipart/form-data">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              required
            />
          </div>
          <div className="form-group">
            <label>Image file input</label>
            <br />
            <input
              type="file"
              className="form-control-file"
              name="image"
              onChange={handleFileChange}
              required
            />
          </div>
          <br />
          <button type="submit" onClick={submitForm} className="btn btn-primary me-2">
            Submit
          </button>
          <a href="/" className="btn btn-warning">Back</a>
        </form>
      </div>
    </>
  );
}
