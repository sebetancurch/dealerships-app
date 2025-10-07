import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [serverError, setServerError] = useState(false);
  const [clientError, setClientError] = useState(null);

  const register = async (e) => {
    e.preventDefault();
    setServerError(false);
    setClientError(null);

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      let response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        login(data);
        navigate("/");
      } else {
        setClientError(data.error);
      }
    } catch (error) {
      setServerError(true);
      console.log(error);
    }
  };

  return (
    <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground-light dark:text-foreground-dark">
            Create your account
          </h2>
        </div>
        <form onSubmit={register} className="mt-8 space-y-6" method="POST">
          <div className="rounded-lg shadow-sm -space-y-px">
            <div>
              <label className="sr-only" htmlFor="username">
                Username
              </label>
              <input
                autoComplete="username"
                className="appearance-none rounded-none relative block w-full px-3 py-3 border-0 bg-input-light dark:bg-input-dark placeholder-subtle-light dark:placeholder-subtle-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                id="username"
                name="username"
                placeholder="Username"
                required=""
                type="text"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="firstname">
                First Name
              </label>
              <input
                autoComplete="firstname"
                className="appearance-none rounded-none relative block w-full px-3 py-3 border-0 bg-input-light dark:bg-input-dark placeholder-subtle-light dark:placeholder-subtle-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                required=""
                type="text"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="lastname">
                Last Name
              </label>
              <input
                autoComplete="lastname"
                className="appearance-none rounded-none relative block w-full px-3 py-3 border-0 bg-input-light dark:bg-input-dark placeholder-subtle-light dark:placeholder-subtle-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm rounded-b-lg"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                required=""
                type="text"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email-address">
                Email
              </label>
              <input
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-3 border-0 bg-input-light dark:bg-input-dark placeholder-subtle-light dark:placeholder-subtle-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                placeholder="Email"
                required=""
                type="email"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                autoComplete="password"
                className="appearance-none rounded-none relative block w-full px-3 py-3 border-0 bg-input-light dark:bg-input-dark placeholder-subtle-light dark:placeholder-subtle-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm rounded-b-lg"
                id="password"
                name="password"
                placeholder="Password"
                required=""
                type="password"
              />
            </div>
          </div>
          <div>
            <button
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              type="submit"
            >
              Register
            </button>
          </div>
          {serverError && (
            <p className="text-red-500">An unexpected error has occured</p>
          )}
          {clientError && <p className="text-red-500">{clientError}</p>}
          <div className="text-sm text-center">
            <a
              className="font-medium text-primary hover:text-primary/90"
              href="/login"
            >
              Already have an account? Sign in
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
