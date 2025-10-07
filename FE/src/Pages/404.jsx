import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-2">Oops! Page not found.</p>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
      <p>{error.statusText || error.massage }</p>
    </div>
  );
}

export default ErrorPage;