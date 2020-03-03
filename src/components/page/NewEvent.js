import React, { Component } from 'react'
import Input from '../commons/Input'
import Button from '../commons/Button'
import Textarea from '../commons/Textarea'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from "react-datepicker";
// import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

class NewEvent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            newEvent : {
                name:'',
                description:'',
                location:'',
                startdate: new Date(),
                enddate: new Date()    
            },
            nameError:'',
            descriptionError:'',
            locationError:''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleLocation = this.handleLocation.bind(this);

        this.handleStarDate = this.handleStarDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);

    }

    handleName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newEvent : 
            {...prevState.newEvent, name: value
            }
        }))
        console.log(value);
    }

    // handleName(e) {
    //     let value = e.target.value;
    //     let errors = this.state.errors;
    //     switch (value) {
    //         case 'name': 
    //           errors.value = 
    //             value.length === 0
    //               ? 'name must be filled'
    //               : '';
    //           break;
    //         default:
    //             break;
    //         }
    //         console.log("validasi switch");
    //         console.log(value);
    //     this.setState( prevState => ({ newEvent : 
    //         {...prevState.newEvent, name: value
    //         }
    //     }))
    //     console.log(value);
    // }

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

    handleStarDate = date => {
        this.setState( prevState => ({ newEvent : 
            {...prevState.newEvent, startdate: date
            }
        }))
            console.log(this.state.newEvent.startdate);
    };

    handleEndDate = date => {
        this.setState( prevState => ({ newEvent : 
            {...prevState.newEvent, enddate: date
            }
        }))
            console.log(this.state.newEvent.enddate);
    };
   

    // handleChangeEndDate(date) {
    //     this.setState({
    //         enddate: date
    //     }, () => console.log(this.state.newEvent.enddate));
    // }

     validateName = () => {
        let nameError='';
        console.log("validate");
        console.log(this.state.newEvent);

        if (!this.state.newEvent.name.trim().length) {
            nameError = 'name must be filed';
        }
        if (nameError) {
            this.setState({ nameError });
            return true;
        } else{
            return false;
        }
     };

     validateDescription = () => {
        let descriptionError='';

        if (!this.state.newEvent.description.trim().length) {
            descriptionError = 'description must be filed';
        }
        if (descriptionError) {
            this.setState({ descriptionError });
            return true;
        } else{
            return false;
        }
     };

     validateLocation = () => {
        let locationError='';

        if (!this.state.newEvent.location.trim().length) {
            locationError = 'location must be filed';
        }
        if (locationError) {
            this.setState({ locationError });
            return true;
        } else{
            return false;
        }
     };

     handleFormSubmit(e) {
        e.preventDefault();
        let isValidName = this.validateName();
        let isValidDescription = this.validateDescription();
        let isValidLocation = this.validateLocation();
        // const isValidName 
        // console.log(isValidName);
        if (isValidName === true || isValidDescription === true || isValidLocation === true) {
            console.log(this.state.newEvent);
            console.log("masuk validasi");
            this.setState({newEvent : {
                name: this.state.newEvent.name,
                description: this.state.newEvent.description,
                location: this.state.newEvent.location,
                startdate: this.state.newEvent.startdate,
                enddate: this.state.newEvent.enddate
            }});

            
        }
         else {
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
     

    // handleFormSubmit(e) {
    //     e.preventDefault();
    //     let isValidName = this.validateName();
    //     let isValidDescription = this.validateDescription();
    //     let isValidLocation = this.validateLocation();
    //     // const isValidName 
    //     // console.log(isValidName);
    //     if (isValidName === true ) {
    //         console.log(this.state.newEvent);
    //         console.log("masuk validasi");
    //         this.setState({newEvent : {
    //             name:'',
    //             description:'',
    //             location:''   
    //         }});

            
    //     } else {
    //         let eventData = this.state.newEvent;

    //         fetch('http://localhost:3001/createevent',{
    //             method: "POST",
    //             body: JSON.stringify(eventData),
    //             headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //             },
    //         }).then(response => {
    //             response.json().then(data =>{
    //                 alert('success');
    //             console.log("Successful" + data);
    //             })
    //         })
    //     } 
    // }

    handleClearForm(e) {

        e.preventDefault();
        this.setState({ 
          newEvent: {
            name:'',
            description: '',
            location:'',
            startdate: new Date(),
            enddate: new Date()
          },
        nameError:'',
        descriptionError:'',
        locationError:''
        })
    }

    render() {
     
        return (
            <div>
                <form  onSubmit={this.handleFormSubmit}>
                    <div className="form-group post-h1">
                        <div>
                            <Input type={'text'}
                                title= {''} 
                                name={'name'}
                                value={this.state.newEvent.name}
                                placeholder = {'validation name'}
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
                                <div style={{backgroundColor:"red"}}>{this.state.descriptionError}</div>
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                            <Textarea type={'text'}
                                title= {''} 
                                name={'location'}
                                value={this.state.newEvent.location}
                                placeholder = {'location'}
                                handleChange = {this.handleLocation}
                            />
                             <div style={{backgroundColor:"red"}}>{this.state.locationError}</div>
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                            <DatePicker
                                selected={this.state.newEvent.startdate}
                                onChange={this.handleStarDate}
                                value={this.state.newEvent.startdate}
                                // onSelect={this.handleSelect}
                                name="startdate"
                                // dateFormat="MM/dd/yyyy"
                                placeholderText="start date"
                            />
                        </div>
                    </div>
                </form>

                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group post-h1">
                        <div className="col-sm-6">
                        <DatePicker
                            selected={this.state.newEvent.enddate}
                            onChange={this.handleEndDate}
                            name="enddate"
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
