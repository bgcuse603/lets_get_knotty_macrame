import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleProductUpdate(formData, id);
      }}
    >
      <h2>Product Update</h2>
      <label>
        Item:
        <input
          type='text'
          name='item'
          value={item}
          onChange={handleChange}
        />
      </label><br/>
      <label>
        Price:
        <input
          type='integer'
          name='price'
          value={price}
          onChange={handleChange}
        />
      </label><br/>
      <label>
        Description:
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label><br />
      <label>
        Image URL:
        <input
          type='text'
          name='img'
          value={img}
          onChange={handleChange}
        />
      </label><br />
      <label>
        Category: 
        <input
          type='text'
          name='hanger'
          value={hanger}
          onChange={handleChange}
        />
      </label><br/>

      <button>Submit</button>
    </form>
  )
}
