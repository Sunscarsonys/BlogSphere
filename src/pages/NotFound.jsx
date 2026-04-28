import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="space-y-12">
      <section className="mx-auto max-w-4xl px-4 py-6 text-center md:py-6 lg:py-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            404 Error
          </p>

          <h1 className="font-heading text-5xl leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Page Not Found
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          <div className="pt-4">
            <Link
              to="/"
              className="inline-block rounded-full border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-slate-900"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;