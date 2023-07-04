import moment from "moment";
import React from "react";

const FromDsc = ({ bookings }) => {
  const d1 = bookings
    ?.filter((booking) => booking.to.toLowerCase() === "dhanmondi")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d2 = bookings
    ?.filter((booking) => booking.to.toLowerCase() === "mirpur")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d3 = bookings
    ?.filter((booking) => booking.to.toLowerCase() === "uttara")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d4 = bookings
    ?.filter((booking) => booking.to.toLowerCase() === "tongi")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d5 = bookings
    ?.filter((booking) => booking.to.toLowerCase() === "narayangang")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d6 = bookings
    ?.filter((booking) => booking.to.toLowerCase() === "banani")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);
  const d7 = bookings
    ?.filter((booking) => booking.to.toLowerCase() === "savar")
    ?.filter((booking) =>
      moment(booking.date).isSame(moment().add(1, "days"), "day")
    )
    ?.reduce((acc, b) => acc + parseInt(b.person), 0);

  return (
    <>
      {/* To DSC */}
      <div class=" lg:max-w-7xl md:max-w-xl mt-6">
        <h2 class="text-2xl font-semibold font-poppins text-[#131d55]">
          From DSC
        </h2>
        <hr class="my-2 w-full h-px border-0 bg-gray-300" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <div className="rounded-sm border border-stroke bg-white py-4 px-5 shadow-md dark:border-strokedark dark:bg-boxdark">
          <div className="mt-3 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">
                DSC To Dhanmondi
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
                DSC to Mirpur
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
                DSC To Uttara
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
                DSC To Tongi
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
                DSC To Narayangong
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
                DSC To Banani
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
                DSC To Savar
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

export default FromDsc;
