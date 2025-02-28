import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductSingle from "./pages/ProductSingle";
import Description from "./components/Description";
import Reviews from "./components/Reviews.";
import Checkout from "./pages/Checkout";
import VerificationPage from "./pages/VerificationPage";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import BlogSingle from "./pages/BlogSingle";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import AdminPage from "./pages/AdminPage";
import AllPosts from "./pages/AllPosts";
import EditPost from "./pages/EditPost";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if redirected from 404.html
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath) {
      navigate(redirectPath); // Navigate to the correct route
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="product/:id" element={<ProductSingle />}>
        <Route index element={<Description />} />
        <Route path="description" element={<Description />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="product/:id/check-out" element={<Checkout />} />
      <Route
        path="product/:id/check-out/verify"
        element={<VerificationPage />}
      />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Posts />} />
      <Route path="blog/:id" element={<BlogSingle />} />

      <Route element={<ProtectedRoute />}>
        <Route path="admin" element={<AdminPage />}>
          <Route path="create-post" element={<CreatePost />} />
          <Route path="edit-post/:id" element={<EditPost />} />
          <Route path="all-posts" element={<AllPosts />} />
        </Route>
      </Route>

      <Route path="sign-in" element={<SignIn />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
