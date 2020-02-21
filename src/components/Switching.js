import React, { Component } from 'react'
// import { Link, Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Domain from './Domain';
import FormUser from './FormUser';
import Button from './commons/Button';
// import DomainDetail from './DomainDetail'
import GcpDomain from './GcpDomain'
import ListCustomer from './ListCustomer'

class Switching extends Component {
    
    handleLogout(e) {
        localStorage.clear();
        window.location.href = '/login';
    }

    render() {
        return (
            // <nav className="navbar navbar-default">
                <div className="container wrapper">
                    <Router>
                        <div className="row">
                            <div className="col-lg-10  text-center">
                                <div class="row nav-container">
                                    <div class="col-lg-3"><Link to={"GcpDomain"}>Check Gsuite Domain</Link></div>
                                    <div class="col-lg-3"><Link to={"Domain"}>Check Domain</Link></div>
                                    <div class="col-lg-3"><Link to={"FormUser"}>Form User</Link></div>
                                    <div class="col-lg-3"><Link to={"ListCustomer"}>List of Customer</Link></div>
                                     {/* <li><Link to={"DomainDetail"}>Domain Registered</Link></li> */}
                                </div>
                            </div>
                            <div className="col-md-2  text-center">
                                <Button 
                                    action = {this.handleLogout}
                                    type = {'secondary'}
                                    title = {'Log Out'}
                                    />
                            </div>
                            <Route path="/gcpDomain" component={GcpDomain} />
                            <Route exact path="/domain" component={Domain} />
                            <Route path="/formUser" component={FormUser} />
                            {/* <Route path="/domainDetail" component={DomainDetail} /> */}
                            <Route path="/listCustomer" component={ListCustomer}/>
                        </div>
                    </Router>
                </div>
            // </nav>
        );
    }
}

export default Switching