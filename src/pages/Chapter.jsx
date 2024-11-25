import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Chapter = () => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    console.log(res);
    const data_format = await res.data.data;
    setData(data_format);
  };

  useEffect(() => {
    callApi();
    console.log(data);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">ตารางการเรียนรู้</h1>
      <hr className="mb-8" />
      <div className="space-y-6">
        {data.map((chapter) => (
          <ChapterCard key={chapter.id} {...chapter} />
        ))}
      </div>
    </div>
  );
};

const ChapterCard = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          เรื่อง: {props.ch_title}
        </h2>
        <div className="relative pb-[56.25%] h-0 mb-4">
          <iframe
            src={"https://www.youtube.com/embed/" + props.ch_url}
            title={props.ch_title}
            className="absolute top-0 left-0 w-full h-full rounded"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-gray-700">
          <span className="font-bold">View:</span> {props.ch_view}{" "}
          <span className="font-bold">Time:</span> {props.ch_timetotal}
        </p>
      </div>
    </div>
  );
};

export default Chapter;
