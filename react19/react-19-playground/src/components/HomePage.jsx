const HomePage = () => {
  return (
    <div className='my-32 md:my-12 text-xl w-full h-full flex flex-col items-center justify-center'>
      <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spinSlow text-[#57C4DC] w-[150px]"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
      <p className="mt-12 text-2xl font-bold text-[#57C4DC] max-w-[35ch] text-center mix-blend-plus-lighter">
        Practical code examples to help you learn the latest React topics
      </p>
      <div className="flex gap-4 items-center relative z-10 mt-6">
        <a href="https://react.dev/blog/2024/12/05/react-19" target="_blank"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#57C4DC] px-5 py-3 text-[#23272f] transition hover:text-gray-600 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium">Official Docs</span>
        </a>

        <a href="https://github.com/DavidHDev/react-19-playground" target="_blank"
          className="inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-[#23272f] bg-white transition hover:text-gray-600 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium">GitHub</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default HomePage;
