import { use, useState, Suspense } from 'react';
import CodeSnippet from '../../layouts/CodeSnippet';
import { CODE_SNIPPETS } from '../../assets/CodeSnippets';

// Simulated async function to fetch a message
function fetchMessage() {
  return new Promise((resolve) => setTimeout(resolve, 1000, '⚛️'));
}

// Component to display the message once it resolves
const MessageOutput = ({ messagePromise }) => {
  // Using React 19's `use()` API to directly handle the promise
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
    <div className='relative mx-8 mt-6'>
      <div className='flex justify-center items-center bg-[#1B1D25] p-12 rounded-2xl'>
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

      <CodeSnippet string={CODE_SNIPPETS.use3} />
    </div>
  );
};

export { Message as UseExample3 };
