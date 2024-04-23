import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses; // Changed prop name to setLikedCourses

  function clickHandler() {
    // Logic to handle like button click
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-gray-800 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.title} />
        <div className="w-[40px] h-[40px] bg-white bottom-1 rounded-full absolute right-2 mb-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="2rem" />
            ) : (
              <FcLikePlaceholder fontSize="2rem" />
            )}
          </button>
        </div>
      </div>

      <div className="ml-2">
        <p className="text-white font-sem text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
