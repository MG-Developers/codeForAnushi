import React, { useContext, useState } from "react";
import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import DateTextField from "../UI Components/DatePicker";

import "./index.css";
import { useNavigate } from "react-router-dom";
import BusContext from "../../Context/Bus Context";

const Bus = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const { setSource, setDestination } = useContext(BusContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSource(from);
    setDestination(to);
    navigate(`/bus/search/${from}-${to}`);
  };

  return (
    <>
      {/* <div className="hotel-page"> */}
      <div className="hotel-container">
        <div className="hotel-bg"></div>

        <div className="hotel-sub-container">
          <h2 className="hotel-heading">Bus Ticket Booking</h2>
          <form id="busForm" onSubmit={handleSubmit}>
            <Box className="form-container" sx={{ width: "60%" }}>
              <Grid container marginBottom={1}>
                <Grid item padding={1} xs={12}>
                  <TextField
                    label="From"
                    placeholder="Enter Source"
                    onChange={(e) => setFrom(e.target.value)}
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item padding={1} xs={12}>
                  <TextField
                    label="To"
                    placeholder="Enter Destination"
                    onChange={(e) => setTo(e.target.value)}
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item marginTop={4} padding={1} xs={6}>
                  <DateTextField label="Travel Date" />
                </Grid>
              </Grid>
            </Box>

            <div className="searchBtn_container" style={{ width: "60%" }}>
              <button type="submit" className="searchBtn">
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Offers /> */}
    </>
  );
};

export default Bus;
