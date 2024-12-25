import { useState } from 'react';
import CodeSnippet from '../../layouts/CodeSnippet';
import { CODE_SNIPPETS } from '../../assets/CodeSnippets';

// React 19 introduces an updated formAction prop, allowing developers to handle form submissions natively.
// This ensures a more declarative approach while reducing the need for manual event listeners or handling.

const AddToCartForm = ({ id, title, addToCart }) => {
  // The formAction function receives form data directly, enabling modern handling of form submissions.
  const formAction = async (formData) => {
    try {
      await addToCart(formData, title);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <form
      action={formAction}
      className='bg-[#1B1D25] border shadow-md text-white rounded-2xl px-8 pt-6 pb-8 mb-4 relative mt-6 mx-8'
    >
      <h2 className='text-xl font-bold mb-4'>{title}</h2>
      {/* Hidden input ensures item ID is included in formData */}
      <input type='hidden' name='itemID' value={id} />
      <button
        type='submit'
        className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'
      >
        Add to Cart
      </button>
    </form>
  );
};

// Component for displaying cart contents
const CartDisplay = ({ cart }) => {
  // Early return ensures no unnecessary DOM rendering for an empty cart
  if (cart.length === 0) {
    return null;
  }

  return (
    <div className='px-8 text-indigo-300'>
      <h2 className='text-xl font-bold my-4'>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <hr className='my-4' />
    </div>
  );
};

// Main component managing the shopping cart
const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  // React 19 promotes the use of async logic in state-updating functions for smoother UX
  const addToCart = async (formData, title) => {
    const id = String(formData.get('itemID'));

    // Simulate an asynchronous API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Append the new item to the cart
    setCart((prevCart) => [...prevCart, { id, title }]);

    return { id }; // Return object for potential additional handling
  };

  return (
    <div className="relative mx-8 mt-6">
      <div className='bg-[#1B1D25] py-6 px-2 rounded-2xl'>
        {/* Display current cart contents */}
        <CartDisplay cart={cart} />

        {/* Example forms for adding items to the cart */}
        <AddToCartForm
          id='1'
          title='JavaScript: The Good Parts'
          addToCart={addToCart}
        />
        <AddToCartForm
          id='2'
          title='5000 V-Bucks Gift Card'
          addToCart={addToCart}
        />
      </div>

      <CodeSnippet string={CODE_SNIPPETS.action2} />
    </div>

  );
};

export { ShoppingCart as ActionExample2 };
