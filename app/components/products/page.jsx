"use client";
import "./products.css";
// import  from '../../Image/profile1.jpg'

import Image from "next/image";

import img1 from "../../img/bg2.jpg";

// import profile5 from '../../Image/profile5.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "../Footer/Footer";

export default function Quotes() {
  var qt1 =
    "Unless it is effortless or timeless, its not worth the effort or time.";

  const clients = [
    {
      // Image: profile1,
      review: qt1,
    },
    {
      // Image: profile2,
      review:
        "If you have any form of conflict in your life, whether with in or outside, it is denial of human intelligence.",
    },

    {
      // Image: profile4,
      review:
        "There is only one human salvation or enlightenment or liberation, that is to come upon timelessness! If you are caught in time, sorrow suffering struggle is inevitable!",
    },
    {
      // Image: profile4,
      review:
        "There is no other. We all n everything, together are one Universal Organism! Interconnected with no beginning & no end.",
    },
    {
      // Image: profile4,
      review:
        "There is only one stream of human consciousness. We download from it and merge into it! There is no continuity of Me as a separate chunk of consciousness... We are always part n parcel of everybody n everything, with or without body.",
    },
  ];

  return (
    <main>
      <div className="t-wrapper-p">
        <div className="t-heading-p pb-5">
          <span className="underline">Our Products </span>
          {/* <span> </span> */}
        </div>

        <Swiper
          autoplay={{ delay: 2000 }} // Adjust the delay as needed (in milliseconds)
          navigation={{ clickable: true }}
          modules={[Pagination, Navigation, Autoplay]}
          smooth
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <div className="testimonial-p hero min-h-screen bg-base-200 max-w-3xl">
              <div className="hero-content flex-col lg:flex-row">
                <Image src={img1} className="max-w-xs rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold text-white">
                    Nex Office News!
                  </h1>
                  <p className="py-6 text-gray-100">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <div className="btn btn-success text-white hover:btn-warning">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-p hero min-h-screen bg-base-200 max-w-3xl">
              <div className="hero-content flex-col lg:flex-row">
                <Image src={img1} className="max-w-xs rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold text-white">
                    Nex Office News!
                  </h1>
                  <p className="py-6 text-gray-100">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <div className="btn btn-success text-white hover:btn-warning">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-p hero min-h-screen bg-base-200 max-w-3xl">
              <div className="hero-content flex-col lg:flex-row">
                <Image src={img1} className="max-w-xs rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold text-white">
                    Box Office News!
                  </h1>
                  <p className="py-6 text-gray-100">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <div className="btn btn-success text-white hover:btn-warning">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-p hero min-h-screen bg-base-200 max-w-3xl">
              <div className="hero-content flex-col lg:flex-row">
                <Image src={img1} className="max-w-xs rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold text-white">
                    Box Office News!
                  </h1>
                  <p className="py-6 text-gray-100">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <div className="btn btn-success text-white hover:btn-warning">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div
        style={{ top: "-30%", left: "-20%", background: "#c1f5ff" }}
        className="blur"
      ></div>
      <div style={{ top: "-60%", left: "10%" }} className="blur"></div>
      <div style={{ top: "-50%", left: "10%" }} className="blur"></div> */}
      </div>
      <Footer />
    </main>
  );
}
