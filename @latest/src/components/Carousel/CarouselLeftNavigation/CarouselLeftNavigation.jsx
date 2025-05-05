// import React, { useEffect, useState } from "react";
// import { useSwiper, useSwiperSlide } from "swiper/react";
// import styles from "./CarouselLeftNavigation.module.css";
// import  LeftArrow  from "../../../assets/LeftArrow.svg";

// export default function CarouselLeftNavigation() {
//   const swiper = useSwiper();
//   const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

//   // useEffect(() => {
//   //   // swiper.on("slideChange", function () {
//   //   //   setIsBeginning(swiper.isBeginning);
//   //   // });
//   // }, []);

//   swiper.on("slideChange", function () {
//     setIsBeginning(swiper.isBeginning);
//   });

//   return (
//     <div className={styles.leftNavigation}>
//       {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import LeftArrowIcon from "../../../assets/LeftArrow.svg";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };
    
    swiper.on("slideChange", handleSlideChange);
    
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <img 
          src={LeftArrowIcon} 
          alt="Previous" 
          onClick={() => swiper.slidePrev()} 
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
}