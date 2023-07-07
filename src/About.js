import React from 'react';
import './image1.css';

function About() {
  return (
    <div className="container">
      <div className="left-text">
        <h1 style={{color:" rgb(104, 247, 104)"}}>About Us</h1>
        <h2>Empowering Community Through Sustainable Solution -About Sarvmatre</h2>
        <p>
          At Fliar, we are on a mission to empower small and medium-scale local businesses to compete with global high-tech autonomous entities. Our cutting-edge technology is accessible to all, which means you don't need to be a tech guru or have deep pockets to succeed.
        </p>
      </div>
      <div className="right-image">
        <img src="https://img.freepik.com/premium-vector/office-workers-sitting-round-table-discussing-ideas-exchanging-information-work-meeting-business-negotiation-conference-group-discussion-cartoon-vector-illustration-flat-style_198278-13499.jpg?w=740" alt="Vector" />
      </div>
    </div>
  );
}

export default About;
