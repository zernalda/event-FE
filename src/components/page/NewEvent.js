import React, { Component } from 'react'
import Input from '../commons/Input'
import Button from '../commons/Button'
import Textarea from '../commons/Textarea'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";


const intitialState = {
    newEvent : {
        name:'' 
    }
}

class NewEvent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            newEvent : {
                name:'',
                description:'',
                location:'',
                startdate: moment(),
                enddate: moment()      
            },
            nameError:''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleLocation = this.handleLocation.bind(this);

        this.handleChangeStarDate = this.handleChangeStarDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);

        // this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);

    }

    // passwordMatch = (confirmation, state) => (state.password === confirmation)

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

    handleChangeStarDate(date) {
        this.setState({
            startdate: date
        }, () => console.log(this.state.newEvent.startdate));
        // console.log(this.state.startDate);
    }

    handleChangeEndDate(date) {
        this.setState({
            enddate: date
        }, () => console.log(this.state.newEvent.enddate));
        // console.log(this.state.startDate);
    }

    // handleChangeValidate = ({ target }) => {
    //     this.setState({ [target.name]: target.value });
    //  };

     validate = () => {
        let nameError='';

        if (!this.state.newEvent.name.includes('@')) {
            nameError = 'invalid name';
        }

        if (nameError) {
            this.setState({ nameError });
            return true;
        } else{
            return false;
        }
     };

    handleFormSubmit(e) {
        e.preventDefault();
        const isValid = this.validate();
        console.log(isValid);
        if (isValid === true) {
            console.log(this.state.newEvent);
            console.log("masuk validasi");
            this.setState({newEvent : {
                name:''   
            }});

            
        } else {
            console.log("masuk ga ya?")
            let eventData = this.state.newEvent;

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

        
    }

    handleClearForm(e) {

        e.preventDefault();
        this.setState({ 
          newEvent: {
            name:'',
            description: '',
            location:'',
            startdate: '',
            enddate: ''
          },
        })
    }

    render() {
     
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div>
                            <Input type={'email'}
                                title= {''} 
                                name={'name'}
                                value={this.state.newEvent.name}
                                placeholder = {'validation email'}
                                handleChange = {this.handleName}
                                />
                                <div style={{backgroundColor:"red"}}>{this.state.nameError}</div>
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                            <Textarea type={'text'}
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
                                selected={this.state.startdate}
                                onChange={this.handleChangeStarDate}
                                placeholderText="start date"
                            />
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                        <DatePicker
                            selected={this.state.enddate}
                            onChange={this.handleChangeEndDate}
                            placeholderText="end date"
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
