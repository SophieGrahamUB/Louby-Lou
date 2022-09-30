import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import content from "../../pages/api/reviews.json";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./Reviews.module.scss";

const Reviews = () => {
  return (
    <div className={styles.container}>
      <h1>Reviews:</h1>
      <Swiper
        className={styles.contentContainer}
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
          draggable: true,
          autoplay: true,
          grabCursor: true,
        }}
      >
        {content.data &&
          content.data?.map((card) => (
            <SwiperSlide key={card.attributes.name} className={styles.content}>
              <h1>{card.attributes.name}</h1> <p>{card.attributes.review}</p>
              {Array.apply(null, Array(card.attributes.rating)).map((item, idx) => (
                <div key={idx} className={styles.stars}>
                  <svg
                    id="star"
                    x="50%"
                    y="50%"
                    width="48px"
                    height="48px"
                    viewBox="0 0 48 48"
                    preserveAspectRatio="xMidYMin"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 16.5191L22.4994 19.5596C22.0625 20.445 21.2178 21.0587 20.2406 21.2007L16.8853 21.6882L19.3132 24.0549C20.0203 24.7441 20.3429 25.7371 20.176 26.7103L19.6028 30.0521L22.604 28.4744C23.478 28.0149 24.5221 28.0149 25.396 28.4744L28.3972 30.0521L27.824 26.7103C27.6571 25.7371 27.9797 24.7441 28.6868 24.0549L31.1148 21.6882L27.7594 21.2007C26.7823 21.0587 25.9376 20.445 25.5006 19.5596L24 16.5191ZM24.8967 13.817C24.5299 13.0737 23.4701 13.0737 23.1033 13.817L20.706 18.6744C20.5603 18.9696 20.2787 19.1741 19.953 19.2215L14.5925 20.0004C13.7723 20.1196 13.4448 21.1276 14.0383 21.7061L17.9172 25.4871C18.1529 25.7168 18.2604 26.0478 18.2048 26.3722L17.2891 31.7111C17.149 32.528 18.0064 33.151 18.7401 32.7653L23.5347 30.2446C23.826 30.0915 24.174 30.0915 24.4653 30.2446L29.26 32.7653C29.9936 33.151 30.851 32.528 30.7109 31.7111L29.7952 26.3722C29.7396 26.0478 29.8471 25.7168 30.0828 25.4871L33.9617 21.7061C34.5553 21.1276 34.2277 20.1196 33.4075 20.0004L28.047 19.2215C27.7213 19.1741 27.4397 18.9696 27.294 18.6744L24.8967 13.817Z"
                      fill="#d348d6"
                    />
                  </svg>
                </div>
              ))}
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={styles.container_underline}></div>
    </div>
  );
};

export default Reviews;