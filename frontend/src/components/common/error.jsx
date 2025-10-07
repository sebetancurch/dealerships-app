import { useNavigate } from "react-router-dom";

function Error({ error }) {
  const navigate = useNavigate();

  return (
    <main className="flex-1 flex items-center justify-center text-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full flex flex-col items-center gap-8">
        <div className="p-6 bg-primary/10 dark:bg-primary/20 rounded-full">
          <span className="material-symbols-outlined text-primary text-6xl">
            {" "}
            error{" "}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tighter">
            Unespexcepted Error
          </h1>
          <p className="text-lg text-foreground-light/80 dark:text-foreground-dark/80">
            {error ||
              "We're sorry, there was an unexpected error while processing your request."}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <button
            className="flex-1 flex items-center justify-center gap-2 rounded-lg h-12 px-6 text-base font-bold bg-primary text-white hover:bg-primary/90 transition-colors"
            onClick={() => navigate("/")}
          >
            <span className="material-symbols-outlined"> home </span>
            <span>Go to Homepage</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Error;
