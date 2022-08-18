import React from "react";

export default function SideNews(props) {
    const [month, setMonth] = React.useState('');

    React.useEffect(() => {
        const date = new Date(props.news.publishedAt.split('-')[0], props.news.publishedAt.split('-')[1]-1, props.news.publishedAt.split('-')[2].slice(0,2));
        setMonth(date.toLocaleString('default', {month : 'short'}));
    })

  return (
    <div className="pb-4">
      <div className="d-flex">
        {/* Gambar Kiri */}
        <div>
          <img
            src={props.news.urlToImage}
            alt=""
            style={{ height: "100px", width : '100px' }}
          />
        </div>
        <div className="text-start ps-3">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="text-muted">{month} {props.news.publishedAt.split('-')[2].slice(0,2)}, {props.news.publishedAt.split('-')[0]}</h6>
            <h6 className="text-muted">10 min read</h6>
          </div>
          <h5 className="fw-normal">{props.news.title.slice(0,39)}...</h5>
        </div>
      </div>
    </div>
  );
}
