import { useEffect, useState } from "react";
import baseUrl from "../../baseUrl";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(baseUrl + `/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
        });
    }
  }, [email]);
  return [admin];
};

export default useAdmin;
