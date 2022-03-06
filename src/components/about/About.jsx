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
        <div className="container about__container">
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
              Pochodził z rodziny żydowskiej o &nbsp;<mark> ukraińskich </mark>
              &nbsp; korzeniach. Syn <b>Moshe Menuhina</b> i nauczycielki gry na
              fortepianie <b>Maruthy Sher</b>. Z urodzenia Amerykanin, z wyboru
              Brytyjczyk. Naukę gry na skrzypcach rozpoczął w wieku czterech lat
              u Sigmunda Ankera w San Francisco, a następnie kontynuował u
              Louisa Persingera. Publicznie zadebiutował w wieku siedmiu lat.
            </p>
            <p>
              W wieku ośmiu, po raz pierwszy wystąpił w San Francisco, jako
              solista z towarzyszeniem San Francisco Symphony Orchestra,
              wykonując niezwykle trudną Symfonię hiszpańską Édouarda Lalo przy
              akompaniamencie jego pierwszego nauczyciela – Louisa Persingera.
            </p>
            <p>
              Od 1927 studiował w Paryżu u Georga Enescu, a w latach 1929–1930 u
              Adolfa Buscha. W Berlinie zadebiutował 6 stycznia 1927 w wieku 12
              lat, gdzie po występie z Berlińskimi Filharmonikami pod dyrekcją
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
          Mocne wyznanie wiary w moc muzyki prawie osiemdziesięcioletni Yehudi
          Menuhin wypowiada w ostatnim kadrze filmu Brunona Monsaingeona i choć
          na ekranie widzimy starszego pana, mającego za sobą najstraszliwsze
          lata XX wieku, w jego oczach wciąż widać niezwykłą ufność w potęgę
          skrzypiec, które pod jego palcami bez wątpienia mogły wydobyć z siebie
          dźwięki będące w stanie odmieniać serca milionów słuchaczy.
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
