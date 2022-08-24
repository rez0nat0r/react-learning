import "./app-subscribe.scss";
import letter from "../../../images/old-letter 1-SA.jpg";
import Button from '../../app-btn/app-button';

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__inner">
          <div className="wrapper">
            <img
              className="subscribe__img"
              src={letter}
              alt="old-letter-img"
            />
          </div>
          <div className="subscribe__content">
            <div className="subscribe__box">
              <h2 className="subscribe__box-title">
                Interested but currently have other plans?
              </h2>
              <p className="subscribe__box-text">
                Subscribe to our newsletter to stay tuned and get hottest
                updates and deals
              </p>
              <Button className='subscribe__button' text='Subscribe'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;