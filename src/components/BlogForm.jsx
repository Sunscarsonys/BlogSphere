import { useEffect, useState } from "react";

const initialFormState = {
  bannerImage: "",
  title: "",
  content: "",
  author: "",
};

const BlogForm = ({ initialValues, onSubmit, submitLabel }) => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialValues) {
      setFormValues({
        bannerImage: initialValues.bannerImage || "",
        title: initialValues.title || "",
        content: initialValues.content || "",
        author: initialValues.author || "",
      });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formValues.title.trim()) nextErrors.title = "Title is required.";
    if (formValues.title.trim().length < 4)
      nextErrors.title = "Title must be at least 4 characters.";
    if (!formValues.author.trim())
      nextErrors.author = "Author name is required.";
    if (!formValues.content.trim()) nextErrors.content = "Content is required.";
    if (formValues.content.trim().length < 20) {
      nextErrors.content = "Content must be at least 20 characters.";
    }
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) return;

    onSubmit({
      bannerImage: formValues.bannerImage.trim(),
      title: formValues.title.trim(),
      content: formValues.content.trim(),
      author: formValues.author.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white">

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 md:py-12 space-y-8">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-500">
            Banner Image URL
          </label>
          <input
            name="bannerImage"
            value={formValues.bannerImage}
            onChange={handleChange}
            placeholder="https://images.unsplash.com/..."
            className="w-full border-b border-slate-300 pb-2 text-sm text-slate-700 outline-none transition focus:border-slate-900"
          />
        </div>

        <div>
          <input
            name="title"
            value={formValues.title}
            onChange={handleChange}
            placeholder="Write your story title..."
            className="w-full border-none text-3xl sm:text-4xl md:text-5xl font-heading text-slate-900 placeholder:text-slate-300 outline-none"
          />
          {errors.title && (
            <p className="mt-2 text-sm text-rose-500">{errors.title}</p>
          )}
        </div>

        <div>
          <input
            name="author"
            value={formValues.author}
            onChange={handleChange}
            placeholder="Author name"
            className="w-full border-b border-slate-300 pb-2 text-sm text-slate-600 outline-none focus:border-slate-900"
          />
          {errors.author && (
            <p className="mt-1 text-sm text-rose-500">{errors.author}</p>
          )}
        </div>

        <div>
          <textarea
            name="content"
            value={formValues.content}
            onChange={handleChange}
            rows={10}
            placeholder="Start writing your story..."
            className="w-full resize-none border-none text-[1.05rem] leading-8 text-slate-800 placeholder:text-slate-400 outline-none"
          />
          {errors.content && (
            <p className="mt-2 text-sm text-rose-500">{errors.content}</p>
          )}
        </div>

        <div className="h-px w-full bg-slate-200" />

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default BlogForm;