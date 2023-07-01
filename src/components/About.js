import React from "react";

const About = () => {
  return (
    <>
      {/* <!-- component --> */}
      <div class="mt-8 mb-8">
        <div class=" lg:max-w-7xl md:max-w-xl">
          <h2 class="text-2xl font-semibold font-poppins text-[#131d55]">
            About Us
          </h2>
          <hr class="my-2 w-full h-px border-0 bg-gray-300" />
        </div>
      </div>
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src="https://pd.daffodilvarsity.edu.bd/web/image/76447/DIU%20Transport%20%284%29.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl  ">
                About <span className="text-blue-500"> Us</span>
              </h2>
              <p class="mt-6 text-gray-600 tracking-wide font-poppins text-base text-justify">
                Transportation is a major issue to both students and parents.
                Most of the university students are matured enough to travel
                their campuses by themselves. In these cases, students use
                public transport from different places. DIU is always concerned
                about their students and for this purpose now, We have around 50
                + buses which are exclusively used for our
                students/faculty/admin personnel and staff. A parents Car and an
                ambulance is also available for the students and their parents.
                Total transportation system is managed from our Ashulia campus.
                All the transports are moving for the students on different
                routes and campuses from Ashulia Campus. Students just need to
                present their ID card for getting this facility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
