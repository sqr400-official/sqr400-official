import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

// Eagerly Loaded Components (Important for SEO)
import HomePage from "./pages/HomePage";
import ProductSingle from "./pages/ProductSingle";
import BlogSingle from "./pages/BlogSingle";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import Spinner from "./Spinner";
import { Toaster } from "react-hot-toast";

// Lazy Loaded Components (Non-SEO Critical)
const Checkout = lazy(() => import("./pages/Checkout"));
const VerificationPage = lazy(() => import("./pages/VerificationPage"));
const Description = lazy(() => import("./components/Description"));
const Reviews = lazy(() => import("./components/Reviews"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const CreatePost = lazy(() => import("./pages/CreatePost"));
const AllPosts = lazy(() => import("./pages/AllPosts"));
const EditPost = lazy(() => import("./pages/EditPost"));
const SignIn = lazy(() => import("./pages/SignIn"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle redirect from 404.html
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath) {
      navigate(redirectPath);
    }
  }, [navigate]);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Spinner />}>
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
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="create-post" element={<CreatePost />} />
              <Route path="edit-post/:id" element={<EditPost />} />
              <Route path="all-posts" element={<AllPosts />} />
            </Route>
          </Route>

          <Route path="login" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          styles: {
            fontSize: "1rem",
            maxWidth: "500px",
            padding: "16px 24px",
            background: "var(--color-grey-0)",
            color: "var(--color-grey-0)",
            borderRadius: "8px",
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
