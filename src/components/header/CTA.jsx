import React from "react";
import img from "../../assets/violin-seis-lecciones-con-yehudi-menuhinpdf.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={img} download className="btn">
        Pobierz
      </a>
      <a
        href="https://www.youtube.com/watch?v=z-iuSgXKUcw"
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Posłuchaj
      </a>
    </div>
  );
};

export default CTA;
