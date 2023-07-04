import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import baseUrl from "../baseUrl";
import { useQuery } from "react-query";
import Loading from "./Loading";

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [person, setPerson] = useState("");
  const [user] = useAuthState(auth);
  const email = user?.email;

  // Create Booking
  const handleBooking = (e) => {
    e.preventDefault();
    fetch(baseUrl + `/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ from, to, date, person, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          refetch();
          reset();
        }
      });
  };

  const reset = () => {
    setFrom("");
    setTo("");
    setDate("");
    setPerson("");
  };
  // Show Booking
  const {
    isLoading,
    data: bookings,
    refetch,
  } = useQuery("bookings", () =>
    fetch(baseUrl + "/booking").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  // Delete
  const handleDelete = (id) => {
    fetch(baseUrl + `/booking/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount !== 0) {
          refetch();
        }
      });
  };

  const filterByEmail = bookings?.filter((booking) => booking.email === email);

  return (
    <section className="mb-10 lg:mb-0">
      {/* <!-- Input Data --> */}
      <div class="mt-8 mb-8">
        <div class=" lg:max-w-7xl md:max-w-xl">
          <h2 class="text-2xl font-semibold font-poppins text-[#131d55]">
            Seat Booking
          </h2>
          <hr class="my-2 w-full h-px border-0 bg-gray-300" />
        </div>
      </div>
      <div class="relative">
        <div class="bg-white rounded-md w-full mx-auto">
          <form
            onSubmit={handleBooking}
            class="flex flex-col lg:flex-row justify-evenly items-center divide-y-2 lg:divide-y-0 lg:divide-x-2 font-poppins"
          >
            {/* <!-- From --> */}
            <div class="p-5">
              <p className="text-lg text-gray-500">Destination From</p>
              <div class="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <select
                  onChange={(e) => setFrom(e.target.value)}
                  class="outline-none px-2 py-2 w-full text-base"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="Dhanmondi">Dhanmondi</option>
                  <option value="Mirpur">Mirpur</option>
                  <option value="Uttara">Uttara</option>
                  <option value="Tongi">Tongi</option>
                  <option value="Narayangang">Narayangang</option>
                  <option value="Banani">Banani</option>
                  <option value="Dsc">Dsc</option>
                  <option value="Savar">Savar</option>
                </select>
              </div>
            </div>
            {/* <span className='border border-gray-400 h-20 '></span> */}
            <div class="p-5">
              <p className="text-lg text-gray-500">Destination To</p>
              <div class="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <select
                  class="outline-none px-2 py-2 w-full text-base"
                  required
                  onChange={(e) => setTo(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="Dhanmondi">Dhanmondi</option>
                  <option value="Mirpur">Mirpur</option>
                  <option value="Uttara">Uttara</option>
                  <option value="Tongi">Tongi</option>
                  <option value="Narayangang">Narayangang</option>
                  <option value="Banani">Banani</option>
                  <option value="Dsc">Dsc</option>
                </select>
              </div>
            </div>
            {/* <span className='border border-gray-400 h-20'></span> */}

            <div class="p-5">
              <p>Date</p>
              <input
                type="date"
                class="outline-none px-2 py-2 w-full date"
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* <span className='border border-gray-400 h-20'></span> */}

            <div class="p-5">
              <p className="text-lg text-gray-500">Person</p>
              <div class="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <select
                  class="outline-none px-2 py-2 w-full text-base"
                  required
                  onChange={(e) => setPerson(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <div className="flex items-center p-5">
              <button class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
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
                  <span class="text-sm ml-2">Book</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- Preview Data --> */}
      <div class="relative overflow-x-auto  sm:rounded-lg mt-10">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 font-poppins">
          <thead class="text-sm text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Destination From
              </th>
              <th scope="col" class="px-6 py-3">
                Destination TO
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Person
              </th>
              <th scope="col" class="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          {filterByEmail?.map((booking) => (
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {booking.from}
                </th>
                <td class="px-6 py-4">{booking.to}</td>
                <td class="px-6 py-4">{booking.date}</td>
                <td class="px-6 py-4">{booking.person}</td>
                <td class="px-6 py-4 text-right">
                  <svg
                    onClick={() => handleDelete(booking?._id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 h-10 rounded-md bg-red-50 hover:bg-red-600 hover:text-white hover:shadow-xl cursor-pointer text-red-600 border border-red-600 p-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default Home;
