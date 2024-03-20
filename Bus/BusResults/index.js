import React, { useContext, useEffect } from "react";
import BusContext from "../../../Context/Bus Context";

const BusResults = () => {
    
  const { source, destination } = useContext(BusContext);

  const fetchBuses = async () => {
    let url = `https://academics.newtonschool.co/api/v1/bookingportals/bus?search={"source":"${source}","destination":"${destination}"}&day=Tue`;

    const response = await fetch(url, {
      headers: {
        projectID: "t8tjlydler4b",
      },
    });

    const result = await response.json();
    console.log(result);
  };

  useEffect(() => {
    fetchBuses();
  }, []);

  return <div>BusResults</div>;
};

export default BusResults;
