import { React } from "react";
import { useSwiper } from "swiper/react";

export function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className="slide-next-button" onClick={() => swiper.slideNext()}>
      Next
    </button>
  );
}
