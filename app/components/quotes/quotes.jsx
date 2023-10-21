"use client";
import "./quotes.css";
// import  from '../../img/profile1.jpg'
import profile2 from "../../img/onus.png";
import profile3 from "../../img/onus.png";
import profile4 from "../../img/kronos.png";
import profile1 from "../../img/kronos2.png";

// import profile5 from '../../img/profile5.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Quotes() {
  var qt1 =
    "Unless it is effortless or timeless, its not worth the effort or time.";

  const clients = [
    {
      img: profile1,
      review: qt1,
    },
    {
      img: profile2,
      review:
        "If you have any form of conflict in your life, whether with in or outside, it is denial of human intelligence.",
    },

    {
      img: profile4,
      review:
        "There is only one human salvation or enlightenment or liberation, that is to come upon timelessness! If you are caught in time, sorrow suffering struggle is inevitable!",
    },
    {
      img: profile4,
      review:
        "There is no other. We all n everything, together are one Universal Organism! Interconnected with no beginning & no end.",
    },
    {
      img: profile4,
      review:
        "There is only one stream of human consciousness. We download from it and merge into it! There is no continuity of Me as a separate chunk of consciousness... We are always part n parcel of everybody n everything, with or without body.",
    },
  ];

  return (
    <div className="t-wrapper" id="quotes">
      <div className="t-heading">
        <span>Life transforming powerful quotes from</span>
        <span> Jas Ahuja</span>
        {/* <span> </span> */}
      </div>

      <Swiper
        navigation={{ clickable: true }}
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                {/* <img src={client.img} alt="" /> */}
                <span>{client.review}</span>
                <div style={{alignSelf:'end'}}>--Jas Ahuja</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div
        style={{ top: "-30%", left: "-20%", background: "#c1f5ff" }}
        className="blur"
      ></div>
      <div style={{ top: "-60%", left: "10%" }} className="blur"></div>
      <div style={{ top: "-50%", left: "10%" }} className="blur"></div> */}
    </div>
  );
}
