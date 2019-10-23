import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>React-SSR</h1>
      <button
        onClick={() => {
          console.log (Date.now ());
        }}
      >
        事件测试
      </button>
    </div>
  );
};

export default Home;
