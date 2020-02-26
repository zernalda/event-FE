import React from 'react'

const Textarea = (props) => {
  return (  
  // <div className="form-group">
  //   <label htmlFor={props.name} className="form-label">{props.title}</label>
    <textarea
      // className="form-input"
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
      style={{padding: "5px"}}
    />
  // </div>
  )
}

export default Textarea;