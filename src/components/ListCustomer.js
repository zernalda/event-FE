import React, { Component } from 'react'
// import Table from './commons/Table'
import Button from './commons/Button'
import ListCustomerDetail from './ListCustomerDetail'
// import { Redirect } from 'react-router-dom';

export class ListCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            isListId: false
        }
      }

      componentDidMount() {
        fetch('http://localhost:3001/customers')
        .then(res => res.json())
        .then((data) => {
          this.setState({ 
            retStatus: data.status,
            customers: data.values })
        })
        .catch(
          
          )
      }

      handleDetail(list) {
        console.log(list)
        localStorage.setItem(
            'list',
            JSON.stringify(list)
        );
        console.log(list);
        // alert("redirect to DetailCustomer");
        if (list.id == null) {
            alert("data not found")
        } else {
            console.log("masuk sini");
            this.setState ({
                isListId: true, 
                detailCustomer:list
            });
            return true
        }
    }  

    render() {
        let objects = this.state.customers;
        if (this.state.isListId == true) {
            console.log("masuk detailCustomer");
            console.log(this.state.detailCustomer);
            return <ListCustomerDetail />
        } else {
            return (
                <div className="container content-wrapper">
                    <div className="row">
                        {objects.map((list) => (
                            <div className="col-lg-3" key={list.id}>
                                <div class="card customer-list">
                                    <div class="card-body">
                                        <h5 class="card-title">{list.organizationName}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">{list.customerDomain}</h6>
                                        <p class="card-text">{list.planName}</p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                        <Button 
                                                action = {this.handleDetail.bind(this, list)}
                                                type = {'secondary'}
                                                title = {'DETAILS'}
                                                id = 'showDetail'
                                        />
                                    </div>
                                </div>
                        </div>
                            
                        ))}
                        
                    </div>
                    
                    {/*<div className="card">
                        <table class="table table-bordered">
                            
                            <tbody>
                            { objects.map((list) => (
                                <tr key={list.id}>
                                    <td>{list.customerDomain}</td>
                                    <td>{list.organizationName}</td>
                                    <td>{list.planName}</td>
                                    <td>
                                        <Button 
                                            action = {this.handleDetail.bind(this, list)}
                                            type = {'secondary'}
                                            title = {'DETAILS'}
                                            id = 'showDetail'
                                        />
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>*/}
                </div>
            )
        }
        // console.log(this.state.customers);
        
    }
}

export default ListCustomer
