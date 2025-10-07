import { useNavigate } from "react-router-dom";

function NotAuthorized() {
  const navigate = useNavigate();

  return (
    <main className="flex-grow flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-background-dark rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50 m-4">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-primary mx-auto">
            lock
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Access Denied
          </h2>
          <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
            You need to be logged in to view this page.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="w-full flex justify-center py-3 px-4 border rounded-lg text-sm font-medium text-primary bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 border-primary/20 dark:border-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </main>
  );
}

export default NotAuthorized;
