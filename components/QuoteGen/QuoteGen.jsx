import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../QuoteGen/QuoteGen.module.scss";
import prices from "./prices.json";
import emailjs from "@emailjs/browser";

const QuoteGen = () => {
  const [formData, setFormData] = useState(null);
  const [latLong, setLatLong] = useState(null);
  const [distance, setDistance] = useState(null);
  const [quote, setQuote] = useState(0);
  const [travelTime, setTravelTime] = useState(0);
  const isMounted = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      postCode: e.target.postCode.value,
      kids: e.target.kids.value,
      santa: e.target.santa.value,
      mobile: e.target.mobile.value,
      email: e.target.email.value,
    });
  };

  useEffect(() => {
    if (isMounted.current) {
      if (formData === null) {
        console.log("Form Data is null, cancelling");
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
            console.log("Setting Lat Long");
            setLatLong({
              latitude: res.result.latitude,
              longitude: res.result.longitude,
            });
          });
      } catch {
        console.log("Formdata is invalid");
      }
    } else {
      isMounted.current = true;
    }
  }, [formData]);

  useEffect(() => {
    if (isMounted.current) {
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
            console.log("Setting Distance & Travel time");
            setDistance(res.routes[0].summary.lengthInMeters);
            setTravelTime(res.routes[0].summary.travelTimeInSeconds);
          });
      } catch {
        console.log("LatLong is null");
      }
    } else {
      isMounted.current = true;
    }
  }, [latLong]);

  useEffect(() => {
    if (distance === null) {
      null;
    } else {
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
      setQuote({
        quote: Math.round(finalCalc * 1) / 1,
        quoteRef: Math.floor(Math.random() * 10000),
        kids: formData.kids,
        postCode: formData.postCode,
        santa: formData.santa,
        email: formData.email,
        mobile: formData.mobile,
      });
      console.log("setting Quote");
    }
  }, [distance, formData]);

  useEffect(() => {
    if (quote.quote) {
      emailjs.send("query_email", "quote_email", quote, "rPVlmRtn45wWuAQVP").then(
        (result) => {
          alert("Quote Sent!");
        },
        (error) => {
          alert(
            `Uh oh! Something went wrong! Try again later (error code for nerds: ${error.text})`
          );
        }
      );
    } else {
      console.log("Quote does not exist so not firing");
    }
  }, [quote]);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Giggles on wheels quote generator</h1>
        {Number.isInteger(quote.quote) === true ? (
          <>
            <p>{`Quote: £${quote.quote}`}</p>
            <p>{`Reference Number: ${quote.quoteRef}`}</p>
            <span>
              Please quote this reference number in any queries to secure this price!
            </span>
          </>
        ) : null}
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
          <label>Mobile Number:</label>
          <input required type="texy" id="mobile" name="mobile"></input>
          <label>Email:</label>
          <input required type="text" id="email" name="email"></input>
          <button type="submit">Get Quote!</button>
        </form>
      </div>
    </div>
  );
};

export default QuoteGen;
