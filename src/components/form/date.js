import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const date = () =>{
    return(
        <div>
            <DatePicker onChange={onChange} />
        </div>
    )
}

export default date;