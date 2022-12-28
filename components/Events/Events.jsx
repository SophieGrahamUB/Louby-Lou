import React, { useEffect, useState } from "react";
import { useBasket } from "../Basket/BasketManager";
import styles from "./Events.module.scss";
import eventsJSON from "../../pages/api/events.json";

const Events = () => {
  const fetchData = async () => {
    const data = eventsJSON;
    setEvents([...events, data]);
  };

  const { contents, setContents } = useBasket();

  const [events, setEvents] = useState([]);
  const [details, setDetails] = useState("");
  const [child, setChild] = useState(0);
  const [name, setName] = useState([]);
  const [adult, setAdult] = useState(0);
  const [total, setTotal] = useState(0);
  const [basket, setBasket] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (contents?.length > 0) {
      window.sessionStorage.setItem("Cart", JSON.stringify(contents));
    }
  }, [toggle]);

  useEffect(() => {
    fetchData();
  }, [basket]);

  useEffect(() => {
    let x = child * details.Child + adult * details.Adult;
    setTotal(x);
  }, [child, adult]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(
      Array(child)
        .fill("")
        .map((item, idx) => e.target[idx].value)
    );
  };

  console.log(name);

  return (
    <div className={styles.eventsWrapper}>
      <div className={styles.buttonWrapper}>
        {events &&
          events[0]?.data.map((item, index) => (
            <button
              id={Math.floor(Math.random() * 10000)}
              tabIndex="0"
              key={item.attributes.Name}
              value={index}
              className={styles.eventButton}
              onClick={(e) => {
                setDetails(
                  events && events[0]?.data[e.target.value].attributes
                );
                setChild(0);
                setAdult(0);
              }}
            >
              <h1>{item.attributes.Name}</h1>
              <p id={item.attributes.Name}>{item.attributes.Date}</p>
            </button>
          ))}
      </div>

      <div className={styles.detailsWrapper}>
        <h1>{details.Name === undefined ? "Pick an Event!" : details.Name}</h1>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsTags}>
            <p>Location:</p>
            <p>Time:</p>
            <p>Price Per Child:</p>
            <p>Price Per Adult:</p>
            <p>Length:</p>
          </div>
          <div className={styles.details}>
            <p>{details.Location}</p>
            <p>{details && details?.time.substring(0, 5)}</p>
            <p>{details.Child === undefined ? "" : `£${details.Child}`}</p>
            <p>{details.Adult === undefined ? "" : `£${details.Adult}`}</p>
            <p>{details.length === 0 ? "" : `${details.length} Hour(s)`}</p>
          </div>
        </div>
        <div className={styles.lineAccent} />
        <div className={styles.counterWrapper}>
          <p>Children</p>
          <div className={styles.counterContainer}>
            <button onClick={() => (child === 0 ? null : setChild(child - 1))}>
              -
            </button>
            <p>{child}</p>
            <button onClick={() => setChild(child + 1)}>+</button>
          </div>
          <p>Adults</p>
          <div className={styles.counterContainer}>
            <button onClick={() => (adult === 0 ? null : setAdult(adult - 1))}>
              -
            </button>
            <p>{adult}</p>
            <button onClick={() => setAdult(adult + 1)}>+</button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {Array(child)
            .fill("")
            .map((item, idx) => (
              <input
                required
                name={`name${idx}`}
                type="text"
                key={idx}
                placeholder="Child's Name & age"
              ></input>
            ))}
          {child >= 1 ? <button type="submit">Confirm Names</button> : null}
        </form>
        <button
          onClick={() => {
            child + adult > 0
              ? setContents([
                  ...contents,
                  {
                    productName: `${details.Name} on ${details.Date}`,
                    children: child,
                    adults: adult,
                    total: total,
                    id: Math.floor(Math.random() * 10000),
                    names: name.join(" "),
                  },
                ]) + setToggle((prevToggle) => !prevToggle)
              : alert("Please add either a child or adult!");
          }}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default Events;

// {
//   "data": [
//     {
//       "id": 1,
//       "attributes": {
//         "Name": "The Point",
//         "Date": "21/12/2022",
//         "Adult": 0,
//         "Child": 15,
//         "length": 1.5,
//         "Location": "M29 7SG",
//         "time": "09:00:00.000",
//         "eventImageURL": "/images/events/the_point-21-12-22.jpg",
//         "eventDescription": "Come along to The Point Astley for fun & games with Louby Lou & recieve gifts and joy from Santa himself! Let's start that festive feeling!"
//       }
//     },
//     {
//       "id": 2,
//       "attributes": {
//         "Name": "The Delph",
//         "Date": "23/12/2022",
//         "Adult": 0,
//         "Child": 15,
//         "length": 1.5,
//         "Location": "M28 2NL",
//         "time": "10:00:00.000",
//         "eventImageURL": "/images/events/the_delph-23-12-22.jpg",
//         "eventDescription": "Come along to The Delph for fun & games with Louby Lou & recieve gifts and joy from Santa himself! Let's start that festive feeling!"
//       }
//     },
//     {
//       "id": 3,
//       "attributes": {
//         "Name": "Ascend",
//         "Date": "30/12/2022",
//         "Adult": 0,
//         "Child": 15,
//         "length": 1.5,
//         "Location": "WN7 4DU",
//         "time": "10:00:00.000",
//         "eventImageURL": "/images/events/ascend-30-12-22.jpg",
//         "eventDescription": "It's time for a pre new year party at Ascend Hot Yoga! Fancy a boogy in your new christmas get up? Louby Lou has got you covered! With a super fun Funky disco glowstick party!"
//       }
//     }
//   ]
// }
