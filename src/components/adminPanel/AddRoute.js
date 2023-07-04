import React, { useState } from "react";
import { useQuery } from "react-query";

import baseUrl from "../../baseUrl";
import Loading from "../Loading";

const AddRoute = () => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [routeNo, setRouteNo] = useState("");
  const [startTime, setStartTime] = useState("");
  const [routeName, setRouteName] = useState("");
  const [routeDetails, setRouteDetails] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [routeMap, setRouteMap] = useState("");

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

  const handleAddRoute = (e) => {
    e.preventDefault();

    fetch(baseUrl + `/routes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        routeNo,
        startTime,
        routeName,
        routeDetails,
        departureTime,
        routeMap,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged === true) {
          setShowModal(false);
          refetch();
        }
      });
  };

  // Delete
  const handleDelete = (id) => {
    fetch(baseUrl + `/routes/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount !== 0) {
          refetch();
          reset();
        }
      });
  };

  const searching = routes?.filter((route) =>
    route.routeName.toLowerCase().includes(search)
  );

  const reset = () => {
    setRouteNo("");
    setStartTime("");
    setRouteName("");
    setRouteDetails("");
    setDepartureTime("");
    setRouteMap("");
  };
  return (
    <>
      <>
        <div class="mt-8 mb-8">
          <div class=" lg:max-w-7xl md:max-w-xl">
            <h2 class="text-2xl font-semibold font-poppins text-[#131d55]">
              Routes
            </h2>
            <hr class="my-2 w-full h-px border-0 bg-gray-300" />
          </div>
        </div>

        <div class="relative overflow-x-auto lg:overflow-x-hidden sm:rounded-lg font-poppins">
          <div class="flex items-center justify-between px-4 pb-4 bg-white dark:bg-gray-900 pt-4">
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
                placeholder="Search for route"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowModal(true)}
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
            >
              <span className="flex items-center ">
                <svg
                  className="w-4 h-4 font-bold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span class="text-sm ml-2">Routes</span>
              </span>
            </button>
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
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {searching?.map((route) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="px-4 py-4">{route.routeNo}</td>

                  <td class="px-4 py-4">{route.startTime}</td>
                  <td class="px-4 py-4">{route.routeName}</td>
                  <td class="px-4 py-4">{route.routeDetails}</td>
                  <td class="px-4 py-4">{route.departureTime}</td>

                  <td class="px-4 py-4 cursor-pointer text-blue-500">
                    <a href={route.routeMap} target="_blank" rel="noreferrer">
                      {route.routeMap}
                    </a>
                  </td>
                  <td class="px-4 ">
                    <div className="flex items-center justify-center gap-x-2">
                      {/* <span>
                        <svg
                          onClick={() => setShowModal(true)}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-9 h-9 rounded-md bg-blue-50 hover:bg-blue-600 hover:text-white hover:shadow-xl cursor-pointer text-blue-600 border border-blue-600 p-2"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                        </svg>
                      </span> */}
                      <span
                        onClick={() => handleDelete(route?._id)}
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-9 h-9 rounded-md bg-red-50 hover:bg-red-600 hover:text-white hover:shadow-xl cursor-pointer text-red-600 border border-red-600 p-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}

        {showModal ? (
          <>
            <div className="justify-center items-center flex flex-wrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
              <div className="relative my-6 mx-auto">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-2xl font-semibold font-poppins">
                      Add Routes
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className=" text-gray-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form onSubmit={handleAddRoute}>
                      <div className="px-4">
                        <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                          <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                              Route No
                            </label>
                            <input
                              type="text"
                              placeholder="route no"
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                              onChange={(e) => setRouteNo(e.target.value)}
                            />
                          </div>

                          <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                              Start Time
                            </label>
                            <input
                              type="text"
                              placeholder="start time"
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                              onChange={(e) => setStartTime(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Route Name
                          </label>
                          <textarea
                            type="text"
                            placeholder="enter route name"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            onChange={(e) => setRouteName(e.target.value)}
                          />
                        </div>

                        <div className="mb-4">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Route Details
                          </label>
                          <textarea
                            type="text"
                            placeholder="route details"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            onChange={(e) => setRouteDetails(e.target.value)}
                          />
                        </div>

                        <div className="mb-4">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Departure Time
                          </label>
                          <div className="relative z-20 bg-transparent dark:bg-form-input">
                            <input
                              type="text"
                              placeholder="departure time"
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                              onChange={(e) => setDepartureTime(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Route Map
                          </label>
                          <div className="relative z-20 bg-transparent dark:bg-form-input">
                            <input
                              type="text"
                              placeholder="route map"
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                              onChange={(e) => setRouteMap(e.target.value)}
                            />
                          </div>
                        </div>

                        <button className="flex w-full justify-center rounded bg-blue-600 p-3 font-medium text-white">
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </>
  );
};

export default AddRoute;
