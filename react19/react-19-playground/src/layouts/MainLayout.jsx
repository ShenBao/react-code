import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import Squares from '../components/Squares';

function MainLayout() {
  return (
    <main className="pt-[100px] md:pt-[156px] ml-0 md:ml-[250px]">
      <Header />

      {/* Squares Component: https://www.reactbits.dev/backgrounds/squares */}
      <Squares
        className="fixed top-0 left-0 opacity-50"
        speed={0.1}
        squareSize={30}
        direction='diagonal'
        borderColor='#1B1D24'
        hoverFillColor='#57C4DC'
      />
      <div className='w-full p-4'>
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
}

export default MainLayout;
