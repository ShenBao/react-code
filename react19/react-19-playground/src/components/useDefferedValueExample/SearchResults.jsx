import { useState, useDeferredValue } from 'react';
import CodeSnippet from '../../layouts/CodeSnippet';
import { CODE_SNIPPETS } from '../../assets/CodeSnippets';

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
    <div className='relative mx-8 mt-6'>
      <div className="p-6 bg-[#1B1D25] rounded-2xl text-white">
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

      <CodeSnippet string={CODE_SNIPPETS.useDeferredValue} />
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

export { SearchBox as UseDeferredValueExample };
