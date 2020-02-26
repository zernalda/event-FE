import React, { Component } from 'react'
// import { Link, Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Detail from '../page/Detail'
import EditEvent from '../page/EditEvent'
import SearchField from "react-search-field"

class ListEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            // isListId: false
        }
      }

      componentDidMount() {
        fetch('http://localhost:3001/listevents')
        .then(res => res.json())
        .then((data) => {
          this.setState({ 
            resStatus: data.status,
            events: data.values })
        })
        .catch(
          
          )
      }

    //   handleDetail(list) {
    //     console.log(list)
    //     localStorage.setItem(
    //         'list',
    //         JSON.stringify(list)
    //     );
    //     // console.log(list);
    //     // alert("redirect to DetailCustomer");
    //     if (list.id == null) {
    //         alert("data not found")
    //     } else {
    //         console.log("masuk sini");
    //         this.setState ({
    //             // isListId: true, 
    //             detailCustomer:list
    //         });
    //         return true
    //     }
    // } 

    render() {
        let objects = this.state.events
        console.log("events = ");
        console.log(objects);
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
                            {objects.map((list) => (
                            <tbody>
                                <tr>
                                    <td>{list.id}</td>
                                    <td>{list.name}</td>
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
                            ))}
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