import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your code to handle the form submission here
    console.log('Form submitted:', this.state);
    // You can send the form data to an API, store it in a database, or perform any other actions as needed
    // Reset the form fields
    this.setState({ name: '', email: '', message: '' });
  };

  render() {
    return (
      <div className="contact-us">
        <h1>Contact Us</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PmwXg2uFFJll99mtnm75mfNBeXj3GAWcow&usqp=CAU" alt="Contact Us" className="contact-image" />
      </div>
    );
  }
}

export default Contact;
