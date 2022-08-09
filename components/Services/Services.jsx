import { React } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/dist/client/link";

import content from "./content.json";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <div className={styles.container}>
      <h1>Services:</h1>
      <Swiper
        className={styles.contentContainer}
        modules={[Pagination]}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
          draggable: true,
          autoplay: true,
          grabCursor: true,
        }}
      >
        {content.map((card) => (
          <SwiperSlide key={card.title} className={styles.content}>
            <h1>{card.title}</h1> <p>{card.description}</p>
            <Link href="/services">
              <a>
                <button>More Details</button>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.container_underline}></div>
    </div>
  );
};

export default Services;
