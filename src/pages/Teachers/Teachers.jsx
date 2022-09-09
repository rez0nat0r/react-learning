

import Teacher from "../../components/Teacher";
import "./teachers.scss";

const Teachers = () => {
  return (
    <section className="teachers">
      <div className="container">
        <div className="teachers__body">
          <h1 className="teachers__body-title">Meet our great team!</h1>
          <div className="teachers__body-main">
            <Teacher/>
            <Teacher/>
            <Teacher/>
            <Teacher/>
            <Teacher/>
            <Teacher/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
