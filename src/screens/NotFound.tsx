import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="container hero-space-block flex flex-col items-center justify-center min-h-screen text-center px-page">
      <h1 className="text-[120px] font-bold text-primary font-urbanist">404</h1>
      <h2 className="text-4xl font-medium text-secondary mb-4">
        Page Not Found
      </h2>
      <p className="text-accent-one mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn-glass-effect font-medium py-3 px-6 rounded-[36px] inline-block text-white"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
