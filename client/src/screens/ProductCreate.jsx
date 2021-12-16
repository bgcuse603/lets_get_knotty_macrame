import { useState } from 'react';
import '../assets/css/ProductCreate.css';

export default function ProductCreate({handleProductCreate}) {
  const [formData, setFormData] = useState({
    item: '',
    price: 0,
    description: '',
    img: '',
    hanger: '',
  });

  const { item, price, description, img, hanger } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const formtextbox = {
    color: "#F9D8B7",
    fontFamily: "Raleway",
    fontSize: "20px",
    margin: "5px",
  }

  return (
    <form className='createForm'
      onSubmit={(e) => {
        e.preventDefault();
        handleProductCreate(formData);
      }}
    >
      <h1>Create New</h1>
      <label>

        <input
          type='text'
          name='item'
          value={item}
          placeholder='Item'
          style={formtextbox}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type='integer'
          name='price'
          value={price}
          placeholder='Price'
          style={formtextbox}
          onChange={handleChange}
        />
      </label>
      <label>
  
        <input
          type='text'
          name='description'
          value={description}
          placeholder='Description'
          style={formtextbox}
          onChange={handleChange}
        />
      </label>
      <label>
        
        <input
          type='text'
          name='img'
          value={img}
          placeholder='ImgURL'
          style={formtextbox}
          onChange={handleChange}
        />
      </label>
      <label>

        <input
          type='text'
          name='hanger'
          value={hanger}
          placeholder='Category'
          style={formtextbox}
          onChange={handleChange}
        />
      </label>

      <button className='createScreenButton'>Submit</button>
    </form>
  )
}
