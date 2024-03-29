import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="containerNew">
    <h2 style={{ textAlign:"center"}}>Contact Us</h2>
    <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
</div>
);
}

function handleSubmit(e) {
e.preventDefault();
console.log('Form submitted!');
}
  
export default Contact