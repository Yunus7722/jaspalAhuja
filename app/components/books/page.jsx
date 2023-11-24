"use client";
import React from "react";
import "./books.css";
import Image from 'next/image'
import img1 from '../../img/book1mod.jpg'
import img2 from '../../img/book2mod.jpg'
import img3 from '../../img/book4mod.jpg'
import img4 from '../../img/book5mod.jpg'

function Books() {
  return (
    <div className="book-body">
      <div class="book">
        <input className="checkbox" type="checkbox" id="c1" />
        <input className="checkbox"  type="checkbox" id="c2" />
        <input className="checkbox"  type="checkbox" id="c3" />
        <div id="cover">
          <Image  className="img-book"  src={img1} />
        </div>
        <div class="flip-book">
          <div class="flip" id="p1">
            <div class="back">
              <Image  className="img-book"  src={img2} />
              <label class="back-btn" for="c1">
                Back
              </label>
            </div>
            <div class="front">
              <h2>Apple</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                architecto nam aliquam illum voluptatibus, eius, nobis ab
                aspernatur, dolore praesentium nesciunt laboriosam iste officiis
                voluptas unde maiores numquam voluptatem provident.laboriosam
                iste officiis voluptas unde maiores numquam voluptatem
                provident.laboriosam iste officiis voluptas
              </p>
              <label class="next-btn" for="c1">
                Next
              </label>
            </div>
          </div>
          <div class="flip" id="p2">
            <div class="back">
              <Image  className="img-book"  src={img3}/>
              <label class="back-btn" for="c2">
                Back
              </label>
            </div>
            <div class="front">
                
              <h2>Pineapple</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                architecto nam aliquam illum voluptatibus, eius, nobis ab
                aspernatur, dolore praesentium nesciunt laboriosam iste officiis
                voluptas unde maiores numquam voluptatem provident.laboriosam
                iste officiis voluptas unde maiores numquam voluptatem
                provident.laboriosam iste officiis voluptas
              </p>
              <label class="next-btn" for="c2">
                Next
              </label>
            </div>
          </div>

          <div class="flip" id="p3">
            <div class="back">
            <Image className="img-book" src={img4}/>
              <label class="back-btn" for="c3">
                Back
              </label>
            </div>
            <div class="front">
              <h2>Strawberry</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                architecto nam aliquam illum voluptatibus, eius, nobis ab
                aspernatur, dolore praesentium nesciunt laboriosam iste officiis
                voluptas unde maiores numquam voluptatem provident.laboriosam
                iste officiis voluptas unde maiores numquam voluptatem
                provident.laboriosam iste officiis voluptas
              </p>
              <label class="next-btn" for="c3">
                Next
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
