import moment from "moment";
import React from "react";

const ToDsc = ({ bookings }) => {
  const d1 = bookings
    ?.filter((booking) => booking.from.toLowerCase() === "dhanmondi")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d2 = bookings
    ?.filter((booking) => booking.from.toLowerCase() === "mirpur")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d3 = bookings
    ?.filter((booking) => booking.from.toLowerCase() === "uttara")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d4 = bookings
    ?.filter((booking) => booking.from.toLowerCase() === "tongi")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d5 = bookings
    ?.filter((booking) => booking.from.toLowerCase() === "narayangang")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d6 = bookings
    ?.filter((booking) => booking.from.toLowerCase() === "banani")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d7 = bookings
    ?.filter((booking) => booking.from.toLowerCase() === "savar")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);

  return (
    <>
      <div class=" lg:max-w-7xl md:max-w-xl">
        <h2 class="text-2xl font-semibold font-poppins text-[#131d55]">
          TO DSC
        </h2>
        <hr class="my-2 w-full h-px border-0 bg-gray-300" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <div className="rounded-sm border border-stroke bg-white py-4 px-5 shadow-md dark:border-strokedark dark:bg-boxdark">
          <div className="mt-3 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">
                Dhanmondi To DSC
              </h4>
              <span className="text-sm font-medium">Total Passenger:</span>
            </div>

            <span className="flex items-center gap-1 text-sm ">{d1}</span>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white py-4 px-5 shadow-md dark:border-strokedark dark:bg-boxdark">
          <div className="mt-3 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">
                Mirpur To DSC
              </h4>
              <span className="text-sm font-medium">Total Passenger:</span>
            </div>

            <span className="flex items-center gap-1 text-sm ">{d2}</span>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white py-4 px-5 shadow-md dark:border-strokedark dark:bg-boxdark">
          <div className="mt-3 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">
                Uttara To DSC
              </h4>
              <span className="text-sm font-medium">Total Passenger:</span>
            </div>

            <span className="flex items-center gap-1 text-sm ">{d3}</span>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white py-4 px-5 shadow-md dark:border-strokedark dark:bg-boxdark">
          <div className="mt-3 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">
                Tongi To DSC
              </h4>
              <span className="text-sm font-medium">Total Passenger:</span>
            </div>

            <span className="flex items-center gap-1 text-sm ">{d4}</span>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white py-4 px-5 shadow-md dark:border-strokedark dark:bg-boxdark">
          <div className="mt-3 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">
                Narayangong To DSC
              </h4>
              <span className="text-sm font-medium">Total Passenger:</span>
            </div>

            <span className="flex items-center gap-1 text-sm ">{d5}</span>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white py-4 px-5 shadow-md dark:border-strokedark dark:bg-boxdark">
          <div className="mt-3 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">
                Banani To DSC
              </h4>
              <span className="text-sm font-medium">Total Passenger:</span>
            </div>

            <span className="flex items-center gap-1 text-sm ">{d6}</span>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white py-4 px-5 shadow-md dark:border-strokedark dark:bg-boxdark">
          <div className="mt-3 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">
                Savar To DSC
              </h4>
              <span className="text-sm font-medium">Total Passenger:</span>
            </div>

            <span className="flex items-center gap-1 text-sm ">{d7}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDsc;
