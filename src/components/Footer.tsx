const Footer = () => {
  return (
    <footer className="flex items-center flex-col p-4 bg-zinc-100 space-y-4 text-xs">
      <a className="flex items-center justify-center gap-2" href="#">
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
        <span className="font-semibold">
          DoWell Random Graph &copy; {new Date().getFullYear()}
        </span>
      </a>
      <nav className="flex gap-4 sm:gap-3 flex-wrap">
        <a className="font-medium hover:underline underline-offset-4" href="#">
          Features
        </a>
        <a className="font-medium hover:underline underline-offset-4" href="#">
          Demo
        </a>
        <a className="font-medium hover:underline underline-offset-4" href="#">
          Documentation
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
