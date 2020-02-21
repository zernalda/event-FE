import React, { Component } from 'react'
import Button from './commons/Button'

export class ListCustomerDetail extends Component {
    componentWillMount(){
        let list = '';
        if (localStorage && localStorage.getItem('list')) {
           list = JSON.parse(localStorage.getItem('list'));
          }
         this.setState({list: list})
    }

    goBack(){
        window.history.go(-1);
    }
    
    render() {
        console.log("render list id");
        console.log(this.state.list);
        let objects = this.state.list;
        // objects = this.state.list.length;
        console.log(objects);

        return (
            
            <div>
                 {/* <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td>Domain Name</td>
                        </tr>
                    </thead>
                    
                    <tbody>
                    { 
                        <tr key={objects.id}>
                            <td>{objects.customerDomain}</td>
                            <td></td>
                        </tr>
                        }
                    </tbody>
                </table> */}
                <h1>Detail List of customer</h1>
                <div className="container">
                    <div className="card">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                <th>ID</th>
                                    <td>{objects.id}</td>
                                    <td>
                                        <Button 
                                            type = {'secondary'}
                                            title = {'EDIT'}
                                            />
                                    </td>
                                    <td>
                                    <Button 
                                            type = {'secondary'}
                                            title = {'BACK'}
                                            action = {this.goBack}
                                            />
                                    </td>

                                </tr>
                                <tr>
                                <th>Domain</th>
                                    <td>{objects.customerDomain}</td>
                                </tr>
                                <tr>
                                <th>Customer ID</th>
                                    <td>{objects.customerId}</td>
                                </tr>
                                <tr>
                                <th>Organization Name</th>
                                    <td>{objects.organizationName}</td>
                                </tr>
                                <tr>
                                <th>PIC Alternate Email</th>
                                    <td>{objects.picAlternateEmail}</td>
                                </tr>
                                <tr>
                                <th>Plan Name</th>
                                    <td>{objects.planName}</td>
                                </tr>
                                <tr>
                                <th>Status</th>
                                    <td>{objects.status}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListCustomerDetail
