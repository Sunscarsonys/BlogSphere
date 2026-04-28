import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostDetails from "./pages/PostDetails";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen text-slate-900 antialiased bg-[#ebebeb]]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 blur-2xl"></div>
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 blur-2xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-green-300 to-blue-300 opacity-30 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-purple-300 to-pink-300 opacity-20 blur-2xl"></div>
      </div>
      <Navbar />
      <main className="relative mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
