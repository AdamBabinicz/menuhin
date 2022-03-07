import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/37.jpg";
import img2 from "../../assets/33.jpg";
import img3 from "../../assets/16.jpg";
import img4 from "../../assets/14.jpg";
import img5 from "../../assets/32.jpg";
import img6 from "../../assets/15.jpg";
import { GrLinkNext } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";

const data = [
  {
    id: 1,
    image: img1,
    title: "Koncert w Oakland Auditorium (1924)",
    desc: "Scène de Ballet Bériota",
    github:
      "https://violinsheetmusic.org/classical/work/beriot-fantaisie-ballet",
    demo: "https://musicianguide.com/biographies/1608001802/Yehudi-Menuhin.html",
  },
  {
    id: 2,
    image: img2,
    title: "W roku 1929 zadebiutował w Berlinie",
    desc: "Koncerty Bacha, Beethovena i Brahmsa",
    github: "https://ruchmuzyczny.pl/article/901",
    demo: "http://www.qc-berlin.eu/berlin-powstanie-nazizmu",
  },
  {
    id: 3,
    image: img3,
    title: "W roku 1944 poznał Belę Bartóka",
    desc: "Węgierski kompozytor zadedykował mu swą Sonatę na skrzypce solo",
    github: "https://www.naxos.com/catalogue/item.asp?item_code=8.111336",
    demo: "https://pl.wikipedia.org/wiki/B%C3%A9la_Bart%C3%B3k",
  },
  {
    id: 4,
    image: img4,
    title: "Lipskie Targi Wiosenne (1961)",
    desc: "Franz Konwitschny i Yehudi Menuhin",
    github: "https://pl.wikipedia.org/wiki/Franz_Konwitschny",
    demo: "http://worldcat.org/identities/lccn-n82082891",
  },
  {
    id: 5,
    image: img5,
    title: "Yehudi Menuhin z Ravim Shankarem (1968)",
    desc: "Płyta „West Meets East”",
    github:
      "https://www.abbeyroad.com/news/abbey-road-90-ravi-shankar-and-yehudi-menuhin-record-west-meets-east-the-first-time-indian-and-western-classical-music-come-together-3010",
    demo: "https://pl.wikipedia.org/wiki/Ravi_Shankar",
  },
  {
    id: 6,
    image: img6,
    title: "Yehudi Menuhin, Alan Clare i Stephane Grappelli",
    desc: "Muzyczni przyjaciele",
    github: "https://secondhandsongs.com/artist/1314+23124+82462",
    demo: "https://pl.wikipedia.org/wiki/St%C3%A9phane_Grappelli",
  },
];

const Portfolio = () => {
  return (
    <section id="koncerty">
      <h5>Tournee</h5>
      <h2>Koncerty</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, desc, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineLink />
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrLinkNext />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

// https://regiony.rp.pl/archiwum/art18328961-marzenia-o-wlasnym-domu

// https://ruchmuzyczny.pl/article/901

// https://webdoc.bilan.ch/menuhin/en/menuhin

// https://www.warnerclassics.com/artist/yehudi-menuhin
