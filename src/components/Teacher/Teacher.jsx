import "./teacher.scss";

import teacher from '../../assets/images/teacher.png';

const Teacher = () => {
  return (
    <section className="teacher">
      <img className="teacher__photo" src={teacher} alt="teacher photo" />
      <h3 className="teacher__name">Jamie Brown</h3>
      <div className="teacher__info">
        <h5 className="teacher__info-title">Courses:</h5>
        <p className="teacher__info-text">
          Basic Sketching <br /> Watercolor BasicsAnime <br /> Sketching
        </p>
      </div>
      <div className="teacher__info">
        <h5 className="teacher__info-title">Education:</h5>
        <p className="teacher__info-text">
          Cambridge university, arts bachelor
        </p>
      </div>
      <div className="teacher__info">
        <h5 className="teacher__info-title">About me:</h5>
        <p className="teacher__info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
          dignissim tellus blandit laoreet sed id. Iaculis accumsan nunc tellus
          diam blandit massa commodo ac ut.
        </p>
      </div>
    </section>
  );
};

export default Teacher;
