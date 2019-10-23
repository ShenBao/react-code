import React from 'react';
import Header from './../../components/Header/index';

const Home = () => {
  return (
    <div>
      <Header />
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
