import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  // Define a mapping of paths to titles
  const pathTitles = {
    "/": "Explore React 19",
    "/use/1": "use() Example #1",
    "/use/2": "use() Example #2",
    "/use/3": "use() Example #3",
    "/use/4": "use() Example #4",
    "/actions/1": "Form Actions #1",
    "/actions/2": "Form Actions #2",
    "/useformstatus": "useFormStatus()",
    "/useactionstate": "useActionState()",
    "/useoptimistic": "useOptimistic()",
    "/usetransition": "useTransition()",
    "/usedeferredvalue": "useDeferredValue()",
  }

  const title = pathTitles[pathname] || "Explore React";

  return (
    <header className={`bg-[#57C4DC] absolute top-[70px] md:top-0 left-1/2 md:left-[250px] transform -translate-x-1/2 md:translate-x-0 md:ml-12 md:mt-12 w-[96%] md:w-fit z-10 rounded-full app-header ${pathname !== '/' && 'hide-arrow'}`}>
      <div className="py-4 pl-6 pr-4">
        <div className="flex gap-4 items-center justify-between">
          {/* Title */}
          <div>
            <h1 className="text-sm md:text-2xl font-bold text-[#23272f] text-nowrap">{title}</h1>
          </div>

          {/* Buttons */}
          <div className="md:flex hidden items-center gap-0 md:gap-4">
            <a
              href="https://react.dev/blog/2024/12/05/react-19" target="_blank"
              className="text-nowrap inline-block rounded px-5 py-3 text-sm font-medium text-[#23272f] transition focus:outline-none focus:ring"
              type="button"
            >
              Official Docs
            </a>

            <a href="https://github.com/DavidHDev/react-19-playground" target="_blank"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#23272f] px-5 py-3 text-white transition hover:text-gray-300 focus:outline-none focus:ring"
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
      </div>
    </header>
  );
};

export default Header;
