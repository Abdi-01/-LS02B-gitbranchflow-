import React from "react";
import { HiOutlineBookmark, HiOutlineDotsHorizontal } from "react-icons/hi";

export default function News(props) {
    const [month, setMonth] = React.useState('');

    React.useEffect(() => {
      const date = new Date(props.details.publishedAt.split('-')[0], props.details.publishedAt.split('-')[1]-1, props.details.publishedAt.split('-')[2].slice(0,2));
      setMonth(date.toLocaleString('default', {month : 'short'}));
    })
  return (
    <div className="border-bottom border-2" style={{ borderColor: "#F2F4F5" }}>
      {/* Profile */}
      <div className="d-flex justify-content-between align-items-center p-0 my-2">
        <div className="m-0 p-0">
          <div className="text-start p-0 m-0">
            <img
              src="https://i.picsum.photos/id/770/50/50.jpg?hmac=-dSIVK0UPi_k9pgNlbr8kqA4JPIvEwvjgYAlFPwvPLY"
              alt="profile-img"
              className="rounded-circle"
            />
            <span className="mx-3 fw-bolder">{props.details.author}</span>
          </div>
          <div className="text-start">
            {/* Title */}
            <div>
              <h4 className="fw-bolder pe-4">
                {props.details.title}
              </h4>
            </div>
            {/* News */}
            <div>
              <h6 className="text-secondary pe-5">
                {props.details.description}
              </h6>
            </div>
            {/* Other */}
            <div className="d-flex justify-content-between align-items-center me-4">
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-secondary text-muted me-5 my-auto">{month} {props.details.publishedAt.split('-')[2].slice(0,2)}, {props.details.publishedAt.split('-')[0]}</p>
                <p className="text-secondary text-muted my-auto">10 min read</p>
              </div>
              <div>
                <HiOutlineBookmark
                  style={{ color: "#0401615", fontSize: "1.5em" }}
                />
                <HiOutlineDotsHorizontal
                  style={{ color: "#0401615", fontSize: "1.5em" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="my-2">
          <img
            src={props.details.urlToImage}
            alt="news-img"
            style={{width:'200px', height: '200px'}}
          />
        </div>
      </div>
    </div>
  );
}
