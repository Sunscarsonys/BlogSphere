import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-3 py-6 sm:px-6 sm:py-6">

        <Link
          to="/"
          className="flex items-center gap-2 font-heading text-slate-900"
        >
          <svg
            className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="2" />
            <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
          </svg>

          <span className="text-xl sm:text-2xl md:text-3xl leading-none">
            BlogSphere
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <NavLink
            to="/add"
            className="rounded-full border border-slate-900 bg-slate-900 px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white transition hover:bg-white hover:text-slate-900"
          >
            + Add Post
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
