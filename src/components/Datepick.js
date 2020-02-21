import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class DatePick extends Component {

    constructor (props) {
        super(props)
        this.state = {
            startDate : moment()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
        startDate: date
        })
        console.log(date);
    }

    handleSubmit(e) {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main.format('L'));
    }

    render() {
        // const selected = moment(isoDateStr).toDate()
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.handleChange}
                        name
                        showTimeSelect
                        dateFormat="LLL" 
                    />
                </form>
            </div>
        );
    }
}

export default DatePick
