import React, { useState } from "react";
import Image from "next/image";
import styles from "./Card.module.scss";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Card = ({ title, desc, src, left, expanded, button, data }) => {
  const [infoToggle, setInfoToggle] = useState(false);

  return (
    <section className={left ? styles.cardLeft : styles.card}>
      <div className={styles.card_image}>
        <img
          src={src}
          alt={title}
          className={left ? styles.borderLeft : styles.borderRight}
        />
      </div>

      <div className={styles.card_information}>
        <span>{title}</span>
        <p>{desc}</p>
        <button
          className={button === true ? null : styles.noDisplay}
          onClick={() => setInfoToggle((prevCheck) => !prevCheck)}
        >
          More info
        </button>
        <div className={styles.card_underline} />
      </div>

      <div className={infoToggle === true ? styles.moreInfoContainer : styles.noDisplay}>
        <button onClick={() => setInfoToggle((prevCheck) => !prevCheck)}>x</button>
        <div className={styles.moreInfo}>
          <h1>{title}</h1>
          <p>{expanded}</p>
          <h1>Media:</h1>
          {data?.attributes.serviceImagesExpanded &&
          data.attributes.serviceImagesExpanded[0]?.contentImageFirstURL !== undefined ? (
            <Swiper
              className={styles.swiperContainer}
              modules={[Navigation, Pagination]}
              spaceBetween={1}
              observer={true}
              observeParents={true}
              parallax={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              navigation={true}
              pagination={{
                clickable: true,
                draggable: true,
                autoplay: true,
                grabCursor: true,
              }}
            >
              {data?.attributes.serviceImagesExpanded &&
                data?.attributes.serviceImagesExpanded.map((item, idx) => (
                  <SwiperSlide key={idx} className={styles.swiperSlide}>
                    <Image
                      className={styles.expandedImage}
                      width={"500px"}
                      height={"500px"}
                      objectFit={"cover"}
                      alt={data?.attributes.serviceName}
                      src={`${item.contentImageFirstURL}`}
                    ></Image>
                  </SwiperSlide>
                ))}
              {data?.attributes.serviceImagesExpanded &&
              data.attributes.serviceImagesExpanded[0]?.contentVideoURL === undefined
                ? null
                : data?.attributes.serviceImagesExpanded &&
                  data?.attributes.serviceImagesExpanded.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <video
                        playsInline
                        className={styles.video}
                        controls
                        muted
                        loop
                        autoPlay
                      >
                        <source src={`${item.contentVideoURL}`} type="video/webm" />
                      </video>
                    </SwiperSlide>
                  ))}
              {data?.attributes.serviceImagesExpanded &&
                data?.attributes.serviceImagesExpanded.map((item, idx) => (
                  <SwiperSlide key={idx} className={styles.swiperSlide}>
                    <Image
                      className={styles.expandedImage}
                      width={"500px"}
                      height={"500px"}
                      objectFit={"cover"}
                      alt={data?.attributes.serviceName}
                      src={`${item.contentImageSecondURL}`}
                    ></Image>
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : (
            <></>
          )}
          <span />
        </div>
      </div>
    </section>
  );
};

export default Card;
