import "./homeInfo.scss";
import paris from "../../../../assets/images/eiffel-tower.png";
import Button from '../../../../components/Button';

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__inner">
          <div className="info__content">
            <div className="info__box">
              <h2 className="info__box-title">
                <b>Desperate to learn drawing? We’ll teach you!</b>
              </h2>
              <p className="info__box-text">
                Our school has more than 20 years of experience in teaching
                people who always thought that they don’t have even a slightest
                hint of a talent. Some other descriptive stuff that I’m too lazy
                to make up.
              </p>
              <h3 className="info__list-title">With us you will get:</h3>
              <ul className="info__list">
                <li className="info__list-item">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li class="info__list-item">
                  Vestibulum commodo id amet non facilisis in.
                </li>
                <li className="info__list-item">
                  Est eros, vestibulum cursus luctus luctus aenean molestie.
                </li>
                <li className="info__list-item">
                  Augue ultricies non tristique malesuada justo neque mi,
                  pellentesque lacus.
                </li>
              </ul>
              <Button className="btn info__button" text='Apply now'/>
            </div>
          </div>
          <div className="wrapper">
            <img className="info__img" src={paris} alt="paris-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
