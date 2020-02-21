import React, { Component } from 'react';
// IMPORT COMPONENTS
import Input from './commons/Input';
import Button from './commons/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Domain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newDomain : {
                domain : ''
            },
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleDomain = this.handleDomain.bind(this);
    }

        handleInput(e) {
            let value = e.target.value;
            let name = e.target.name;
            this.setState( prevState => {
               return { 
                  newDomain : {
                           ...prevState.newDomain, [name]: value
                          }
               }
            }, () => console.log("isi state" + this.state.newDomain)
            )
        }

        handleDomain(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newDomain : 
                {...prevState.newDomain, domain: value
                }
            }))
        }

        handleFormSubmit= (event) => {
            event.preventDefault()

            // let urlWhois = `https://mxtoolbox.com/api/v1/lookup/whois/`+this.state.newDomain.domain;
            let urlNS = `https://dns.google.com/resolve?name=`+this.state.newDomain.domain+`&type=A`;
            console.log("urlNS" + urlNS);
            axios.get(urlNS)
            .then(response => {
                console.log("masuk");
                console.log(response.data);
                const elemenWhois = [];
                if ( response.data.Answer > 0) {
                    console.log("Whois element Detect");
                    console.log("isi response = ");
                    console.log(response.data.Answer);
                    for (let index = 0; index < response.data.Answer.length; index++) {
                        // console.log("Record of Whois = "+response.data.Information[index].Record);
                        const Record = response.data;
                        // console.log("isi record="+Record);
                        const id=index;
                        // const findRecord = Record.indexOf('No match for');
                        // if (Record === null) {
                        //     console.log("ini berarti ada No Match nya");
                        // }
                        //     console.log("ini berarti ga ada no match nya");
                        elemenWhois.push({id,Record});
                        
                    }
                } else {
                    console.log("Whois element undetect");
                }
                this.setState({
                    outputListsWhois: elemenWhois,
                    outputListsLengthWhois: response.data.Answer,
                    outputListsStringWhois: JSON.stringify(response.data.Information),
                    // outputFindRecord: response.data.indexOf('No match for')
                });
            }); 

        }
            
  
    render() {
        const objects = this.state.outputListsWhois;
        console.log("list Whois: ");
        console.log(objects);
        const outputWhoisFilter = this.state.outputListsLengthWhois;
        return(
            <div className="container content-wrapper">
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Check Domain</h1>
                    <div className="form-group post-h1">
                        <Input type={'text'}
                            title= {''} 
                            name= {'domain'}
                            value={this.state.newDomain.domain} 
                            placeholder = {'domain varchar (225)'}
                            handleChange = {this.handleDomain}
                            />
                        <Button 
                            type = {'primary'} 
                            title = {'Submit'} 
                            style={buttonStyle}
                            /> { /*Submit */ }
                    </div>
                </form>
                <div>
                    response PS API check Domain= {
                        outputWhoisFilter ?
                            <h2>Already Registered</h2> : <h2>Not Registered</h2>
                    }
                </div>
            </div>
        );
    }
}

const buttonStyle = {
    margin : '10px 10px 10px 10px'
  }

export default Domain
