import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Date = (props) => {
    return(
        <DatePicker
            selected={ props.value }
            onChange={ props.handleSubCreationTime }
            name= {props.name}
            // placeholder = {props.placeholder}
        />
    );
}
export default Date

