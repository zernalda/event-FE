import React from 'react';
// import '../inc/styles.css';
 
export const FormErrors = ({formErrors}) =>
   <div className='formErrors'>
       {Object.keys(formErrors).map((fieldName, i) => {
           if(formErrors[fieldName].length > 0) {
               return(
                   <p key={i} className="errText">{fieldName} {formErrors[fieldName]}</p>
               )
           } else {
               return '';
           }
       })}
   </div>

