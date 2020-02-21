import React, { Component } from 'react'
// import { Link, Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Detail from '../page/Detail'
import EditEvent from '../page/EditEvent'
import SearchField from "react-search-field"

class ListEvent extends Component {
    render() {
        return (
            // <nav className="navbar navbar-default">
            <div>
                <Router>
                    <div className="container wrapper">
                        <h1>LIST EVENT</h1>
                        <SearchField
                            placeholder="Search event name"
                            // onChange={onChange}
                            // searchText="This is initial search text"
                            classNames="test-class"
                        />
                        <br />
                        <table style={{"border": "1px solid white"}}>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Event Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Tawuran antar warga se-Jakarta</td>
                                    <tr>
                                        <td>
                                            <button >
                                                <Link to={"Detail"}> Detail</Link>
                                            </button>
                                        </td>
                                        <td>
                                            <button >
                                                <Link to={"EditEvent"}> Edit</Link>
                                            </button>
                                        </td>
                                        <td>
                                            <button >
                                                delete
                                            </button>
                                        </td>
                                    </tr>
                                </tr>
                            </tbody>
                        </table>  
                        <br />
                        <Route path="/detail" component={Detail} />
                        <Route path="/edit" component={EditEvent} />    
                    </div>           
                </Router>
            </div>
            // {/* </nav> */}
        );
    }
}

export default ListEvent