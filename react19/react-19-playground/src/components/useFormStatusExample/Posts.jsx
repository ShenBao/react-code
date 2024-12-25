import { useFormStatus } from 'react-dom';
import { useState } from 'react';
import CodeSnippet from '../../layouts/CodeSnippet';
import { CODE_SNIPPETS } from '../../assets/CodeSnippets';

// Component to display individual posts
const PostItem = ({ post }) => {
  return (
    <div className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
      <h2 className='text-xl font-bold'>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

// Custom submit button using `useFormStatus` to manage its state
const SubmitButton = () => {
  // `useFormStatus` provides the `pending` state to indicate if the form is being submitted
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
      className='bg-[#1B1D25] shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4'
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
    <div className='relative mx-8 mt-6'>
      {/* Form to add a new post */}
      <PostForm addPost={addPost} />

      {/* Display the list of posts */}
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}

      <CodeSnippet string={CODE_SNIPPETS.useFormStatus} />
    </div>
  );
};

export { Posts as UseFormStatusExample };
