import React from 'react'

export default function Alert(props) {
    // const capitalize=(word)=>{
    //     const lower= word.toLoowerCase();
    //     return lower.charAt(0).toUpperCase()+lower.slice(1);
    // }
  return (
     props.alert && <div className={`alert alert-${props.alert.title} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.title}</strong> {props.alert.message}
  </div>
  )
}
