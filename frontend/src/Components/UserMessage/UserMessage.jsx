import React from 'react'
//import ContactUs from '../ContactUs/ContactUs'
function UserMessage(props) {
    const data = props.data;
  return (
    <div>
      <h2>Submitted Information:</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Message: {data.message}</p>
    </div>
  )
}

export default UserMessage