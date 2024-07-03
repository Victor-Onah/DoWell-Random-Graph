import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-4 lg:p-6 flex items-center sticky top-0 w-full shadow bg-white max-md:flex-col gap-3">
      <a
        className="flex items-center justify-center gap-2 text-nowrap"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-6 w-6"
        >
          <circle cx="5" cy="6" r="3"></circle>
          <path d="M5 9v6"></path>
          <circle cx="5" cy="18" r="3"></circle>
          <path d="M12 3v18"></path>
          <circle cx="19" cy="6" r="3"></circle>
          <path d="M16 15.7A9 9 0 0 0 19 9"></path>
        </svg>
        <span className="font-semibold">DoWell Random Graph</span>
      </a>
      <div
        className="fixed top-[18px] right-4 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 -960 960 960"
              width="16px"
              fill="#000000"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        ) : (
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 -960 960 960"
              width="16px"
              fill="#000000"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        )}
      </div>
      <nav
        className={`${
          isMenuOpen || "max-md:hidden"
        } ml-auto flex gap-4 sm:gap-6 max-md:flex-col w-full max-md:text-center md:justify-end`}
      >
        <a
          onClick={() => setIsMenuOpen(false)}
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#features"
        >
          Features
        </a>
        <a
          onClick={() => setIsMenuOpen(false)}
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#docs"
        >
          Documentation
        </a>
        <a
          onClick={() => setIsMenuOpen(false)}
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#demo"
        >
          Demo
        </a>
      </nav>
    </header>
  );
};

export default Header;
