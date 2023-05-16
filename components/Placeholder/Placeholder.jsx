import React, { Image } from "react";
import styles from "./Placeholder.module.scss";

// const Placeholder = ({ src }) => {
//   return (
//     <div className={styles.placeholderContainer}>
//       <Image
//         src={src}
//         className={styles.placeholder}
//         alt={"The hero banner image"}
//       />
//     </div>
//   );
// };

// export default Placeholder;

const Placeholder = ({ src }) => {
  return (
    <div className={styles.placeholderContainer}>
      <img className={styles.placeholder} alt="" src={src} />
    </div>
  );
};

export default Placeholder;
