import React from "react";
import img from "../../assets/1.jpg";

const CTA = () => {
  return (
    <div className="cta">
      <a href={img} download className="btn">
        Pobierz
      </a>
      <a href="#contact" className="btn btn-primary">
        Posłuchaj
      </a>
    </div>
  );
};

export default CTA;
