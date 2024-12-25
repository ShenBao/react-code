import { use, Suspense } from 'react';
import CodeSnippet from '../../layouts/CodeSnippet';
import { CODE_SNIPPETS } from '../../assets/CodeSnippets';

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

// Component using the new `use()` API to handle async data directly in components
const JokeItem = () => {
  // The `use()` API allows you to call promises directly within components
  // It will suspend the rendering of this component until the promise resolves
  const joke = use(fetchData());
  return (
    <div className='bg-[#1B1D25] shadow-md p-4 my-6 rounded-lg text-white'>
      {/* Display the joke */}
      <h2 className='text-xl'>{joke.value}</h2>
    </div>
  );
};

// Wrapper component using Suspense for fallback rendering
const Joke = () => {
  return (
    <div className='mt-6 relative mx-8'>
      <Suspense
        fallback={
          // Fallback UI while waiting for JokeItem to resolve its data
          <h2 className='text-2xl text-center text-white font-bold mt-5'>Loading...</h2>
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

      <CodeSnippet string={CODE_SNIPPETS.use1} />
    </div>

  );
};

export { Joke as UseExample1 };
