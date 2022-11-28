import React from "react";
import { useState, useEffect } from "react";
import styles from "../QuoteGen/QuoteGen.module.scss";
import prices from "./prices.json";

const QuoteGen = () => {
  const [formData, setFormData] = useState(null);
  const [latLong, setLatLong] = useState(null);
  const [distance, setDistance] = useState(null);
  const [quote, setQuote] = useState(0);
  const [travelTime, setTravelTime] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      postCode: e.target.postCode.value,
      kids: e.target.kids.value,
      santa: e.target.santa.value,
    });
  };

  useEffect(() => {
    if (formData === null) {
      return;
    }
    try {
      fetch(`https://api.postcodes.io/postcodes/${formData.postCode}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", origin: "*" },
      })
        .then((res) => {
          if (res.status === 404) {
            alert("Postcode Invalid!");
            window.location.reload(false);
          } else {
            return res.json();
          }
        })
        .then((res) => {
          setLatLong({
            latitude: res.result.latitude,
            longitude: res.result.longitude,
          });
        });
    } catch {
      console.log("Formdata is invalid");
    }
  }, [formData]);

  useEffect(() => {
    if (latLong === null) {
      return;
    }
    try {
      fetch(
        `https://api.tomtom.com/routing/1/calculateRoute/53.494316,-2.461848:${latLong.latitude},${latLong.longitude}/json?routeType=fastest&traffic=true&travelMode=car&vehicleEngineType=combustion&key=nhM8DjfmR7GNhhW0xaLdwePPLTsfzKiW`,
        {
          method: "GET",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setDistance(res.routes[0].summary.lengthInMeters);
          setTravelTime(res.routes[0].summary.travelTimeInSeconds);
        });
    } catch {
      console.log("LatLong is null");
    }
  }, [latLong]);

  useEffect(() => {
    console.log(travelTime);
    let secondsToMinutes = travelTime / 60;
    let calcTravelCost = secondsToMinutes * prices.pricePerMinute;
    let distanceReduce = distance === null ? 0 : distance / 1000;
    let litresNeeded = distanceReduce / prices.milesPerLitre;
    let getFuelNeeded = litresNeeded * prices.fuelPrice;
    let calcReturn = getFuelNeeded * 2;
    let childData = formData?.kids === null ? 0 : formData?.kids * prices.pricePerChild;
    let santaBool =
      formData?.santa === null ? 0 : formData?.santa === "true" ? prices.santaPrice : 0;
    let finalCalc =
      childData + santaBool + prices.basePrice + calcReturn + calcTravelCost;
    setQuote(Math.round(finalCalc * 1) / 1);
  }, [distance, formData]);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Giggles on wheels quote generator</h1>
        {Number.isInteger(quote) === true ? <p>{`Quote: £${quote}`}</p> : null}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Post Code:</label>
          <input required type="text" id="postCode" name="postCode"></input>
          <label>Number of Kids:</label>
          <input required type="number" id="kids" name="kids"></input>
          <label>Santa?</label>
          <select id="santa" name="santa">
            <option value={true}> Yes </option>
            <option value={false}> No </option>
          </select>
          <button type="submit">Get Quote!</button>
        </form>
      </div>
    </div>
  );
};

export default QuoteGen;
