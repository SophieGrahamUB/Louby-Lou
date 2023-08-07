import React, { useEffect, useState } from "react";
import styles from "./Events.module.scss";
import Image from "next/image";

const Events = ({ position, data, index, imageData }) => {
  const [childCount, setChildCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [names, setNames] = useState([]);
  const [lineItems, setLineItems] = useState({});
  const [image, setImage] = useState(imageData);

  let stripeData = [
    {
      amount: total * 100,
      name: data.event__Name + " " + data.date,
      currency: "GBP",
      quantity: 1,
      description: `${adultCount}x Adults, ${childCount}x Children (${names.join(
        ", "
      )})`,
    },
  ];

  useEffect(() => {
    setTotal(childCount * data.price[0] + adultCount * data.price[1]);
  }, [childCount, adultCount]);

  useEffect(() => {
    childCount === 0 ? setNames([]) : null;
  }, [childCount]);

  useEffect(() => {
    setLineItems(stripeData);
  }, [childCount, adultCount, names, total]);

  const handleNames = (e) => {
    e.preventDefault();
    setNames([...names, e.target[0].value]);
  };

  const checkNames = (input, e) => {
    input.value !== ""
      ? (e.target.className = styles.confirm__Button__Greyed)
        ? (input.style = "color: #cf21ec; pointer-events: none")
        : null
      : null;
  };

  return (
    <div className={styles.container}>
      <dialog className={styles.event__Description} id={index}>
        <h1>{data.event__Name}</h1>
        <div>
          <p>{data.description}</p>
          <div
            onClick={() => {
              document.getElementById(index).close();
            }}
          >
            <h1>X</h1>
          </div>
        </div>
      </dialog>
      <div
        className={
          position === true
            ? styles.event__Container__Right
            : styles.event__Container
        }
      >
        <div className={styles.image__Container}>
          <Image
            src={
              image.filter((item) => item._id === data.imgURL.asset._ref)[0].url
            }
            width={500}
            height={500}
            className={styles.event__Image}
            alt={`Image from ${data.event__Name} at ${data.postCode}`}
          />
        </div>
        <div className={styles.event__Details}>
          <div className={styles.details__Container}>
            <div className={styles.title__Container}>
              <h1>{data.event__Name}</h1>
              <div
                onClick={() => {
                  document.getElementById(index).showModal();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.41 0C3.7653 0 0 3.76525 0 8.41C0 13.0547 3.7653 16.82 8.41 16.82C13.0548 16.82 16.82 13.0547 16.82 8.41C16.82 3.76525 13.0548 0 8.41 0ZM8.41 15.138C4.70019 15.138 1.682 12.1198 1.682 8.41C1.682 4.70019 4.70019 1.682 8.41 1.682C12.1199 1.682 15.138 4.70019 15.138 8.41C15.138 12.1198 12.1199 15.138 8.41 15.138ZM9.46309 5.046C9.46309 5.65576 9.01914 6.09725 8.41854 6.09725C7.79366 6.09725 7.36059 5.65576 7.36059 5.03434C7.36059 4.43707 7.80538 3.99475 8.41854 3.99475C9.01914 3.99475 9.46309 4.43707 9.46309 5.046ZM7.57084 7.569H9.25284V12.615H7.57084V7.569Z"
                    fill="#858585"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.event__Location}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <g clipPath="url(#clip0_153_263)">
                  <path
                    d="M8.46061 0.921326C5.00104 0.921326 2.18652 3.73697 2.18652 7.19791C2.18652 12.3545 7.83611 17.3894 8.0767 17.6013C8.18638 17.6979 8.32347 17.7463 8.46061 17.7463C8.59776 17.7463 8.73485 17.6979 8.84458 17.6013C9.08506 17.3895 14.7347 12.3545 14.7347 7.19791C14.7347 3.73697 11.9202 0.921326 8.46061 0.921326ZM8.46061 16.369C7.21155 15.1586 3.3484 11.099 3.3484 7.19791C3.3484 4.37768 5.64174 2.08321 8.46061 2.08321C11.2795 2.08321 13.5728 4.37768 13.5728 7.19791C13.5728 11.0989 9.70968 15.1586 8.46061 16.369Z"
                    fill="#858585"
                  />
                  <path
                    d="M8.46031 4.27401C6.85866 4.27401 5.55566 5.58567 5.55566 7.19791C5.55566 8.81021 6.85866 10.1218 8.46031 10.1218C10.062 10.1218 11.3649 8.81021 11.3649 7.19791C11.3649 5.58567 10.062 4.27401 8.46031 4.27401ZM8.46031 8.95993C7.49931 8.95993 6.71749 8.16951 6.71749 7.19791C6.71749 6.22637 7.49931 5.43589 8.46031 5.43589C9.42131 5.43589 10.2031 6.22632 10.2031 7.19791C10.2031 8.16951 9.42131 8.95993 8.46031 8.95993Z"
                    fill="#858585"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_153_263">
                    <rect
                      width="16.8249"
                      height="16.8249"
                      fill="white"
                      transform="translate(0.0478516 0.921326)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>{data.postCode}</p>
            </div>
            <div className={styles.event__Time}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M4.25448 15.5903H12.6669C13.2247 15.5903 13.7596 15.3688 14.154 14.9744C14.5484 14.5799 14.77 14.045 14.77 13.4872V5.0748C14.77 4.70295 14.6223 4.34632 14.3594 4.08338C14.0964 3.82045 13.7398 3.67273 13.3679 3.67273H11.9659V2.27065C11.9659 2.08473 11.892 1.90642 11.7605 1.77495C11.6291 1.64348 11.4508 1.56962 11.2648 1.56962C11.0789 1.56962 10.9006 1.64348 10.7691 1.77495C10.6377 1.90642 10.5638 2.08473 10.5638 2.27065V3.67273H6.35759V2.27065C6.35759 2.08473 6.28373 1.90642 6.15226 1.77495C6.02079 1.64348 5.84248 1.56962 5.65655 1.56962C5.47062 1.56962 5.29231 1.64348 5.16084 1.77495C5.02937 1.90642 4.95551 2.08473 4.95551 2.27065V3.67273H3.55344C3.18159 3.67273 2.82496 3.82045 2.56202 4.08338C2.29909 4.34632 2.15137 4.70295 2.15137 5.0748V13.4872C2.15137 14.045 2.37294 14.5799 2.76735 14.9744C3.16176 15.3688 3.6967 15.5903 4.25448 15.5903ZM3.55344 8.9305C3.55344 8.83754 3.59037 8.74838 3.6561 8.68265C3.72184 8.61691 3.81099 8.57998 3.90396 8.57998H13.0174C13.1104 8.57998 13.1995 8.61691 13.2653 8.68265C13.331 8.74838 13.3679 8.83754 13.3679 8.9305V13.4872C13.3679 13.6732 13.2941 13.8515 13.1626 13.9829C13.0312 14.1144 12.8528 14.1883 12.6669 14.1883H4.25448C4.06855 14.1883 3.89024 14.1144 3.75877 13.9829C3.6273 13.8515 3.55344 13.6732 3.55344 13.4872V8.9305Z"
                  fill="#858585"
                />
              </svg>
              <p>
                {data.date} {`(${data.length} Hours)`}
              </p>
            </div>
          </div>
          <div className={styles.pricing__Container}>
            <div className={styles.pricing__Child}>
              <h1>£{data.price[0]}</h1> <p>/ Child</p>
              <div className={styles.counter}>
                <button
                  onClick={() => {
                    childCount === 0 ? null : setChildCount(childCount - 1);
                  }}
                >
                  -
                </button>
                <p>{childCount}</p>
                <button
                  onClick={() => {
                    setChildCount(childCount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.pricing__Adult}>
              <h1>£{data.price[1]}</h1> <p>/ Adult</p>
              <div className={styles.counter}>
                <button
                  onClick={() => {
                    adultCount === 0 ? null : setAdultCount(adultCount - 1);
                  }}
                >
                  -
                </button>
                <p>{adultCount}</p>
                <button
                  onClick={() => {
                    setAdultCount(adultCount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={styles.names__Container}>
            <p>{"Child's Name(s):"}</p>
            {Array(childCount)
              .fill("")
              .map((item, idx) => (
                <form
                  onSubmit={handleNames}
                  key={idx}
                  className={styles.input__Container}
                >
                  <input
                    id={`${data.name} ${idx}`}
                    required
                    placeholder="Child's Name"
                  ></input>
                  <button
                    onClick={(e) => {
                      checkNames(
                        document.getElementById(`${data.name} ${idx}`),
                        e
                      );
                    }}
                    type="submit"
                  >
                    CONFIRM
                  </button>
                </form>
              ))}
          </div>
          <div className={styles.checkout__Container}>
            <div className={styles.total__Container}>
              <h1>£{total}</h1>
              <p>/ Total</p>
            </div>
            <form action={"/api/checkout_session"} method="POST">
              <input
                name="data"
                value={JSON.stringify(lineItems)}
                type="hidden"
              ></input>
              <section>
                <button
                  type="submit"
                  className={
                    adultCount === 0
                      ? styles.button__Greyed
                      : childCount !== names.length
                      ? styles.button__Greyed
                      : childCount === 0
                      ? styles.button__Greyed
                      : null
                  }
                >
                  BOOK NOW
                </button>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 
{
  "events": [
    {
      "id": "Point-20-07-23",
      "name": "The Point",
      "date": "20/07/23 - 05:00 PM",
      "price": [{ "adult": 0 }, { "child": 8 }],
      "length": 1.5,
      "postCode": "Ann Ln, Tyldesley, Astley, M29 7SG",
      "imgURL": "/images/events/the_point_louby_lou.webp",
      "description": "🎉 Kids Bingo is BACK and better than ever! 🎉   Join Louby Lou at @thepointastley on Thursday 20th July, for an unforgettable disco, bingo extravaganza with crazy prizes, music, and so much more!! 🎶   Bring your family and friends along, because we're about to create memories that will last a lifetime. 🪄🪄"
    }
  ]
} */

export default Events;
