import React from 'react';
import News from './News';
import Axios from 'axios';

export default function Headline() {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        Axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=706b3af81f5548d1b6a54a26af1377a9')
        .then((res) => {
            // console.log(res.data.articles);
            let temp = res.data.articles.slice(0,5);
            setData(temp);
            // console.log(res.data.articles[0].author);
        }).catch((err) => {
            console.log(err);
        })
    })
  return (
    <div className='px-3'>
        {/* title */}
        <div className='text-start'>
            <h3 className='text-dark fw-bold'>Top Stories</h3>
        </div>
        {/* News */}
        <div className='mt-4'>
            {data.map((val) => {
                return <News details={val} key={val.publishedAt}/>
            })}
        </div>
    </div>
  )
}
