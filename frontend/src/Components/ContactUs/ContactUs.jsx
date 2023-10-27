import React, { useState }  from "react";
import "./ContactUs.css"
import UserMessage from "../UserMessage/UserMessage";


function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // State to track form submission
  const [isSubmitted, setIsSubmitted] = useState(false);


  // const handleFormSubmit = (data) => {
  //   setFormData(data);
  // };
  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
<div id="ContactUs_container">
   <form onSubmit={handleSubmit}>
   <input type="text" name="name" value={formData.name} onChange={handleInputChange}
   required placeholder="Name"/>
   <input type="email"  name="email" value={formData.email} onChange={handleInputChange}
   required placeholder="Email"/>
   <textarea name="message" id="" rows="4" value={formData.message}
   onChange={handleInputChange}
   required placeholder="Message" />
   <button type="submit">Submit</button>
   </form>
    {isSubmitted && (
      <UserMessage data={formData}/>
   )}
    </div>
  );
  
      
  // <div>
  //         <h2>Submitted Information:</h2>
  //         <p>Name: {formData.name}</p>
  //         <p>Email: {formData.email}</p>
  //         <p>Message: {formData.message}</p>
  //       </div>

  
}

export default ContactUs;