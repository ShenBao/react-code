import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-30 md:hidden text-white bg-neutral-900 p-2 rounded focus:outline-none"
      >
        {isOpen

          ? <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          : <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        }

      </button>

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 left-0 h-screen w-full bg-[#1B1D24] z-20 transform transition-all ${isOpen ? "translate-x-0 pt-[60px]" : "-translate-x-full"
          } md:translate-x-0 md:w-[250px] md:max-w-[250px]`}
      >
        <div className="px-4">
          <ul className="mt-6 space-y-1">
            <li>
              <p
                className="block rounded-lg py-2 text-2xl text-neutral-600 font-bold hover:text-gray-500 transition"
              >
                Topics
              </p>
            </li>

            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                <p
                  className={`${location.pathname === '/' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
                >
                  Home
                </p>
              </Link>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  className="flex cursor-pointer items-center justify-between rounded-lg py-2 text-white hover:text-gray-500 transition"
                >
                  <span className="font-medium">Actions</span>
                  <span className="shrink-0 transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <ul className="mt-2 space-y-1 pl-2">
                  <li>
                    <Link
                      to="/actions/1" onClick={() => setIsOpen(false)}
                      className={`${location.pathname === '/actions/1' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
                    >
                      Example 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/actions/2" onClick={() => setIsOpen(false)}
                      className={`${location.pathname === '/actions/2' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
                    >
                      Example 2
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  className="flex cursor-pointer items-center justify-between rounded-lg py-2 text-white hover:text-gray-500 transition"
                >
                  <span className="font-medium">use()</span>
                  <span className="shrink-0 transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <ul className="mt-2 space-y-1 pl-2">
                  <li>
                    <Link
                      to="/use/1" onClick={() => setIsOpen(false)}
                      className={`${location.pathname === '/use/1' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
                    >
                      Example 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/use/2" onClick={() => setIsOpen(false)}
                      className={`${location.pathname === '/use/2' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
                    >
                      Example 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/use/3" onClick={() => setIsOpen(false)}
                      className={`${location.pathname === '/use/3' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
                    >
                      Example 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/use/4" onClick={() => setIsOpen(false)}
                      className={`${location.pathname === '/use/4' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
                    >
                      Example 4
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link
                to="/useformstatus" onClick={() => setIsOpen(false)}
                className={`${location.pathname === '/useformstatus' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
              >
                useFormStatus()
              </Link>
            </li>
            <li>
              <Link
                to="/useactionstate" onClick={() => setIsOpen(false)}
                className={`${location.pathname === '/useactionstate' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
              >
                useActionState()
              </Link>
            </li>
            <li>
              <Link
                to="/usedeferredvalue" onClick={() => setIsOpen(false)}
                className={`${location.pathname === '/usedeferredvalue' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
              >
                useDeferredValue()
              </Link>
            </li>
            <li>
              <Link
                to="/useoptimistic" onClick={() => setIsOpen(false)}
                className={`${location.pathname === '/useoptimistic' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
              >
                useOptimistic()
              </Link>
            </li>
            <li>
              <Link
                to="/usetransition" onClick={() => setIsOpen(false)}
                className={`${location.pathname === '/usetransition' ? 'text-[#57C4DC]' : 'text-white'} block rounded-lg py-2 font-medium hover:text-gray-500 transition`}
              >
                useTransition()
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay (for mobile) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
