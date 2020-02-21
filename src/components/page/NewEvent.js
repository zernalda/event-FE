import React, { Component } from 'react'
import Input from '../commons/Input'
import Button from '../commons/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";


export class NewEvent extends Component {

    state = {
        startDate: new Date(),
        endDate: new Date()
      };
     
      starDatehandleChange = date => {
        this.setState({
          startDate: date
        });
      };

      endDatehandleChange = date => {
        this.setState({
          endDate: date
        });
      };

    render() {
        return (
            <div>
                {/* <h2>Create new event</h2> */}
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                            <Input type={'text'}
                                title= {''} 
                                placeholder = {'Event Name'}
                                />
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                            <Input type={'textarea'}
                                title= {''} 
                                placeholder = {'description'}
                                />
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                            <Input type={'textarea'}
                                title= {''} 
                                placeholder = {'location'}
                            />
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.starDatehandleChange}
                        />
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={this.endDatehandleChange}
                        />
                        </div>
                    </div>
                </form>
                    
                <Button 
                    type = {'primary'} 
                    title = {'Submit'} 
                    /> { /*Submit */ }
            </div>
        )
    }
}

export default NewEvent
