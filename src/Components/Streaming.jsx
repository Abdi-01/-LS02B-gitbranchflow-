import React from "react";
import Programs from "./Programs";
import SideNews from "./SideNews";
import Axios from "axios";

export default function Streaming() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    Axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=706b3af81f5548d1b6a54a26af1377a9"
    )
      .then((res) => {
        // console.log(res.data.articles);
        let temp = res.data.articles.slice(0, 5);
        setData(temp);
        // console.log(res.data.articles[0].author);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="px-3">
      {/* Judul */}
      <div className="text-start">
        <h3 className="text-dark fw-bold">Upcoming Streaming</h3>
      </div>
      {/* Content */}
      <div
        className="border border-2 p-3 my-4 rounded"
        style={{ borderColor: "#F2F4F5" }}
      >
        {data.map((val) => {
          return <SideNews key={val.publishedAt} news={val} />;
        })}
      </div>
      {/* Upcoming Programs */}
      <div
        className="border border-2 p-3 my-4 rounded"
        style={{ borderColor: "#F2F4F5" }}
      >
        <div className="text-start">
          <h5 className="">Upcoming Programs</h5>
          <p className="">Based on your watchlist</p>
        </div>
        {data.map((val) => {
          return <Programs key={val.publishedAt} />;
        })}
      </div>
    </div>
  );
}
