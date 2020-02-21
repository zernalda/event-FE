import React, { Component } from 'react';

// IMPORT COMPONENTS
import Input from './commons/Input';
import Button from './commons/Button';
import Date from './commons/Date';
import 'bootstrap/dist/css/bootstrap.min.css';
// to get value from datepicker
import moment from 'moment';
// import Select from './components/Select';

class FormUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                customerId:'',
                partner_reseller_fkid: '',
                customerDomain:'',
                skuId: '',
                licensedNumberOfSeats : '',
                picContactName: '',
                region: '',
                addressLine1: '', 
                addressLine2: '', 
                addressLine3: '',
                locality: '',
                countryCode: '', 
                postalCode: '',
                phoneNumber: '',
                picAlternateEmail: '',
                customerDomainVerified: '',
                subscriptionId : '',
                planName : '',
                numSeats : '',
                purchaseOrderId: '',
                status : '',
                dealCode : '',
                numUserRegister: '',
                subCreationTime: moment(),
                subRenewalTime: moment() 
                // subExpiredTime: moment() 
            },

        }

        this.handleInput = this.handleInput.bind(this);
        this.handleCustomerId = this.handleCustomerId.bind(this);
        this.handlePartnerReseller = this.handlePartnerReseller.bind(this);
        this.handleCustomerDomain = this.handleCustomerDomain.bind(this);
        this.handleSkuId = this.handleSkuId.bind(this);
        this.handleLicensedNumberOfSeats = this.handleLicensedNumberOfSeats.bind(this);
        this.handleOrganizationName = this.handleOrganizationName.bind(this);
        this.handlePicContactName = this.handlePicContactName.bind(this);
        this.handleRegion = this.handleRegion.bind(this);
        this.handleAddressLine1 = this.handleAddressLine1.bind(this);
        this.handleAddressLine2 = this.handleAddressLine2.bind(this);
        this.handleAddressLine3 = this.handleAddressLine3.bind(this);
        this.handleLocality = this.handleLocality.bind(this);
        this.handleCountryCode = this.handleCountryCode.bind(this);
        this.handlePostalCode = this.handlePostalCode.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.handlePicAlternateEmail = this.handlePicAlternateEmail.bind(this);
        this.handleCustomerDomainVerified = this.handleCustomerDomainVerified.bind(this);
        this.handleSubscriptionId = this.handleSubscriptionId.bind(this);
        this.handlePlanName = this.handlePlanName.bind(this);
        this.handleNumSeats = this.handleNumSeats.bind(this);
        this.handlePurchaseOrderId = this.handlePurchaseOrderId.bind(this);   
        this.handleStatus = this.handleStatus.bind(this);
        this.handleDealCode = this.handleDealCode.bind(this);
        this.handleNumUserRegister = this.handleNumUserRegister.bind(this);
        this.handleSubCreationTime = this.handleSubCreationTime.bind(this);
        this.handleSubRenewalTime = this.handleSubRenewalTime.bind(this);
        // datepicker
        this.handleChange = this.handleChange.bind(this);
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
      }

      handleCustomerId(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser : 
             {...prevState.newUser, customerId: value
             }
           }))
       }

       handlePartnerReseller(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser : 
             {...prevState.newUser, partner_reseller_fkid: value
             }
           }))
       }

       handleCustomerDomain(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser : 
                {...prevState.newUser, customerDomain: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleSkuId(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser : 
                {...prevState.newUser, skuId: value
                }
            }
            ), () => console.log(this.state.newUser))
        }

        handleLicensedNumberOfSeats(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser : 
                {...prevState.newUser, licensedNumberOfSeats: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleOrganizationName(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                 {...prevState.newUser, organizationName: value
                 }
               }) , () => console.log(this.state.newUser))
           }
        
        handleRegion(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser : 
                {...prevState.newUser, region: value
                }
            }) , () => console.log(this.state.newUser))
        }

        handlePicContactName(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, picContactName: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleAddressLine1(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, addressLine1: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleAddressLine2(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, addressLine2: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleAddressLine3(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, addressLine3: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleLocality(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, locality: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleCountryCode(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, countryCode: value
                }
            }), () => console.log(this.state.newUser))
        }

        handlePostalCode(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, postalCode: value
                }
            }), () => console.log(this.state.newUser))
        }

        handlePhoneNumber(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, phoneNumber: value
                }
            }), () => console.log(this.state.newUser))
        }

        handlePicAlternateEmail(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, picAlternateEmail: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleCustomerDomainVerified(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, customerDomainVerified: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleSubscriptionId(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, subscriptionId: value
                }
            }), () => console.log(this.state.newUser))
        }
        
        handlePlanName(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, planName: value
                }
            }), () => console.log(this.state.newUser))
        }
        handleNumSeats(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, numSeats: value
                }
            }), () => console.log(this.state.newUser))
        }
        handlePurchaseOrderId(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, purchaseOrderId: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleStatus(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, status: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleDealCode(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, dealCode: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleNumUserRegister(e) {
            let value = e.target.value;
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, numUserRegister: value
                }
            }), () => console.log(this.state.newUser))
        }

        // datepicker
        handleSubCreationTime(e) {
            let value = e.target.value._d.getDate;
            // e.target._d
            console.log(value);
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, subCreationTime: value
                }
            }), () => console.log(this.state.newUser))
          }

        handleSubRenewalTime(e) {
            let value = e.target.value._d;
            // e.target._d
            console.log(value);
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, subRenewalTime: value
                }
            }), () => console.log(this.state.newUser))
        }

        handleChangeDate(date) {
            this.setState({
              startDateChange: date
            })
          }


        handleChange (date) {
            this.setState({
              startDate: date
            });
          };

        handleInput(e) {
            let value = e.target.value;
            let name = e.target.name;
            this.setState( prevState => {
               return { 
                  newUser : {
                           ...prevState.newUser, [name]: value
                          }
               }
            }, () => console.log(this.state.newUser)
            )
        }

        

       /* This life cycle hook gets executed when the component mounts */

       handleFormSubmit(e) {
            e.preventDefault();
            let userData = this.state.newUser;
        
            fetch('http://localhost:3001/customers',{
                method: "POST",
                body: JSON.stringify(userData),
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
              newUser: {
                customerId:'',
                partner_reseller_fkid: '',
                customerDomain:'',
                skuId: '',
                licensedNumberOfSeats : '',
                organizationName: '', 
                picContactName: '',
                region: '',
                addressLine1: '', 
                addressLine2: '', 
                addressLine3: '',
                locality: '',
                countryCode: '', 
                postalCode: '', 
                planName: '',
                phoneNumber: '',
                picAlternateEmail: '',
                customerDomainVerified: '',
                subscriptionId: '',
                numSeats: '',
                purchaseOrderId: '',
                status: '',
                dealCode: '',
                numUserRegister: '',
                subCreationTime:'',
                subRenewalTime:''
              },
            })
        }

        render() {
            return (
                <div className="container content-wrapper">
                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <h1>Form Customer</h1>
                        <div className="form-group post-h1">
                            <div className="col-sm-6">
                                <Input type={'text'}
                                    title= {''} 
                                    name= {'customerId'}
                                    value={this.state.newUser.customerId} 
                                    placeholder = {'customerId varchar(255) '}
                                    handleChange = {this.handleCustomerId}
                                    />
                            </div>
                        </div>
                        <div className="form-group">
                            <h4>choose your SKU :</h4>
                            <div className="checkbox">
                                <label className="checkbox-inline">
                                    <Input type={'radio'}
                                        name= {'skuId'}
                                        value={'1010020020'} 
                                        checked={this.state.newUser.skuId} 
                                        handleChange = {this.handleSkuId}
                                        />
                                        G Suite Enterprise
                                </label>
                            </div>
                            <div className="checkbox">
                                <label className="checkbox-inline">
                                    <Input type={'radio'}
                                        name= {'skuId'}
                                        value={'Google-Apps-Unlimited'} 
                                        checked={this.state.newUser.skuId} 
                                        handleChange = {this.handleSkuId}
                                        />
                                        G Suite Business
                                </label>
                            </div>
                            <div className="checkbox">
                                <label className="checkbox-inline">
                                    <Input type={'radio'}
                                        name= {'skuId'}
                                        value={'Google-Apps-For-Business'} 
                                        checked={this.state.newUser.skuId} 
                                        handleChange = {this.handleSkuId}
                                        />
                                        G Suite Basic
                                </label>
                            </div>
                            <div className="checkbox">
                                <label className="checkbox-inline">
                                    <Input type={'radio'}
                                        name= {'skuId'}
                                        value={'1010060001'} 
                                        checked={this.state.newUser.skuId} 
                                        handleChange = {this.handleSkuId}
                                        />
                                        Drive Enterprise
                                </label>
                            </div>
                            <div className="checkbox">
                                <label className="checkbox-inline">
                                    <Input type={'radio'}
                                        name= {'skuId'}
                                        value={'Google-Apps-Lite'} 
                                        checked={this.state.newUser.skuId} 
                                        handleChange = {this.handleSkuId}
                                        />
                                        G Suite Lite
                                </label>
                            </div>
                            <div className="checkbox">
                                <label className="checkbox-inline">
                                    <Input type={'radio'}
                                        name= {'skuId'}
                                        value={'Google-Apps-For-Postini'} 
                                        checked={this.state.newUser.skuId} 
                                        handleChange = {this.handleSkuId}
                                        />
                                    Google Apps Message Security   
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <h4>choose your planName : </h4>
                            <div className="checkbox">
                                <label className="checkbox-inline">
                                    <Input type={'radio'}
                                    name= {'planName'}
                                    value={'ANNUAL_MONTHLY_PAY'} 
                                    checked={this.state.newUser.planName} 
                                    handleChange = {this.handlePlanName}
                                    />
                                    ANNUAL_MONTHLY_PAY
                                </label>
                            </div>
                            <div className="checkbox">
                                <label className="checkbox-inline">
                                    <Input type={'radio'}
                                    name= {'planName'}
                                    value={'ANNUAL_YEARLY_PAY'} 
                                    checked={this.state.newUser.planName} 
                                    handleChange = {this.handlePlanName}
                                    />
                                    ANNUAL_YEARLY_PAY
                                </label>
                            </div>
                            <div className="checkbox">
                                <label className="checkbox-inline">
                                    <Input type={'radio'}   
                                    name= {'planName'}
                                    value={'FLEXIBLE'} 
                                    checked={this.state.newUser.planName} 
                                    handleChange = {this.handlePlanName}
                                    />
                                    FLEXIBLE
                                </label>
                            </div>
                            <div className="checkbox">
                                <label className="checkbox-inline">
                                    <Input type={'radio'}
                                    name= {'planName'}
                                    value={'TRIAL'} 
                                    checked={this.state.newUser.planName} 
                                    handleChange = {this.handlePlanName}
                                    />
                                    TRIAL
                                </label>
                            </div>
                            <div className="checkbox">
                                <label className="checkbox-inline">
                                    <Input type={'radio'}
                                    name= {'planName'}
                                    value={'FREE'} 
                                    checked={this.state.newUser.planName} 
                                    handleChange = {this.handlePlanName}
                                    />
                                    FREE
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <Input type={'text'}
                                title= {''} 
                                name= {'numSeats'}
                                value={this.state.newUser.numSeats} 
                                placeholder = {'numSeats int(11)'}
                                handleChange = {this.handleNumSeats}
                                />
                        </div>      
                        <div className="form-group">
                            <Input type={'text'}
                                title= {''} 
                                name= {'purchaseOrderId'}
                                value={this.state.newUser.purchaseOrderId} 
                                placeholder = {'purchaseOrderId varchar(255)'}
                                handleChange = {this.handlePurchaseOrderId}
                                />
                        </div>
                        <div className="form-group">
                            <Input type={'text'}
                                title= {''} 
                                name= {'customerDomain'}
                                value={this.state.newUser.customerDomain} 
                                placeholder = {'customerDomain varchar(255) '}
                                handleChange = {this.handleCustomerDomain}
                                />
                        </div>  
                        <div className="form-group">
                            <Input type={'text'}
                                title= {''} 
                                name= {'picContactName'}
                                value={this.state.newUser.picContactName} 
                                placeholder = {'picContactName varchar(255) '}
                                handleChange = {this.handlePicContactName}
                                />
                        </div>  
                        <div className="form-group">
                            <Input type={'text'}
                                title= {''} 
                                name= {'organizationName'}
                                value={this.state.newUser.organizationName} 
                                placeholder = {'organizationName varchar(255) '}
                                handleChange = {this.handleOrganizationName}
                                />
                        </div>  
                        <div className="form-group">
                            <Input type={'text'}
                                title= {''} 
                                name= {'postalCode'}
                                value={this.state.newUser.postalCode} 
                                placeholder = {'postalCode varchar(255) '}
                                handleChange = {this.handlePostalCode}
                                />
                        </div>  
                        <div className="form-group">
                            <Input type={'text'}
                                title= {''} 
                                name= {'countryCode'}
                                value={this.state.newUser.countryCode} 
                                placeholder = {'countryCode varchar(255) '}
                                handleChange = {this.handleCountryCode}
                                />
                        </div>  
                        <div className="form-group">
                            <Input type={'text'}
                                title= {''} 
                                name= {'picAlternateEmail'}
                                value={this.state.newUser.picAlternateEmail} 
                                placeholder = {'picAlternateEmail varchar(255) '}
                                handleChange = {this.handlePicAlternateEmail}
                                />
                        </div>  
                        <div className="form-group">
                            <Input type={'text'}
                                title= {''} 
                                name= {'partner_reseller_fkid'}
                                value= {this.state.newUser.partner_reseller_fkid} 
                                placeholder = {'partner_reseller_fkid int(25) '}
                                handleChange = {this.handlePartnerReseller}
                                />
                        </div>  
                            
                            {/* <Input type={'text'}
                                title= {''} 
                                name= {'licensedNumberOfSeats'}
                                value={this.state.newUser.licensedNumberOfSeats} 
                                placeholder = {'licensedNumberOfSeats int(11) '}
                                handleChange = {this.handleLicensedNumberOfSeats}
                                /> */}
                            {/* <Input type={'text'}
                                title= {''} 
                                name= {'region'}
                                value={this.state.newUser.region} 
                                placeholder = {'region varchar(255) '}
                                handleChange = {this.handleRegion}
                                /> */}
                            {/* <Input type={'text'}
                                title= {''} 
                                name= {'addressLine1'}
                                value={this.state.newUser.addressLine1} 
                                placeholder = {'addressLine1 varchar(255) '}
                                handleChange = {this.handleAddressLine1}
                                />
                            <Input type={'text'}
                                title= {''} 
                                name= {'addressLine2'}
                                value={this.state.newUser.addressLine2} 
                                placeholder = {'addressLine2 varchar(255) '}
                                handleChange = {this.handleAddressLine2}
                                />
                            <Input type={'text'}
                                title= {''} 
                                name= {'addressLine3'}
                                value={this.state.newUser.addressLine3} 
                                placeholder = {'addressLine3 varchar(255) '}
                                handleChange = {this.handleAddressLine3}
                                /> */}
                            {/* <Input type={'text'}
                                title= {''} 
                                name= {'locality'}
                                value={this.state.newUser.locality} 
                                placeholder = {'locality varchar(255) '}
                                handleChange = {this.handleLocality}
                                /> */}
                            {/* <Input type={'text'}
                                title= {''} 
                                name= {'phoneNumber'}
                                value={this.state.newUser.phoneNumber} 
                                placeholder = {'phoneNumber varchar(255)'}
                                handleChange = {this.handlePhoneNumber}
                                /> */}
                            {/* <Input type={'text'}
                                title= {''} 
                                name= {'customerDomainVerified'}
                                value={this.state.newUser.customerDomainVerified} 
                                placeholder = {'customerDomainVerified varchar(255)'}
                                handleChange = {this.handleCustomerDomainVerified}
                                /> */}
                            {/* <Input type={'text'}
                                title= {''} 
                                name= {'subscriptionId'}
                                value={this.state.newUser.subscriptionId} 
                                placeholder = {'subscriptionId varchar(255)'}
                                handleChange = {this.handleSubscriptionId}
                                /> */}
                            {/* <Input type={'text'}
                                title= {''} 
                                name= {'status'}
                                value={this.state.newUser.status} 
                                placeholder = {'status varchar(255)'}
                                handleChange = {this.handleStatus}
                                /> */}
                            {/* <Input type={'text'}
                                title= {''} 
                                name= {'dealCode'}
                                value={this.state.newUser.dealCode} 
                                placeholder = {'dealCode varchar(255)'}
                                handleChange = {this.handleDealCode}
                                /> */}
                            {/* <Input type={'text'}
                                title= {''} 
                                name= {'numUserRegister'}
                                value={this.state.newUser.numUserRegister} 
                                placeholder = {'numUserRegister int(11)'}
                                handleChange = {this.handleNumUserRegister}
                                /> */}
                            {/* <Date
                                selected={ this.startDateChange }
                                onChange={ this.handleSubCreationTime }
                                // handleChange={this.handleSubCreationTime}
                                name={'startDateChange'}
                                showTimeSelect
                                // value={this.state.newUser.subCreationTime}
                                placeholder= {'enter yor sub creation time'}
                                dateFormat="MM/DD/YYYY" 
                                /> */}
                            {/* <Date
                                selected={ this.state.startDate }
                                onChange={ this.handleChange }
                                name={'startDate'}
                                // showTimeSelect
                                // value={this.state.newUser.subCreationTime}
                                // placeholder= {'enter yor subrenewal time'}
                                // dateFormat="MM/DD/YYYY" 
                                /> */}
                            {/* <Date
                                selected={ this.state.startDate }
                                onChange={ this.handleChange }
                                name={'startDate'}
                                showTimeSelect
                                // value={this.state.newUser.subCreationTime}
                                placeholder= {'enter yor subcreation time'}
                                dateFormat="MM/DD/YYYY" 
                                /> */}

                            <Button 
                                action = {this.handleFormSubmit}
                                type = {'primary'} 
                                title = {'Submit'} 
                                style={buttonStyle}
                            /> { /*Submit */ }
                
                            <Button 
                                action = {this.handleClearForm}
                                type = {'secondary'}
                                title = {'Clear'}
                                style={buttonStyle}
                            />
                        </form>
                    </div>
                    // </form>
                // </div>
            );
        }
}

const buttonStyle = {
    margin : '10px 10px 10px 10px'
  }

export default FormUser