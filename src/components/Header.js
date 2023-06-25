import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900 mb-6 rounded-md">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 px-10">
        <a href="https://flowbite.com/" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap font-poppins dark:text-white">
            DIU
          </span>
        </a>

        <div class="flex items-center md:order-2 space-x-3">
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-7 h-7 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
          </button>
          <span className="font-poppins font-thin1 text-sm">
            {user?.displayName}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
