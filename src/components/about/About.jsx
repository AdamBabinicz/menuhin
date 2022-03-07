import React, { useState } from "react";
import "./About.css";
import img from "../../assets/9.jpg";
import { GiAbstract023, GiAbstract020, GiAbstract004 } from "react-icons/gi";
import Modal from "../Portal/Modal";

const About = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <section id="życiorys">
        <h5>
          ur. 22 kwietnia 1916 w&nbsp;Nowym Jorku, zm. 12 marca 1999
          w&nbsp;Berlinie
        </h5>
        <h2>Życiorys</h2>
        <div className=" about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={img} alt="..." />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <GiAbstract023 className="about__icon" />
                <h5>UNESCO</h5>
                <small>prezydent Międzynarodowej Rady Muzyki</small>
              </article>
              <article className="about__card">
                <GiAbstract020 className="about__icon" />
                <h5>Polska Orkiestra Kameralna J. Maksymiuka</h5>
                <small>współpraca</small>
              </article>
              <article className="about__card">
                <GiAbstract004 className="about__icon" />
                <h5>Sinfonia Varsovia</h5>
                <small>dyrygent</small>
              </article>
            </div>
            <p>
              Pochodził z&nbsp;rodziny żydowskiej o &nbsp;
              <mark> ukraińskich </mark>
              &nbsp; korzeniach. Syn <b>Moshe Menuhina</b> i&nbsp;nauczycielki
              gry na fortepianie <b>Maruthy Sher</b>. Z&nbsp;urodzenia
              Amerykanin, z&nbsp;wyboru Brytyjczyk. Naukę gry na&nbsp;
              skrzypcach rozpoczął w&nbsp;wieku czterech lat u&nbsp;Sigmunda
              Ankera w&nbsp;San Francisco, a&nbsp;następnie kontynuował
              u&nbsp;Louisa Persingera. Publicznie zadebiutował w&nbsp;wieku
              siedmiu lat.
            </p>
            <p>
              W&nbsp;wieku ośmiu, po raz pierwszy wystąpił w&nbsp;San Francisco,
              jako solista z&nbsp;towarzyszeniem San Francisco Symphony
              Orchestra, wykonując niezwykle trudną Symfonię hiszpańską Édouarda
              Lalo przy akompaniamencie jego pierwszego nauczyciela – Louisa
              Persingera.
            </p>
            <p>
              Od 1927 studiował w&nbsp;Paryżu u&nbsp;Georga Enescu,
              a&nbsp;w&nbsp;latach 1929–1930 u&nbsp;Adolfa Buscha.
              W&nbsp;Berlinie zadebiutował 6 stycznia 1927 w&nbsp;wieku 12 lat,
              gdzie po występie z&nbsp;Berlińskimi Filharmonikami pod dyrekcją
              Bruno Waltera okrzyknięto go złotym dzieckiem.
            </p>
            <a onClick={() => Toggle()} class="btn btn-primary">
              Więcej
            </a>
          </div>
        </div>
      </section>

      <Modal
        show={modal}
        close={Toggle}
        title="Yehudi Menuhin. The Violin of the Century (1994)"
      >
        <p>
          Mocne wyznanie wiary w&nbsp;moc muzyki prawie osiemdziesięcioletni
          Yehudi Menuhin wypowiada w&nbsp;ostatnim kadrze filmu Brunona
          Monsaingeona, i&nbsp;choć na ekranie widzimy starszego pana, mającego
          za sobą najstraszliwsze lata XX wieku, w&nbsp;jego oczach wciąż widać
          niezwykłą ufność w&nbsp;potęgę skrzypiec, które pod jego palcami bez
          wątpienia mogły wydobyć z&nbsp;siebie dźwięki będące w&nbsp;stanie
          odmieniać serca milionów słuchaczy.
        </p>
        <br />
        <p>
          <em>https://ruchmuzyczny.pl/article/901</em>
        </p>
      </Modal>
    </>
  );
};

export default About;
