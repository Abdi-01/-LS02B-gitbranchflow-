import React from 'react';
import { BsCalendar4 } from 'react-icons/bs';

export default function Events() {
  return (
    <div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center p-0">
            <div className="border-none bg-primary bg-opacity-25 p-2 rounded">
              <p className="text-primary m-0">JAN</p>
              <p className="text-primary m-0">10</p>
            </div>
            <div className="ms-2 text-start my-0">
              <h5 className="m-0 fw-semibold mb-1 text-muted">Trade war in 2022</h5>
              <p className="m-0 text-muted">Jan 10, 2022, 5:30 AM</p>
            </div>
          </div>
          <div>
            <BsCalendar4 style={{color : '#696969', fontSize: '1.5em'}}/>
          </div>
        </div>
    </div>
  )
}
