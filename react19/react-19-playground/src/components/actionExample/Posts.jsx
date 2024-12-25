import { useState } from 'react';
import { CODE_SNIPPETS } from '../../assets/CodeSnippets';
import CodeSnippet from '../../layouts/CodeSnippet';

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

      <CodeSnippet string={CODE_SNIPPETS.action1} />
    </div>
  );
};

export { Posts as ActionExample1 };