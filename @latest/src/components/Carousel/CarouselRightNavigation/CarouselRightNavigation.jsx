// import React, { useEffect, useState } from "react";
// import { useSwiper } from "swiper/react";
// import styles from "./CarouselRightNavigation.module.css";
// import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

// export default function CarouselRightNavigation() {
//   const swiper = useSwiper();
//   const [isEnd, setIsEnd] = useState(swiper.isEnd);

//   // useEffect(() => {
//   //   swiper.on("slideChange", function () {
//   //     setIsEnd(swiper.isEnd);
//   //   });
//   // }, []);

//   swiper.on("slideChange", function () {
//     setIsEnd(swiper.isEnd);
//   });

//   return (
//     <div className={styles.rightNavigation}>
//       {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import RightArrowIcon from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsEnd(swiper.isEnd);
    };
    
    swiper.on("slideChange", handleSlideChange);
    
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <img 
          src={RightArrowIcon} 
          alt="Next" 
          onClick={() => swiper.slideNext()} 
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
}
