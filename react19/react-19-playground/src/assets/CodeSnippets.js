export const CODE_SNIPPETS = {
  action1: `import { useState } from 'react';

// Component for displaying individual posts
const PostItem = ({ post }) => {
  return (
    <div className='bg-[#1B1D25] text-white shadow-md p-6 my-6 rounded-2xl'>
      {/* Post title */}
      <h2 className='text-xl font-bold capitalize'>{post.title}</h2>
      {/* Post body */}
      <p>{post.body}</p>
    </div>
  );
};

// Component for adding new posts
const PostForm = ({ addPost }) => {
  // formAction handles the form submission and calls addPost with the new post data
  const formAction = async (formData) => {
    const newPost = {
      title: formData.get('title'),
      body: formData.get('body'),
    };

    // Ensure both fields are filled out before adding the post
    if (newPost.title && newPost.body) {
      addPost(newPost);
    } else {
      console.warn('Both title and body are required to create a post.');
    }
  };

  return (
    <form
      action={formAction}
      className='bg-[#1B1D25] shadow-md px-8 pt-6 pb-8 mb-4 mt-6 rounded-2xl relative'
    >
      {/* Input field for post title */}
      <div className='mb-4'>
        <label
          className='block text-white text-sm font-bold mb-2'
          htmlFor='title'
        >
          Title
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 bg-[#1B1D25] text-white leading-tight focus:outline-none focus:shadow-outline'
          id='title'
          type='text'
          placeholder='Enter title'
          name='title'
        />
      </div>

      {/* Textarea for post body */}
      <div className='mb-6'>
        <label
          className='block text-white text-sm font-bold mb-2'
          htmlFor='body'
        >
          Body
        </label>
        <textarea
          className='shadow appearance-none border rounded w-full py-2 px-3 bg-[#1B1D25] text-white leading-tight focus:outline-none focus:shadow-outline'
          id='body'
          rows='5'
          placeholder='Enter body'
          name='body'
        ></textarea>
      </div>

      {/* Submit button */}
      <div className='flex items-center justify-between'>
        <button
          className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

// Main component to manage and display posts
const Posts = () => {
  const [posts, setPosts] = useState([]);

  // Adds a new post to the list
  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className='relative mx-8 mt-6'>
      <div>
        {/* Form to create new posts */}
        <PostForm addPost={addPost} />

        {/* List of posts */}
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export { Posts as ActionExample1 };`,
  action2: `import { useState } from 'react';

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
    </div>
  );
};

export { ShoppingCart as ActionExample2 };`,
  use1: `import { use, Suspense } from 'react';
  
  // A memoized function to fetch data and cache it locally
  const fetchData = (() => {
    const cache = new Map();
  
    return async () => {
      const url = 'https://api.chucknorris.io/jokes/random';
  
      // Check if the data is already cached
      if (cache.has(url)) {
        return cache.get(url);
      }
  
      // Fetch new data if not cached
      const res = await fetch(url, { cache: 'no-store' }); // Avoid stale data with 'no-store'
      const data = await res.json();
  
      // Cache the fetched data
      cache.set(url, data);
      return data;
    };
  })();
  
  // Component using the new 'use()' API to handle async data directly in components
  const JokeItem = () => {
    // The use() API allows you to call promises directly within components
    // It will suspend the rendering of this component until the promise resolves
    const joke = use(fetchData());
    return (
      <div className='bg-[#1B1D25] shadow-md p-4 my-6 rounded-lg mt-12 relative mx-8 text-white'>
        {/* Display the joke */}
        <h2 className='text-xl'>{joke.value}</h2>
      </div>
    );
  };
  
  // Wrapper component using Suspense for fallback rendering
  const Joke = () => {
    return (
      <Suspense
        fallback={
          // Fallback UI while waiting for JokeItem to resolve its data
          <h2 className='text-2xl text-center font-bold mt-5'>Loading...</h2>
        }
      >
        {/* Add meta data for SEO purposes */}
        {/* React 19 now has support for rendering document metadata tags in components natively: */}
        <title>Chuck Norris Jokes</title>
        <meta name='description' content='Chuck Norris jokes' />
        <meta name='keywords' content='chuck norris, jokes' />
  
        {/* Render the joke */}
        <JokeItem />
      </Suspense>
    );
  };
  
  export { Joke as UseExample1 };`,
  use2: `import { use, Suspense } from 'react';
  
  // Function to fetch resources with caching
  const fetchResource = (url) => {
    // Utilize a cache to prevent redundant fetches
    const cache = fetchResource.cache || (fetchResource.cache = new Map());
  
    // If the URL is not cached, fetch the data and store the promise in the cache
    if (!cache.has(url)) {
      const promise = fetch(url).then((res) => res.json());
      cache.set(url, promise);
    }
  
    // Return the cached promise
    return cache.get(url);
  };
  
  // Component to display a list of posts
  const PostItems = () => {
    // Use the new use() API to handle the async fetch operation
    const posts = use(fetchResource('https://jsonplaceholder.typicode.com/posts'));
  
    return (
      <ul className='px-8 max-h-[400px] overflow-y-scroll rounded-2xl py-3 mt-12 mx-8 relative bg-[#1B1D25]'>
        {posts.map((post) => (
          <div
            key={post.id}
            className='text-white border shadow-md p-4 my-6 rounded-lg'
          >
            <h2 className='text-xl font-bold'>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </ul>
    );
  };
  
  // Component wrapping the list of posts with Suspense for fallback UI
  const Posts = () => {
    return (
      <Suspense
        fallback={
          // Display a loading indicator while the data is being fetched
          <h1 className='text-2xl text-center font-bold mt-5'>Loading...</h1>
        }
      >
        {/* Render the list of posts */}
        <PostItems />
      </Suspense>
    );
  };
  
  export { Posts as UseExample2 };`,
  use3: `import { use, useState, Suspense } from 'react';
  
  // Simulated async function to fetch a message
  function fetchMessage() {
    return new Promise((resolve) => setTimeout(resolve, 1000, '⚛️'));
  }
  
  // Component to display the message once it resolves
  const MessageOutput = ({ messagePromise }) => {
    // Using React 19's use() API to directly handle the promise
    const messageContent = use(messagePromise);
  
    return (
      <p className='text-xl relative text-white bg-[#1B1D25] w-fit p-6 rounded-lg shadow-md'>
        Here is the message: {messageContent}
      </p>
    );
  };
  
  // Container component with a Suspense fallback for loading state
  const MessageContainer = ({ messagePromise }) => {
    return (
      <Suspense
        fallback={
          <p className='text-xl text-white'>⌛ Downloading message...</p>
        }
      >
        {/* Render the resolved message */}
        <MessageOutput messagePromise={messagePromise} />
      </Suspense>
    );
  };
  
  // Main component to manage user interaction and state
  const Message = () => {
    const [messagePromise, setMessagePromise] = useState(null);
    const [show, setShow] = useState(false);
  
    // Function to trigger message fetching
    function download() {
      setMessagePromise(fetchMessage());
      setShow(true);
    }
  
    return (
      <div className='relative mx-8 mt-6 flex justify-center items-center bg-[#1B1D25] p-12 rounded-2xl'>
        {show ? (
          // Show the message container if the user has triggered the download
          <MessageContainer messagePromise={messagePromise} />
        ) : (
          // Show the download button initially
          <button
            className='bg-indigo-500 text-white font-bold py-2 px-4 rounded-full'
            onClick={download}
          >
            Download message
          </button>
        )}
      </div>
    );
  };
  
  export { Message as UseExample3 };`,
  use4: `import { createContext, useState, use } from 'react';
  
  // Create a context for the theme
  const ThemeContext = createContext();
  
  // Theme provider to manage and provide the current theme
  const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Initial theme is 'light'
  
    // Toggle between 'light' and 'dark' themes
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  // Component using use() to consume the theme context
  const ThemedCard = () => {
    // use() API combined with useContext to directly access the ThemeContext value
    const { theme, toggleTheme } = use(ThemeContext);
  
    return (
      <div
        className={\`relative mt-6 mx-8 shadow-md rounded-lg p-6 \${theme === 'light' ? 'bg-white' : 'bg-[#1B1D25]'
          }\`}
      >
        {/* Dynamic styling based on the current theme */}
        <h1
          className={\`text-2xl mb-3 \${theme === 'light' ? 'text-gray-800' : 'text-white'
            }\`}
        >
          Themed Card
        </h1>
        <p className={theme === 'light' ? 'text-gray-800' : 'text-white'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque
          libero. Nullam mattis metus a sapien tempor, sit amet mollis est
          facilisis. Phasellus nec turpis nec dui venenatis vestibulum. Sed
          dapibus dapibus justo, at rhoncus risus malesuada vel. Proin eget leo id
          mi ullamcorper rhoncus.
        </p>
        {/* Button to toggle theme */}
        <button
          onClick={toggleTheme}
          className='mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
        >
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
    );
  };
  
  // Main component rendering the theme provider and themed card
  const Theme = () => {
    return (
      <ThemeProvider>
        <ThemedCard />
      </ThemeProvider>
    );
  };
  
  export { Theme as UseExample4 };`,
  useActionState: `import { useActionState } from 'react';
  
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
    // useActionState provides the current state and an action function
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
          className={\`mt-4 text-sm \${formState?.status === 'success' ? 'text-green-400' : 'text-red-400'
            }\`}
        >
          {formState?.message}
        </div>
      </form>
    );
  };
  
  export default AddToCartForm;`,
  useDeferredValue: `import { useState, useDeferredValue } from 'react';
  
  const SearchResults = ({ searchTerm }) => {
    const deferredSearchTerm = useDeferredValue(searchTerm); // Defers the search term
  
    // Simulating filtered results based on deferred value
    const filteredResults = items.filter((item) =>
      item.toLowerCase().includes(deferredSearchTerm.toLowerCase())
    );
  
    return (
      <ul className="max-h-[200px] overflow-y-scroll bg-[#1B1D25] text-white p-4 rounded-lg">
        {filteredResults.map((result, index) => (
          <li key={index} className="py-1 border-b border-gray-500">
            {result}
          </li>
        ))}
      </ul>
    );
  };
  
  const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState(''); // Tracks input value
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value); // Updates immediately
    };
  
    return (
      <div className="p-6 bg-[#1B1D25] rounded-2xl text-white relative mx-8 mt-6">
        <h2 className="text-2xl mb-4">Search Items</h2>
        <input
          type="text"
          placeholder="Type to search..."
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
          onChange={handleInputChange}
          value={searchTerm}
        />
        <SearchResults searchTerm={searchTerm} />
      </div>
    );
  };
  
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Pineapple',
    'Mango',
    'Blueberry',
    'Strawberry',
  ];
  
  export { SearchBox as UseDeferredValueExample };`,
  useFormStatus: `import { useFormStatus } from 'react-dom';
  import { useState } from 'react';
  
  // Component to display individual posts
  const PostItem = ({ post }) => {
    return (
      <div className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
        <h2 className='text-xl font-bold'>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  };
  
  // Custom submit button using useFormStatus to manage its state
  const SubmitButton = () => {
    // useFormStatus provides the pending state to indicate if the form is being submitted
    const { pending } = useFormStatus();
  
    return (
      <button
        className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'
        type='submit'
        disabled={pending} // Disable button while submission is pending
      >
        {pending ? 'Submitting...' : 'Submit'} {/* Dynamic label based on pending state */}
      </button>
    );
  };
  
  // Form component to handle new post submissions
  const PostForm = ({ addPost }) => {
    // The action to handle form submissions
    const formAction = async (formData) => {
      // Simulate a delay for submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      const newPost = {
        title: formData.get('title'), // Get the title from the form data
        body: formData.get('body'), // Get the body from the form data
      };
  
      addPost(newPost); // Add the new post to the list
    };
  
    return (
      <form
        action={formAction} // Specify the form action
        className='bg-[#1B1D25] shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 relative mt-6 mx-8'
      >
        {/* Input for post title */}
        <div className='mb-4'>
          <label
            className='block text-white text-sm font-bold mb-2'
            htmlFor='title'
          >
            Title
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-[#1B1D25] text-white leading-tight focus:outline-none focus:shadow-outline'
            id='title'
            type='text'
            placeholder='Enter title'
            name='title'
          />
        </div>
  
        {/* Textarea for post body */}
        <div className='mb-6'>
          <label
            className='block text-white text-sm font-bold mb-2'
            htmlFor='body'
          >
            Body
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-[#1B1D25] text-white leading-tight focus:outline-none focus:shadow-outline'
            id='body'
            rows='5'
            placeholder='Enter body'
            name='body'
          ></textarea>
        </div>
  
        {/* Submit button with dynamic state */}
        <div className='flex items-center justify-between'>
          <SubmitButton />
        </div>
      </form>
    );
  };
  
  // Main component to manage and display posts
  const Posts = () => {
    const [posts, setPosts] = useState([]);
  
    // Function to add a new post to the list
    const addPost = (newPost) => {
      setPosts((posts) => [...posts, newPost]);
    };
  
    return (
      <>
        {/* Form to add a new post */}
        <PostForm addPost={addPost} />
  
        {/* Display the list of posts */}
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </>
    );
  };
  
  export { Posts as UseFormStatusExample };`,
  useOptimistic: `import { useOptimistic, useState, useRef } from 'react';
  
  // Form component for sending messages
  const MessageForm = ({ addOptimisticMessage, sendMessage }) => {
    const formRef = useRef(); // Ref to reset the form after submission
  
    const formAction = async (formData) => {
      // Add an optimistic message to the UI immediately
      addOptimisticMessage(formData.get('message'));
  
      // Reset the form input
      formRef.current.reset();
  
      // Send the actual message (simulate async operation)
      await sendMessage(formData);
    };
  
    return (
      <form action={formAction} ref={formRef} className='flex items-center mb-5'>
        <input
          type='text'
          name='message'
          placeholder='Hello!'
          className='border bg-[#1B1D25] text-white rounded py-1 px-2 mr-2 focus:outline-none focus:border-indigo-500'
        />
        <button
          type='submit'
          className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline'
        >
          Send
        </button>
      </form>
    );
  };
  
  // Thread component to display messages with optimistic updates
  const Thread = ({ messages, sendMessage }) => {
    // useOptimistic maintains an optimistic state for the messages
    // Takes the initial state (messages) and a reducer function
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
      messages,
      (state, newMessage) => [
        ...state,
        {
          text: newMessage, // Optimistic text
          sending: true, // Flag to indicate the message is still being sent
        },
      ]
    );
  
    return (
      <div className='relative mx-8 mt-6 bg-[#1B1D25] p-6 rounded-2xl'>
        <MessageForm
          addOptimisticMessage={addOptimisticMessage}
          sendMessage={sendMessage}
        />
        <span className='text-white'>Latest Messages:</span>
        {optimisticMessages.map((message, index) => (
          <div key={index} className='flex items-center'>
            <span className="text-white bg-indigo-500 mb-2 py-2 px-4 rounded-2xl max-w-[30ch] break-all">{message.text}</span>
            {message.sending && (
              <small className='ml-1 text-gray-500'>(Sending...)</small>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  // Simulates the delivery of a message (mock API call)
  const deliverMessage = async (message) => {
    await new Promise((res) => setTimeout(res, 1000)); // Simulate delay
    return message; // Return the sent message
  };
  
  // Main component managing messages
  const MessageBox = () => {
    const [messages, setMessages] = useState([]); // State to store actual messages
  
    // Function to send a message
    async function sendMessage(formData) {
      const sentMessage = await deliverMessage(formData.get('message'));
  
      // Update the actual state with the sent message
      setMessages((messages) => [...messages, { text: sentMessage }]);
    }
  
    return <Thread messages={messages} sendMessage={sendMessage} />;
  };
  
  export { MessageBox as UseOptimisticExample };`,
  useTransition: `import { useState, useTransition, memo } from 'react';
  
  const TabButton = ({ children, isActive, onClick }) => {
    if (isActive) {
      return <div className='text-indigo-600'>{children}</div>;
    }
    return (
      <button
        className="text-white"
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </button>
    );
  };
  
  const Tab1 = () => {
    return <div className="text-white">This is Tab 1</div>;
  };
  
  const Tab2 = memo(function Tab2() {
    let items = [];
    for (let i = 0; i < 500; i++) {
      items.push(<Post key={i} index={i} />);
    }
    return <ul className='items max-h-[400px] overflow-y-auto'>{items}</ul>;
  });
  
  const Tab3 = () => {
    return <div className="text-white">This is Tab 3</div>;
  };
  
  function Post({ index }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // Artificial delay
    }
  
    return <li className='item text-white'>Post {index + 1}</li>;
  }
  
  export function Tabs() {
    // useTransition provides a mechanism to manage transitions in a non-blocking way
    const [, startTransition] = useTransition();
    const [tab, setTab] = useState('tab1'); // Tracks the currently active tab
  
    function selectTab(nextTab) {
      // startTransition ensures that the UI remains responsive while transitioning
      startTransition(() => {
        setTab(nextTab); // Update the active tab
      });
    }
  
    return (
      <div className='p-6 relative mx-8 mt-2 bg-[#1B1D25] rounded-2xl'>
        {/* Tab buttons */}
        <div className='flex space-x-4 mb-4'>
          <TabButton isActive={tab === 'tab1'} onClick={() => selectTab('tab1')}>
            Tab One
          </TabButton>
          <TabButton isActive={tab === 'tab2'} onClick={() => selectTab('tab2')}>
            Tab 2 (slow)
          </TabButton>
          <TabButton isActive={tab === 'tab3'} onClick={() => selectTab('tab3')}>
            Tab 3
          </TabButton>
        </div>
  
        <hr className='mb-4' />
  
        {/* Conditionally render tab content */}
        {tab === 'tab1' && <Tab1 />}
        {tab === 'tab2' && <Tab2 />}
        {tab === 'tab3' && <Tab3 />}
      </div>
    );
  }
  
  export { Tabs as UseTransitionExample };`
}