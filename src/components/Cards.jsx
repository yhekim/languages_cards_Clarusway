import React, { useState } from "react";
import Card from "./Card";
import Info from "./Info";


export default function Cards({ name, img, options }) {
  const [isVisible, setIsvisible] = useState(true);

  return (
    <>
      <div key={name} className="card" onClick={() => setIsvisible(!isVisible)}>
        {isVisible ? (
          <Card name={name} img={img} />
        ) : (
          <Info options={options} />
        )}
      </div>
    </>
  );
}

