import React from "react";

import "./about.scss";

import map from "../../assets/images/map.png";
import point from "../../assets/icons/dot-on-the-map.png";
import phone from "../../assets/icons/phone.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="about__content">
          <h1 className="about__content-title">Who we are?</h1>
          <p className="about__content-text about__first">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
            nulla ornare lacus, accumsan purus sem donec. Vitae ornare sit
            rhoncus vitae id neque. Non vitae et, pellentesque lacus. Nunc, eu
            sollicitudin massa senectus eu diam pharetra. Sit nisl quisque eget
            arcu cursus scelerisque. Aliquam et urna tellus blandit sit nulla
            nec. Ultricies sapien sit lorem aliquet. Phasellus enim feugiat sed
            parturient elementum varius ut in vel. Neque egestas magna sed orci,
            consequat. Sit magnis nunc consequat id proin tortor egestas arcu
            ac. At faucibus leo et, nisi, sollicitudin. Malesuada sagittis
            massa, viverra tempor etiam hendrerit eget amet. Odio magna ultrices
            diam, facilisis. Habitant diam eros molestie pretium.
          </p>
          <p className="about__content-text about__second">
            Viverra parturient eu tincidunt sem. Aliquet ultrices volutpat orci
            tristique. Sit eleifend donec bibendum sed fermentum. Amet,
            sagittis, libero, at nullam vestibulum. Fusce et sit maecenas urna
            orci felis sodales. Dignissim aliquam at id duis gravida. Nunc sit
            arcu lectus lorem libero vel vitae adipiscing amet. In cras sed
            tristique nisl, amet accumsan urna quis. Condimentum laoreet a
            convallis sit pellentesque laoreet at fringilla. Porttitor ut mi nec
            cras. Nunc, sit non ipsum aliquam enim. Blandit dictum nunc duis ac
            faucibus neque feugiat vitae. Quis ac malesuada pulvinar ac cras
            mollis dictum ullamcorper pretium. Pellentesque ac nunc, eu
            fermentum erat nunc vel natoque volutpat.
          </p>
          <p className="about__content-text about__third">
            Et ac a leo et rhoncus montes, enim viverra. Nulla aliquam ut massa,
            praesent viverra integer massa justo. Vitae pellentesque quis sit
            neque. Facilisis aliquam dolor habitant commodo ultricies. Lacus
            pellentesque ultricies viverra curabitur at fermentum tincidunt
            aliquet. Mi congue sed turpis ligula egestas odio tincidunt libero
            vitae. Amet pellentesque aliquam quam viverra proin urna vitae
            egestas turpis. Enim, dictum nisl, dictum sed velit. Aliquam
            dignissim orci auctor ipsum ac ultrices at. Et, nisl, egestas id
            eget. Nisl diam et scelerisque at consectetur.
          </p>
        </div>
        <div className="about__contact">
          <img className="about__map" src={map} alt="contact map" />
          <div className="about__contact-variants">
            <div className="about__contact-adress">
              <img className="about__point about__icon" src={point} alt="point icon" />
              <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
            </div>
            <div className="about__contact-phone">
              <img className="about__phone about__icon" src={phone} alt="phone icon" />
              <p>(208) 555-0112</p>
            </div>
            <div className="about__contact-social">
              <img className="about__facebook about__icon" src={facebook} alt="facebook icon" />
              <img className="about__instagram about__icon" src={instagram} alt="instagram icon" />
              <img className="about__twitter about__icon" src={twitter} alt="twitter icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
