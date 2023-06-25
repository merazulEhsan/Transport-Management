import React, { useEffect, useState } from "react";
import baseUrl from "../baseUrl";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useQuery } from "react-query";
import Loading from "./Loading";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  // const [profile, setProfile] = useState([]);

  const [name, setName] = useState("");
  const [id, setSId] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [cAddress, setCAdress] = useState("");
  const [pAddress, setPAddress] = useState("");
  const [dept, setDept] = useState("");

  // useEffect(() => {
  //   fetch(baseUrl + `/users/${user?.email}`, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setProfile(data));
  // }, [user?.email]);

  // const {
  //   isLoading,
  //   data: profile,
  //   refetch,
  // } = useQuery("profile", () =>
  //   fetch(baseUrl + `/users/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => data)
  // );

  const {
    isLoading,
    refetch,
    data: profile,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      fetch(baseUrl + `/users/${user?.email}`).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleEditInfo = (e) => {
    e.preventDefault();

    if (user) {
      fetch(baseUrl + `/users/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          id,
          gender,
          phone,
          cAddress,
          pAddress,
          dept,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.acknowledged === true) {
            setShowModal(false);
            refetch();
          }
        });
    }
  };

  return (
    <div class="container mx-auto">
      <div class=" lg:max-w-7xl md:max-w-xl mb-8">
        <div class="text-2xl font-semibold font-poppins text-[#131d55]">
          Profile Update
          <hr class="my-2 w-full h-px border-0 bg-gray-300" />
        </div>
      </div>
      <div class="md:flex no-wrap md:-mx-2 ">
        {/* <!-- Left Side --> */}
        <div class="w-full md:w-3/12 md:mx-2">
          {/* <!-- Profile Card --> */}
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img
                class="h-36 w-36 mx-auto rounded-full bg-slate-400"
                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                alt=""
              />
            </div>

            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1 text-center">
              {profile?.name}
            </h1>

            <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li class="flex items-center py-3">
                <span>Status</span>
                <span class="ml-auto">
                  <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                    Active
                  </span>
                </span>
              </li>
              <li class="flex items-center py-3">
                <span>Member since</span>
                <span class="ml-auto">Nov 07, 2016</span>
              </li>
            </ul>
          </div>

          {/* <!-- End of profile card --> */}
          <div class="my-4"></div>
        </div>
        {/* <!-- Right Side --> */}
        <div class="w-full md:w-9/12 md:mx-2 rounded-lg">
          {/* <!-- Profile tab --> */}
          {/* <!-- About Section --> */}
          <div class="bg-white p-3 rounded-lg ">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg
                  class="h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 gap-y-3 text-sm font-poppins">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Full Name</div>
                  <div class="px-4 py-2">{profile?.name}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Student Id</div>
                  <div class="px-4 py-2">{profile?.id}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Gender</div>
                  <div class="px-4 py-2">{profile?.gender}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2">{profile?.phone}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Current Address</div>
                  <div class="px-4 py-2">{profile?.cAddress}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Permanant Address</div>
                  <div class="px-4 py-2">{profile?.pAddress}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email.</div>
                  <div class="px-4 py-2">
                    <span class="text-blue-800">{profile?.email}</span>
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Department</div>
                  <div class="px-4 py-2">{profile?.dept}</div>
                </div>
              </div>
              <button
                onClick={() => setShowModal(!showModal)}
                class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
              >
                Edit Information
              </button>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex flex-wrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative my-6 mx-auto">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-2xl font-semibold font-poppins">
                            Edit Information
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
                          <form onSubmit={handleEditInfo}>
                            <div class="grid gap-3 md:gap-6 mb-6 md:grid-cols-2 font-poppins">
                              <div>
                                <label
                                  for="first_name"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  id="first_name"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  defaultValue={profile?.name}
                                  required
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </div>
                              <div>
                                <label
                                  for="last_name"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Student Id
                                </label>
                                <input
                                  type="text"
                                  id="last_name"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  defaultValue={profile?.id}
                                  required
                                  onChange={(e) => setSId(e.target.value)}
                                />
                              </div>
                              <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                  Gender
                                </label>
                                <input
                                  type="text"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  defaultValue={profile?.gender}
                                  required
                                  onChange={(e) => setGender(e.target.value)}
                                />
                              </div>
                              <div>
                                <label
                                  for="phone"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Contact Number
                                </label>
                                <input
                                  type="number"
                                  id="phone"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  defaultValue={profile?.phone}
                                  required
                                  onChange={(e) => setPhone(e.target.value)}
                                />
                              </div>
                              <div>
                                <label
                                  for="website"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Current Address
                                </label>
                                <textarea
                                  type="text"
                                  id="website"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  defaultValue={profile?.cAddress}
                                  required
                                  onChange={(e) => setCAdress(e.target.value)}
                                />
                              </div>
                              <div>
                                <label
                                  for="visitors"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Present Address
                                </label>
                                <textarea
                                  type="text"
                                  id="visitors"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  defaultValue={profile?.pAddress}
                                  required
                                  onChange={(e) => setPAddress(e.target.value)}
                                />
                              </div>

                              <div>
                                <label
                                  for="visitors"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Department
                                </label>
                                <input
                                  type="text"
                                  id="visitors"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  defaultValue={profile?.dept}
                                  required
                                  onChange={(e) => setDept(e.target.value)}
                                />
                              </div>
                            </div>

                            <button
                              type="submit"
                              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          </div>
          {/* <!-- End of about section --> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
