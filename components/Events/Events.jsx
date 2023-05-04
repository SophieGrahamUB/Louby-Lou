import React, { useEffect, useState } from "react";
import { useBasket } from "../Basket/BasketManager";
import styles from "./Events.module.scss";
import eventsJSON from "../../pages/api/events.json";
import Checkout from "../Checkout/Checkout";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [details, setDetails] = useState("");
  const [child, setChild] = useState(0);
  const [name, setName] = useState([]);
  const [adult, setAdult] = useState(0);
  const [total, setTotal] = useState(0);
  const [basket, setBasket] = useState([]);

  const data = eventsJSON;

  useEffect(() => {
    setEvents([...events, data]);
  }, []);

  useEffect(() => {
    let x = child * details.Child + adult * details.Adult;
    setTotal(x);
  }, [child, adult]);

  useEffect(() => {
    name.length > 0
      ? setBasket([
          {
            productName: `${details.Name} on ${details.Date}`,
            children: child,
            adults: adult,
            total: total,
            id: Math.floor(Math.random() * 10000),
            names: name.join(" "),
          },
        ])
      : null;
  }, [name]);

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
        <Checkout
          className={
            basket && basket?.length > 0 ? styles.checkout : styles.displayNone
          }
          basketData={basket}
        >
          Purchase Tickets
        </Checkout>
      </div>
    </div>
  );
};

export default Events;
