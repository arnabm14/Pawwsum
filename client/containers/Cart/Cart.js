import React, { useContext } from 'react';
import './Cart.scss';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import AuthContext from '../../AuthContext';

const Cart = () => {
  const { userAuthentication } = useContext(AuthContext);
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const items = cart.itemsAdded;

  const handleButtonClick = () => {
    if (items.length > 0) {
      userAuthentication === 'logged-in'
        ? history.push('/checkout')
        : history.push('/login');
    } else {
      history.push('/products');
    }
  };

  return (
    <div className='cart'>
      {items.length > 0 ? (
        <div className='cart-filled'>
          <h2>My Cart</h2>
          <section>
            {items.map((_) => {
              return (
                <div key={_.id} className='item'>
                  <CartItem productId={_.id} />
                </div>
              );
            })}
            <div className='advertisement'>
              <img
                className='addv-image'
                src='../static/images/lowest-price.png'
                alt='Lowest price gauranteed'
              />{' '}
              <p>you wont find it cheaper anywhere!</p>
            </div>
          </section>
        </div>
      ) : (
        <div className='cart-empty'>
          <div>
            <h2>No items in your cart</h2>
            <p>Your favourite items are just a click away</p>
          </div>
        </div>
      )}
      <div className='checkout-button'>
        {/* {items.length > 0 && <p>Promo code can be applied on payment page</p>} */}
        <button
          type='button'
          onClick={handleButtonClick}
          onKeyPress={handleButtonClick}
          tabIndex={0}
        >
          {items.length > 0 && (
            <>
              <span>Proceed to checkout</span>
              <span style={{ margin: '0px 10px 0px 40px' }}>
                Rs.{cart.cartPrice}
              </span>
              {'>'}
            </>
          )}
          {items.length === 0 && 'Start Shopping'}
        </button>
      </div>
    </div>
  );
};

export default Cart;
