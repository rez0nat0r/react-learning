import "./home-subscribe.scss";
import inkstand from "../../../../assets/images/inkstand.png";
import Button from '../../../../componentsUniversal/button/button';

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__inner">
          <div className="wrapper">
            <img
              className="subscribe__img"
              src={inkstand}
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