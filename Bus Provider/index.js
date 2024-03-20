import React, { useState } from "react";
import BusContext from "../../Context/Bus Context";

const BusProvider = ({ children }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [day, setDay] = useState("Tue");

  return (
    <BusContext.Provider
      value={{
        source,
        setSource,
        destination,
        setDestination,
        day,
        setDay,
      }}
    >
      {children}
    </BusContext.Provider>
  );
};

export default BusProvider;
