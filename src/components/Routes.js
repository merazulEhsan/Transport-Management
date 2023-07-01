import React from "react";
import { useQuery } from "react-query";
import baseUrl from "../baseUrl";
import Loading from "./Loading";

const Routes = () => {
  const {
    isLoading,
    data: routes,
    refetch,
  } = useQuery("routes", () =>
    fetch(baseUrl + "/routes").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div class="mt-8 mb-8">
        <div class=" lg:max-w-7xl md:max-w-xl">
          <h2 class="text-2xl font-semibold font-poppins text-[#131d55]">
            Routes Schedule
          </h2>
          <hr class="my-2 w-full h-px border-0 bg-gray-300" />
        </div>
      </div>
      <div class="relative overflow-x-auto lg:overflow-x-hidden sm:rounded-lg font-poppins">
        <div class="flex items-center justify-end px-4 pb-4 bg-white dark:bg-gray-900 pt-4">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Route No
              </th>
              <th scope="col" class="px-6 py-3">
                Start time (To DSC)
              </th>
              <th scope="col" class="px-6 py-3">
                Route Name
              </th>

              <th scope="col" class="px-6 py-3">
                Route Details
              </th>
              <th scope="col" class="px-6 py-3">
                Departure Time (From DSC)
              </th>
              <th scope="col" class="px-6 py-3">
                Route Map
              </th>
            </tr>
          </thead>
          <tbody>
            {routes?.map((route) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4">{route.routeNo}</td>

                <td class="px-6 py-4">{route.startTime}</td>
                <td class="px-6 py-4">{route.routeName}</td>
                <td class="px-6 py-4">{route.routeDetails}</td>
                <td class="px-6 py-4">{route.departureTime}</td>

                <td class="px-6 py-4 cursor-pointer text-blue-500">
                  <a href={route.routeMap} target="_blank" rel="noreferrer">
                    {route.routeMap}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Routes;
