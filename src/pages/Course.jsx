import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);
  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    console.log(res);
    const data_format = await res.data.data;

    setData(data_format);
  };

  useEffect(() => {
    callApi();
    console.log(data);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">คอร์สเรียนของเรา</h1>
      <hr className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={props.picture}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{props.detail}</p>
        <NavLink
          to={"/course/" + props.id}
          className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition"
        >
          หลักสูตร
        </NavLink>
      </div>
    </div>
  );
};

export default Course;
