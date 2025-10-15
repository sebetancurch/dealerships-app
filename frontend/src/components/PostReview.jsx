import { useAuth } from "../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotAuthorized from "./common/not-authorized";
import Loading from "./common/loading";
import Error from "./common/error";

function PostReview() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
  const { id } = useParams();

  const { user, token } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(BACKEND_URL + "/get_cars", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.status === 200) {
        setCars(data.CarModels);
        setError(null);
        setIsLoading(false);
      } else {
        setShowErrorPage(true);
      }
    } catch (error) {
      setShowErrorPage(true);
      console.log(error);
    }
  };

  const addReview = async (e) => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    const selectedCar = JSON.parse(data.car);
    data.car_make = selectedCar.CarMake;
    data.car_model = selectedCar.CarModel;

    data.name = user.username;
    data.purchase = true;

    delete data.car;

    data.dealership = id;

    const response = await fetch(BACKEND_URL + "/add_review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      navigate("/dealer/" + id);
    } else {
      const data = await response.json();
      setSubmitting(false);
      setError(data.detail);
    }
  };

  if (!user) {
    return <NotAuthorized />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (showErrorPage) {
    return <Error />;
  }

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Write a Review
        </h2>
        <form className="space-y-6" onSubmit={addReview}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="review"
            >
              Your Review
            </label>
            <textarea
              className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              id="review"
              name="review"
              placeholder="Share your experience with us..."
              rows="6"
              required
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                htmlFor="purchase-date"
              >
                Purchase Date
              </label>
              <input
                className="form-input w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100"
                id="purchase_date"
                name="purchase_date"
                type="date"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                htmlFor="car-make"
              >
                Car Make
              </label>
              <select
                className="form-select w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100"
                id="car"
                name="car"
                required
              >
                <option value="">Select Make</option>
                {cars.map((car, index) => (
                  <option
                    key={index}
                    value={JSON.stringify({
                      CarMake: car.CarMake,
                      CarModel: car.CarModel,
                    })}
                  >
                    {car.CarModel}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                htmlFor="car-year"
              >
                Car Year
              </label>
              <input
                className="form-input w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100"
                id="car_year"
                name="car_year"
                type="number"
                min="1900"
                max="2025"
                placeholder="YYYY"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary transition-all duration-200"
              disabled={submitting}
              type="submit"
            >
              {submitting ? "Submitting..." : "Submit Review"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </main>
  );
}

export default PostReview;
