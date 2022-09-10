import CourseCard from '../../components/CourseCard';
import './courses.scss'

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <div className="courses__body">
          <h1 className="courses__body-title">Pick your perfect course!</h1>
          <div className="courses__body-main">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
