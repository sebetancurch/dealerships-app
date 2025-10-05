import { useEffect, useState } from "react";

function Dealers() {
  const dealers = [
    {
      id: 1,
      name: "Dealer 1",
      city: "City 1",
      state: "State 1",
      zip: "12345",
    },
    {
      id: 2,
      name: "Dealer 2",
      city: "City 2",
      state: "State 2",
    },
    {
      id: 3,
      name: "Dealer 3",
      city: "City 3",
      state: "State 3",
    },
  ];

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(async () => {
    await fetchDealers();
  }, []);

  const fetchDealers = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      response = await fetch("http://localhost:8000/fetchDealers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.state === 200) {
        setItems(data);
        SetError(null);
        setIsLoading(false);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
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
                      State
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      scope="col"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
                  {dealers.map((dealer) => {
                    return (
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/20">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {dealer.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          {dealer.name}
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
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            href="#"
                          >
                            Review Dealer
                          </a>
                        </td>
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
