import { useActionState } from 'react';

// Action function to handle form submissions
// Takes the previous state and query data as parameters
const addToCart = (prevState, queryData) => {
  const itemID = queryData.get('itemID');

  // Return different states based on the itemID
  if (itemID === '1') {
    return { message: 'Added to cart!', status: 'success' };
  } else {
    return { message: 'Out of stock!', status: 'failure' };
  }
};

// Form component for adding items to the cart
const AddToCartForm = ({ itemID, itemTitle }) => {
  // `useActionState` provides the current state and an action function
  const [formState, formAction] = useActionState(addToCart, null);

  return (
    <form
      action={formAction}
      className='bg-[#1B1D25] border shadow-md text-white rounded-2xl px-8 pt-6 pb-4 mb-4 relative mt-6 mx-8'
    >
      {/* Display the item title */}
      <h2 className='text-xl font-bold mb-4'>{itemTitle}</h2>

      {/* Hidden input for item ID */}
      <input type='hidden' name='itemID' value={itemID} />

      {/* Submit button */}
      <button
        type='submit'
        className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'
      >
        Add to Cart
      </button>

      {/* Display feedback based on formState */}
      <div
        className={`mt-4 text-sm ${formState?.status === 'success' ? 'text-green-400' : 'text-red-400'
          }`}
      >
        {formState?.message}
      </div>
    </form>
  );
};

export default AddToCartForm;
