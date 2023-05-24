import React from "react";

const Loading = () => {
  return (
    <div class="h-screen flex flex-col bg-white border dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
        <div class="flex justify-center animate-bounce">
          <div
            class="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-purple-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <p className="font-poppins text-lg font-semibold tracking-wider mt-2">
          Loading...
        </p>
        <p className="font-poppins text-sm font-thin tracking-wider mt-2">
          This may take a few seconds, please wait !
        </p>
      </div>
    </div>
  );
};

export default Loading;
