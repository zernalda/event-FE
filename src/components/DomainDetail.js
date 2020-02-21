import React, { Component } from 'react';

class DomainDetail extends Component {
    constructor() {
        super();
        this.state = {domains: []}
      }
      
      componentDidMount() {
        fetch('http://localhost:3001/domains')
        .then(res => res.json())
        .then((data) => {
          this.setState({ 
            retStatus: data.status,
            domains: data.values })
        })
        .catch(
          
          )
      }
    
      render() {
        var objects = this.state.domains;
        console.log(objects.length);
        return (
          <div className="container"> 
            <h1>Already use pointstar partnership</h1>
            <div className="card">
               <div className="card-body">
                 <h3>Partner Name & Domain: </h3>
                  { objects.map((list) => (
                    <ul key={list.id}>
                      <li>{list.id}</li>
                      <li>{list.partner_name}</li>
                      <li>{list.partner_domain_name}</li>
                    </ul>
                  )) }
              </div>
             </div>
          </div>
       )
    }
}

export default DomainDetail