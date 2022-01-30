import React, { useState } from "react";
import "./content.css"

export default function ContentItem({item}) {
  return (
    <div className="ct col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="img">
        <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg" />
      </div>
      <div className="desc">
        <p className="head">{item.title}</p>
        <span className="price">{item.price } &#8381;</span>
      </div>
    </div>
  );
}
