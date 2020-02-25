import React, { Component } from 'react'
import Input from '../commons/Input'
import Button from '../commons/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class NewEvent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            newEvent : {
                name:'',
                description:'',
                location:'',
                startDate: '',
                endDate: ''
            },
        }
        // console.log(this.state);

        this.handleInput = this.handleInput.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleStarDate = this.handleStarDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);

        // this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);

    }

    handleName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newEvent : 
            {...prevState.newEvent, name: value
            }
        }))
    }

    handleDescription(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newEvent : 
            {...prevState.newEvent, description: value
            }
        }))
    }

    handleLocation(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newEvent : 
            {...prevState.newEvent, location: value
            }
        }))
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
           return { 
              newEvent : {
                       ...prevState.newEvent, [name]: value
                      }
           }
        }, () => console.log(this.state.newEvent)
        )
    }

    // handleStarDate(e) {
    //     let value = e.target.value;
    //     this.setState( prevState => ({ newEvent : 
    //         {...prevState.newEvent, startDate: value
    //         }
    //     }))
    // }
     
    handleStarDate = date => {
        this.setState({
            startDate: new Date()
        });
    };

    handleEndDate = date => {
        this.setState({
            endDate: new Date()
        });
    };

    // handleChange (date) {
    //     this.setState({
    //       startDate: date
    //     });
    //   };

    handleFormSubmit(e) {
        e.preventDefault();
        let eventData = this.state.newEvent;
        // console.log(eventData);

        fetch('http://localhost:3001/createevent',{
            method: "POST",
            body: JSON.stringify(eventData),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                alert('success');
            console.log("Successful" + data);
            })
        })
    }

    handleClearForm(e) {

        e.preventDefault();
        this.setState({ 
          newEvent: {
            name:'',
            description: '',
            location:'',
            startDate: '',
            endDate:''
          },
        })
    }

    render() {
        return (
            <div>
                {/* <h2>Create new event</h2> */}
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                            <Input type={'text'}
                                title= {''} 
                                name={'name'}
                                value={this.state.newEvent.name}
                                placeholder = {'Event Name'}
                                handleChange = {this.handleName}
                                />
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                            <Input type={'textarea'}
                                title= {''} 
                                name={'description'}
                                value={this.state.newEvent.description}
                                placeholder = {'description'}
                                handleChange = {this.handleDescription}
                                />
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                            <Input type={'textarea'}
                                title= {''} 
                                name={'location'}
                                value={this.state.newEvent.location}
                                placeholder = {'location'}
                                handleChange = {this.handleLocation}
                            />
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleStarDate}
                            placeholder={'stardate'}
                            name={this.state.newEvent.startDate}
                            value={this.state.newEvent.startDate}
                            // showTimeSelect
                        />
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={this.handleEndDate}
                            placeholder={'enddate'}
                            name={this.state.newEvent.endDate}
                            value={this.state.newEvent.endDate}
                            // showTimeSelect
                        />
                        </div>
                    </div>
                </form>
                    
                <Button 
                    action = {this.handleFormSubmit}
                    type = {'primary'} 
                    title = {'Submit'} 
                /> { /*Submit */ }

                <Button 
                    action = {this.handleClearForm}
                    type = {'secondary'}
                    title = {'Clear'}
                />
            </div>
        )
    }
}

export default NewEvent
