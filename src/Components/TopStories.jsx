import React from 'react';
import Axios from 'axios';
import { HiCheckCircle } from 'react-icons/hi'
import { BsThreeDotsVertical } from 'react-icons/bs'

const TopStories = () => {
    const [data, setData] = React.useState([]);

    const getData = () => {
        Axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=d412e5b8eaa34147b38d9c4766de98d9").
            then((res) => {
                setData(res.data.articles)
            }).catch((err) => {
                console.log(err)
            })
    }

    const printData = () => {
        return data.map((val, idx) => {
            if (idx > 4 && idx < 11 && idx != 8) {
                return <div className='me-2' style={{ width: 250 }}>
                    <div className='position-relative row'>
                        <img src={val.urlToImage} className='col-12' alt="" width={300} height={150}></img>
                        <div className='d-flex mt-3'>
                            <div className='col-11'>
                                {val.title.length > 50 ?
                                    <span className=' fw-bold'>{val.title.slice(0, 51)}...</span>
                                    :
                                    <span className='fw-bold'>{val.title}</span>
                                }
                                <div className='d-flex mt-2'>
                                    <span className='fw-bold text-muted'>{val.source.name} <HiCheckCircle size={25} /></span>
                                </div>
                                <div className='d-flex mt-2'>
                                    <span>2K Views</span>
                                    <span className='ms-auto'>{val.publishedAt.split('T')[0]}</span>
                                </div>
                            </div>
                            <div className='col-1'>
                                <BsThreeDotsVertical size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        })
    }

    React.useEffect(() => {
        getData()
    }, [])

    return <div className='container mt-5'>
        <span className='fs-1 fw-bold' style={{ fontFamily: "monospace" }}>Top Stories</span>
        <div className='row d-flex mt-3'>
            {printData()}
        </div>
    </div>
}

export default TopStories