import React from "react";
import Card from "./Card";
import { useState } from "react";
const Cards = (props) => {
  let courses = props.courses;
  let category = props.category
  const [likedCourses, setLikedCourses] = useState([]);
  function getCourses() {
    if(category === "All") {
        let allCourses = [];
        Object.values(courses).forEach((array) => {
          array.forEach((courseData) => {
            allCourses.push(courseData);
          });
        });
        return allCourses;
      }
      else {
        return courses[category]
      }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course) => {
                return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
            })
        }
    </div>
    );
    
};

export default Cards;
