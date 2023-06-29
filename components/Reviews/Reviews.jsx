import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Reviews.module.scss";
import Autoplay from "embla-carousel-autoplay";
import DividerTitle from "../typography/DividerTitle/DividerTitle";
import Link from "next/link";

const Reviews = ({ data }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className={styles.container}>
      <DividerTitle
        title={"what my clients say:"}
        text={[""]}
        spacing={"small"}
      />
      <div className={styles.container__Slider__Parent} ref={emblaRef}>
        <div className={styles.slider__Container}>
          {data.map((item, idx) => (
            <div key={idx} className={styles.slide}>
              <h3>{item.name}</h3>
              <p>{item.review}</p>
              <div>
                {Array.from(Array(item.stars).keys()).map((item, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      d="M20.8345 1.97067L25.1204 10.655C25.4185 11.259 25.9947 11.6775 26.6613 11.7743L36.2454 13.167C37.9242 13.4111 38.594 15.4736 37.3797 16.657L30.4447 23.4168C29.9628 23.8869 29.7424 24.5646 29.8565 25.228L31.4934 34.7732C31.7803 36.4449 30.0254 37.7195 28.5241 36.9308L19.9523 32.4246C19.3562 32.1115 18.6436 32.1115 18.0475 32.4246L9.47574 36.9308C7.97444 37.7203 6.2195 36.4449 6.50644 34.7732L8.14328 25.228C8.25742 24.5646 8.03706 23.8869 7.55513 23.4168L0.620168 16.657C-0.594183 15.4728 0.075612 13.4103 1.75446 13.167L11.3385 11.7743C12.0051 11.6775 12.5814 11.259 12.8794 10.655L17.1653 1.97067C17.9152 0.449557 20.0839 0.449557 20.8345 1.97067Z"
                      fill="#CF21EC"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href={"https://g.page/r/CcnNIcHsRRS1EB0/review"}>
        <button className={styles.button}>Leave a review</button>
      </Link>
    </div>
  );
};

export default Reviews;
