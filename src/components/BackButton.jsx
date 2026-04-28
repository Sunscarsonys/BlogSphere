import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition hover:border-slate-300 hover:bg-slate-50"
    >
      <span aria-hidden="true">&larr;</span>
      Back
    </button>
  );
};

export default BackButton;
