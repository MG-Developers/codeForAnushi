import React, { useContext, useEffect, useState } from "react";
import BusContext from "../../../Context/Bus Context";

import "./index.css";
import { Checkbox } from "@mui/material";

const BusResults = () => {
  const { source, destination } = useContext(BusContext);

  const [buses, setBuses] = useState([]);

  const fetchBuses = async () => {
    let url = `https://academics.newtonschool.co/api/v1/bookingportals/bus?search={"source":"${source}","destination":"${destination}"}&day=Tue`;

    const response = await fetch(url, {
      headers: {
        projectID: "t8tjlydler4b",
      },
    });

    const result = await response.json();
    setBuses(result.data.buses);
  };

  useEffect(() => {
    fetchBuses();
  }, []);

  return (
    <>
      <div className="searchBar-container bus-searchBar">
        <div className="sb-sub-container">
          <div className="sb-input-container">
            <label className="sb-label bus-sb-label" htmlFor="from">
              FROM
            </label>
            <input
              id="from"
              className="bus-sb-input sb-input"
              name="from"
              value={source}
              // onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="sb-input-container">
            <label className="sb-label bus-sb-label" htmlFor="to">
              TO
            </label>
            <input
              id="to"
              className="bus-sb-input sb-input"
              name="to"
              value={destination}
              // onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="sb-input-container">
            <label className="sb-label bus-sb-label" htmlFor="departure">
              DEPARTURE DATE
            </label>
            <input
              id="departure"
              type="date"
              className="bus-sb-input sb-input"
              name="departure"
            />
          </div>
        </div>

        <div className="updateBtn-container">
          <button className="updateSearch-btn bus-updateSearchBtn">
            Update Search
          </button>
        </div>
      </div>

      <div className="hotel-result-page">
        <div className="hotel-page-container">
          <div className="hf-container">
            <div className="flexCenterBetween">
              <h3 className="margin-0">Filters</h3>
              <button className="resetBtn">Reset All</button>
            </div>

            <hr />

            <div>
              <div className="flexCenterBetween">
                <h4 className="filterHeading">Popular</h4>
                <button className="resetBtn">Reset</button>
              </div>
            </div>

            <div>
              <div className="checkboxContainer">
                <Checkbox
                  id="coupleFriendly"
                  value="couple"
                  // onClick={(e) => handleQuery(e)}
                  size="small"
                />
                <span>GoDeal Discount</span>
              </div>

              <div className="checkboxContainer">
                <Checkbox size="small" />
                <span>Live Tracking</span>
              </div>

              <div className="checkboxContainer">
                <Checkbox size="small" />
                <span>Free Cancellation</span>
              </div>

              <div className="checkboxContainer">
                <Checkbox size="small" />
                <span>Top Rated Buses</span>
              </div>

              <div className="checkboxContainer">
                <Checkbox size="small" />
                <span>Primo</span>
              </div>
            </div>

            <hr />

            <div>
              <div className="flexCenterBetween">
                <h4 className="filterHeading">Bus Type</h4>
                <button className="resetBtn">Reset</button>
              </div>

              <button className="filterBtn bus-filterBtn">AC</button>
              <button className="filterBtn bus-filterBtn">Non-AC</button>
              <button className="filterBtn bus-filterBtn">Seater</button>
              <button className="filterBtn bus-filterBtn">Sleeper</button>
            </div>

            <hr />

            <div>
              <div className="flexCenterBetween">
                <h4 className="filterHeading">Departure Time</h4>
                <button className="resetBtn">Reset</button>
              </div>

              <button className="filterBtn bus-filterBtn">
                12 midnight - 6 AM
              </button>
              <button className="filterBtn bus-filterBtn">
                6 AM - 12 noon
              </button>
              <button className="filterBtn bus-filterBtn">
                12 noon - 6 PM
              </button>
              <button className="filterBtn bus-filterBtn">
                6 PM - 12 midnight
              </button>
            </div>

            <hr />

            <div>
              <div className="flexCenterBetween">
                <h4 className="filterHeading">Arrival Time</h4>
                <button className="resetBtn">Reset</button>
              </div>

              <button className="filterBtn bus-filterBtn">
                12 midnight - 6 AM
              </button>
              <button className="filterBtn bus-filterBtn">
                6 AM - 12 noon
              </button>
              <button className="filterBtn bus-filterBtn">
                12 noon - 6 PM
              </button>
              <button className="filterBtn bus-filterBtn">
                6 PM - 12 midnight
              </button>
            </div>
            <br />
          </div>

          <div className="hr-container">
            {buses.map((item, index) => {
              return (
                // <div key={index} className="flight-card">
                //   <div className="fc-img">
                //     <img className="flightIcon" src="/images/AI.png" />
                //     <span>{item.name}</span>
                //   </div>

                //   <div className="fc-main-body">
                //     <div className="fc-body">
                //       <div>
                //         <div>
                //           <span className="cityCode">{item.source} </span>
                //           <span className="cityText">New Delhi, India</span>
                //         </div>
                //         <h3>{item.departureTime}</h3>
                //       </div>

                //       <div className="flexColumnCenter">
                //         <div>
                //           <span className="cityCode">- GOI -</span>
                //         </div>
                //         <h4>
                //           {/* {item.duration} */}
                //         20h 32m</h4>
                //       </div>

                //       <div>
                //         <div>
                //           <span className="cityCode">{item.destination} </span>
                //           <span className="cityText">Bengaluru, India</span>
                //         </div>
                //         <h3>{item.arrivalTime}</h3>
                //       </div>

                //       <div>
                //         <span></span>
                //         <h3>&#8377; {item.fare}</h3>
                //       </div>
                //     </div>

                //     <div>
                //       <button className="fareBtn">VIEW FARES</button>
                //     </div>
                //   </div>

                //   <div className="fc-footer">
                //     <span style={{ color: "rgb(113, 113, 113)" }}>
                //       {item.amenities[0]}
                //     </span>
                //     <span style={{ color: "rgb(12, 177, 54)" }}>
                //       {item.amenities[1]}
                //     </span>

                //     {/* <button
                //       onClick={() => showFlightDetails(item._id, index)}
                //       className="flightDetailBtn"
                //     >
                //       Flight Details {openStates[index] ? "▼" : "▶"}
                //     </button> */}
                //   </div>

                //   {/* {openStates[index] && (
                //     <div className="fc-details" key={index}>
                //       <div className="seatsContainer">
                //         <h3 className="margin-0">No. of Seats Left: </h3>
                //         <span
                //           style={{
                //             color: "green",
                //             fontSize: "18px",
                //             fontWeight: "600",
                //             marginLeft: "8px",
                //           }}
                //         >
                //           {item.seats}
                //         </span>
                //       </div>

                //       <div className="seatsContainer">
                //         <h3 className="margin-0">Stops: </h3>
                //         <span
                //           style={{
                //             color: "#a31919",
                //             fontSize: "18px",
                //             fontWeight: "600",
                //             marginLeft: "8px",
                //           }}
                //         >
                //           {item.stops}
                //         </span>
                //       </div>

                //       <div className="baggageContainer">
                //         <h3 className="margin-0">Baggage Rules:</h3>
                //         <div>
                //           <table>
                //             <thead>
                //               <tr>
                //                 <th>Baggage Type</th>
                //                 <th>
                //                   <span className="flexAlignCenter">
                //                     <LuggageIcon />
                //                     Check-In
                //                   </span>
                //                 </th>
                //                 <th>
                //                   <span className="flexAlignCenter">
                //                     <BackpackIcon />
                //                     Cabin
                //                   </span>
                //                 </th>
                //               </tr>
                //             </thead>
                //             <tbody>
                //               <tr>
                //                 <td>ADULT</td>
                //                 <td>15 Kgs (1 piece only)</td>
                //                 <td>7 Kgs (1 piece only)</td>
                //               </tr>
                //             </tbody>
                //           </table>
                //         </div>
                //       </div>
                //     </div>
                //   )} */}
                // </div>

                <div key={index} className="bus-card">
                  <div>
                    <h3 className="margin-0">{item.name}</h3>
                    <p className="bus-text1">{item.type}</p>
                    <p className="bus-ratingTag">{item.ratings}/5</p>
                  </div>

                  <div>
                    <h3 className="margin-0">{item.departureTime}</h3>
                    <p className="bus-text1">{item.source}</p>
                  </div>

                  <div></div>

                  <div>
                    <h3 className="margin-0">{item.arrivalTime}</h3>
                    <p className="bus-text1">{item.destination}</p>
                  </div>

                  <div className="bus-fare">
                    <h3 className="margin-0">&#8377; {item.fare}</h3>
                  </div>

                  <div className="select-bus">
                    <p className="bus-text1 margin-0">Total Seats: {item.seats}</p>
                    <button className="selectBus-btn">SELECT SEAT</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default BusResults;
