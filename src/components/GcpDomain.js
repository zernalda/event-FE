import React, { Component } from 'react';
// IMPORT COMPONENTS
import Input from './commons/Input';
import Button from './commons/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import cors from 'cors';

class GcpDomain extends Component {

  constructor(props) {
    super(props);

    this.state = {
        newDomain : {
            domain : ''
        },
    }

        // this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDomain = this.handleDomain.bind(this);
        // this.state = {isGcp: false};
    }

        handleInput(e) {
            let value = e.target.value;
            let domain = e.target.domain;
            this.setState( prevState => {
               return { 
                  newDomain : {
                           ...prevState.newDomain, [domain]: value
                          }
               }
            }
            )
            console.log("handleDomain: " + this.state.newDomain);
        }

        handleDomain(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newDomain : 
                {...prevState.newDomain, domain: value
                }
            }))
            // console.log("handleDomain: " + this.state.newDomain.domain);
        }

        handleFormSubmit= (event) => {
            event.preventDefault()

            let urlMx = `https://mxtoolbox.com/api/v1/lookup/mx/`+this.state.newDomain.domain;
            let urlSpf = `https://mxtoolbox.com/api/v1/lookup/spf/`+this.state.newDomain.domain;

            // return true or false
            axios.get(urlMx)
            .then(response => {
                const elementMx = [];
                // const statusGsuite= [];
                let mxSpf = false;
                if ( response.data.Information.length > 0) {
                    console.log("MX element Detect")
                    let findHost = -1;
                   
                    for (let index = 0; index < response.data.Information.length; index++) {
                        // console.log("masuk hostname= "+response.data.Information[index].Hostname);
                        const Hostname = response.data.Information[index].Hostname.toLowerCase();
                        const id=index;
                        findHost = Hostname.indexOf('google.com');
                        console.log(Hostname+' :' +findHost);
                        if (findHost >= 0) {
                            elementMx.push({id,Hostname, findHost});
                            console.log("mx detect")
                            // return statusGsuite.push(true);
                            break;
                        } 
                        
                    }
                    if (findHost >= 0) {
                        axios.get(urlSpf)
                        .then(response => {
                            const elementSpf = [];
                            let findDescription = -1;
            
                            if (response.data.Information.length > 0) {
                                console.log("SPF element Detect");
                                for (let index = 0; index < response.data.Information.length; index++) {
                                    // console.log("masuk spf looping= ")
                                    // console.log(response.data.Information[index].Description);
                                    const LengthSpf = response.data.Information[index].Description.toLowerCase();
                                    const id=index;
                                    findDescription = LengthSpf.indexOf('_spf.google.com');
                                    if (findDescription >=0) {
                                        elementSpf.push({id, LengthSpf, findDescription});
                                        console.log("spf detect");
                                        // status= true;
                                        break;
                                    }
                                    // console.log("indexOf= "+findValueSpf) 
                                }
                                if (findDescription >= 0) {
                                    mxSpf = true;
                                }else{
                                    console.log("SPF not define");
                                }
                            } else {
                                console.log("SPF Elemen Undetect");
                            }
                            
        
                            this.setState({
                                outputListsMx: elementMx,
                                // outputListsLengthMx: response.data.Information.length,
                                // outputListsStringMx: JSON.stringify(response.data.Information),
                                outputListsSpf: elementSpf,
                                // outputListsLengthSpf: response.data.Information.length,
                                // outputListsStringSpf: JSON.stringify(response.data.Information),
                                outputListMxSpfLength: mxSpf
                            });
                        });
                    }else{
                        console.log("tidak ada google.com");
                    }
                } else {
                    console.log("MX element undetect");
                }
            }); 

        }
              
    render() {
        const objects = this.state.outputListsMx;
        const objectsSpf = this.state.outputListsSpf;
        console.log("list MX: ");
        console.log(objects);
        console.log("list SPF: ");
        console.log(objectsSpf);
        // const outputMxLength = this.state.outputListsLengthMx;
        // const outputSpfLength = this.state.outputListsLengthSpf;
        const outputMxSpfLength = this.state.outputListMxSpfLength;
        console.log("length: "+outputMxSpfLength);

        return (
            <div className="container content-wrapper">
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Check G-Suite Domain</h1>
                    <div className="form-group post-h1">
                        <Input type={'text'}
                            title= {''} 
                            name= {'domain'}
                            value={this.state.newDomain.domain} 
                            placeholder = {'Type your domain'}
                            handleChange = {this.handleDomain}
                            />
                        <Button 
                            type = {'primary'} 
                            title = {'Submit'} 
                            style={buttonStyle}
                            />
                    </div>
                </form>

                <div>
                    response PS API check GSUITE= {
                        // outputMxLength && outputSpfLength ?
                        
                        outputMxSpfLength === true ?
                            <h2>Valid</h2> : <h2>Invalid</h2>
                    }
                </div>
            </div>
        );
    }
}

const buttonStyle = {
    margin : '10px 10px 10px 10px'
  }

export default GcpDomain
