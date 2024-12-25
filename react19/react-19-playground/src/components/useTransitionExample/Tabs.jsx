import { useState, useTransition, memo } from 'react';
import CodeSnippet from '../../layouts/CodeSnippet';
import { CODE_SNIPPETS } from '../../assets/CodeSnippets';

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
  // `useTransition` provides a mechanism to manage transitions in a non-blocking way
  const [, startTransition] = useTransition();
  const [tab, setTab] = useState('tab1'); // Tracks the currently active tab

  function selectTab(nextTab) {
    // `startTransition` ensures that the UI remains responsive while transitioning
    startTransition(() => {
      setTab(nextTab); // Update the active tab
    });
  }

  return (
    <div className='relative mx-8 mt-2'>
      <div className='p-6 bg-[#1B1D25] rounded-2xl'>
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

      <CodeSnippet string={CODE_SNIPPETS.useTransition} />
    </div>
  );
}

export { Tabs as UseTransitionExample };
