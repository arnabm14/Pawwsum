import React, { Fragment, useState } from 'react';
import { API } from '../../constants';
import { useHistory } from 'react-router-dom';
import './Checkout.scss';

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    pet: '',
    address: '',
    landmark: '',
    paymentMethod: '',
  });

  const history = useHistory();

  const onChange = (e) => {
    //console.log('name: ', e.target.name + ' value: ' + e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
    };
    console.log(payload);
    fetch(`${API}/user/order`, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('submitted: ', data);
        history.push('/');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='checkout'>
      <section className='checkout-form'>
        <form className='form' onSubmit={handleSubmit}>
          <input
            placeholder='Name'
            name='name'
            value={formData.name}
            onChange={(e) => onChange(e)}
            required
          />
          <input
            placeholder='Pet Name(s)'
            name='pet'
            value={formData.pet}
            onChange={(e) => onChange(e)}
            required
          />
          <input
            placeholder='Full Address'
            name='address'
            value={formData.address}
            onChange={(e) => onChange(e)}
            required
          />
          <input
            placeholder='Landmark'
            name='landmark'
            value={formData.landmark}
            onChange={(e) => onChange(e)}
            required
          />
          <Fragment>
            <p>Payment mode</p>
            <label>
              <input
                type='radio'
                id='debit'
                name='paymentMethod'
                onChange={(e) => onChange(e)}
                value='debit'
              />
              Debit
            </label>
            <label>
              <input
                type='radio'
                id='credit'
                name='paymentMethod'
                onChange={(e) => onChange(e)}
                value='credit'
                required
              />
              Credit
            </label>
            <label>
              <input
                type='radio'
                id='cash'
                name='paymentMethod'
                onChange={(e) => onChange(e)}
                value='cash'
              />
              Cash
            </label>
          </Fragment>
          <button type='submit'>Proceed to buy</button>
        </form>
      </section>
    </div>
  );
}
