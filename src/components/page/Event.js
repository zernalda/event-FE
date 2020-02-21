import React, { Component } from 'react'
// import { Link, Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ListEvent from './ListEvent';
import NewEvent from './NewEvent'

class Event extends Component {
    render() {
        return (
            // <nav className="navbar navbar-default">
                <div className="container wrapper">
                    <Router>
                        <div className="row">
                            <div className="col-lg-10  text-center">
                                <div class="row nav-container">
                                    <div class="col-lg-3"><Link to={"NewEvent"}>Create New Event</Link></div>
                                    <div class="col-lg-3"><Link to={"ListEvent"}>List of Event</Link></div>                                </div>
                            </div>
                            <Route path="/newEvent" component={NewEvent} />
                            <Route exact path="/listEvent" component={ListEvent} />
                        </div>
                    </Router>
                </div>
            // </nav>
        );
    }
}

export default Event