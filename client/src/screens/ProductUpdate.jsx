import { useState } from 'react';

export default function ProductUpdate({handleProductUpdate}) {
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

  

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleProductUpdate(formData);
      }}
    >
      <h2>Create New</h2>
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

