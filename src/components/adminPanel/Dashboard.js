import React from "react";
import { useQuery } from "react-query";

import Loading from "../Loading";
import baseUrl from "../../baseUrl";
import moment from "moment/moment";
import FromDsc from "./FromDsc";
import ToDsc from "./ToDsc";
const Dashboard = () => {
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

  return (
    <>
      <ToDsc bookings={bookings}></ToDsc>
      <FromDsc bookings={bookings}></FromDsc>
    </>
  );
};

export default Dashboard;
