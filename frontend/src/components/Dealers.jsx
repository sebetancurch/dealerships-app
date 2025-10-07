import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loading from "./common/loading";
import Error from "./common/error";
import states from "../data/states";

function Dealers() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [searchState, setSearchState] = useState("");

  useEffect(() => {
    fetchDealers(searchState);
  }, [searchState]);

  const fetchDealers = async (state) => {
    console.log(state);
    setIsLoading(true);
    const search = state === "" ? "" : "/" + state;
    try {
      const response = await fetch(
        "http://localhost:8000/get_dealerships" + search,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();

      if (response.status === 200) {
        setItems(data.dealers);
        setError(null);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError(data.error);
      }
    } catch (error) {
      setIsLoading(false);
      setError("There was an error fetching dealerships.");
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <main className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Dealerships
            </h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-background-dark">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700/50">
                <thead className="bg-gray-50 dark:bg-gray-800/20">
                  <tr>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      scope="col"
                    >
                      ID
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      scope="col"
                    >
                      Dealer Name
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      scope="col"
                    >
                      City
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      scope="col"
                    >
                      Address
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      scope="col"
                    >
                      Zip
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      scope="col"
                    >
                      <select
                        className="form-select w-1/2 p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100"
                        id="state"
                        name="state"
                        value={searchState}
                        onChange={(e) => setSearchState(e.target.value)}
                      >
                        <option value="">Select State</option>
                        {states.map((state, index) => (
                          <option key={index} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </th>
                    {user && (
                      <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                        scope="col"
                      ></th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
                  {items.map((dealer) => {
                    return (
                      <tr
                        className="hover:bg-gray-50 dark:hover:bg-gray-800/20"
                        key={dealer.id}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {dealer.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          <button
                            onClick={() => navigate(`/dealer/${dealer.id}`)}
                            className="text-primary hover:text-primary/80 hover:underline cursor-pointer font-medium"
                          >
                            {dealer.short_name}
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {dealer.city}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {dealer.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {dealer.zip}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {dealer.state}
                        </td>
                        {user && (
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                              href={"postreview/" + dealer.id}
                            >
                              Review Dealer
                            </a>
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Dealers;
