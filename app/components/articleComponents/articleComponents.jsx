"use client";
import React from "react";
import img1 from "../../img/bg2.jpg";
import Image from "next/image";
import "./articleComponents.css";

function articleComponents() {
  return (
    <div className="article-main">
      <div className="articles-cont">
        <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-br from-red-400 to-blue-400 mx-10 rounded-3xl">
          <Image src={img1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Read Article</button>
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-br from-red-400 to-blue-400 mx-10 my-10 rounded-3xl">
          <Image src={img1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Read Article</button>
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-br from-red-400 to-blue-400 mx-10 my-10 rounded-3xl">
          <Image src={img1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Read Article</button>
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-br from-red-400 to-blue-400 mx-10 my-10 rounded-3xl">
          <Image src={img1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Read Article</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default articleComponents;
