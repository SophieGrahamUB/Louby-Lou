import React, { useEffect, useState } from "react";
import styles from "./Locations.module.scss";
import Title from "../typography/Title/Title";
import Body from "../typography/Body/Body";
import Link from "next/link";

const Locations = ({ location }) => {
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const dialog = document.getElementById("location");
    dialog.removeAttribute("open");
    dialog.showModal();
  }, []);

  const handleClick = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div>
      <dialog className={styles.location__Dialog} id="location">
        <Title text={"Where are you from?"} />
        <p>
          * This website does NOT store your location and does NOT use any
          cookies.
        </p>

        <select
          id="locationSelect"
          onChange={(e) => handleClick(e)}
          onClick={(e) => handleClick(e)}
        >
          {location.map((item, idx) => (
            <option key={idx} value={item.params.location}>
              {item.params.location}
            </option>
          ))}
        </select>
        <Link href={`/services/location/${selectedLocation}`}>
          <button>See Services</button>
        </Link>
      </dialog>
    </div>
  );
};

export default Locations;
