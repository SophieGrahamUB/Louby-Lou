import React, { useEffect, useRef, useState } from "react";
import styles from "./Pricing.module.scss";

const Pricing = ({ data }) => {
  const form = useRef();

  const [partyCount, setPartyCount] = useState(0);

  useEffect(() => {
    setPartyCount(data.maxKids);
  }, []);

  return (
    <div
      style={{
        flex: "2 2 50%",
        boxShadow: `0px 0px 111px -32px ${data.color} `,
      }}
      className={styles.container}
    >
      <div className={styles.pricing__Container}>
        <div className={styles.pricing__Title__Container}>
          <h1 style={{ color: `${data.color}` }}>{data.name}</h1>
          <div className={styles.pricing__Base__Price__Container}>
            <h2>
              {`£${data.priceRaw + (partyCount - data.maxKids) * data.added}`}
            </h2>
            <p>Base Price</p>
          </div>
        </div>
        <div
          style={{ borderBottom: `5px solid ${data.color}` }}
          className={styles.divider__With__Text}
        >
          <p>
            For
            <span style={{ color: `${data.color}` }}> {data.maxKids}</span>{" "}
            children, then
            <span style={{ color: `${data.color}` }}> £10</span> /Child
          </p>
        </div>
        <div
          style={{ borderBottom: `5px solid ${data.color}` }}
          className={styles.includes__Container}
        >
          <p>Package includes:</p>
          <div className={styles.options}>
            {data.options.map((item, idx) => (
              <p key={`${idx}${item}`} style={{ color: `${data.color}` }}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.form__Container}>
          <p>* Total price can change depending on your location.</p>
          <div id="counterContainer" className={styles.counter__Container}>
            <label htmlFor={"party-size"}>
              <p>Party size:</p>
            </label>

            <div id="counterDiv">
              <button
                type="button"
                style={{ color: `${data.color}` }}
                onClick={() => {
                  partyCount === data.maxKids
                    ? null
                    : setPartyCount(partyCount - 1);
                }}
              >
                -
              </button>
              <input
                value={partyCount}
                style={{ display: "none" }}
                name="party_size"
                id="party_size"
                readOnly
              ></input>
              <h3 style={{ color: `${data.color}` }}>{partyCount}</h3>
              <button
                type="button"
                style={{ color: `${data.color}` }}
                onClick={() => {
                  setPartyCount(partyCount + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
