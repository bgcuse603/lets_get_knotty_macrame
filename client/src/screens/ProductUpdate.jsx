import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/ProductUpdate.css';
// Services
import { getOneProduct } from '../services/products';

export default function ProductUpdate({ handleProductUpdate }) {
  const [isLoaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    item: '',
    price: 0,
    description: '',
    img: '',
    hanger: '',
  });
  const { item, price, description, img, hanger } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = async () => {
      const productItem = await getOneProduct(id);
      setFormData({
        item:  productItem.item,
        price: productItem.price,
        description: productItem.description,
        img: productItem.img,
        hanger: productItem.hanger,
      });
      setLoaded(true);
    }
    prefillFormData(id);
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  } 

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
    <form
    className='createForm'
      onSubmit={(e) => {
        e.preventDefault();
        handleProductUpdate(formData, id);
      }}
    >
      <h1>Product Update</h1>
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
          placeholder='Image URL'
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

      <button className='updateScreenButton'>Submit</button>
    </form>
  )
}
