import React from "react";
import "./Contactform.css";

const contact = () => {
  return (
    <div className="container-fluid contact-form d-flex justify-content-center align-items-center mt-5 ">
      <div className="contact-image img-fluid">
        <img
          src="https://www.shutterstock.com/image-vector/woman-turns-support-service-customer-600nw-1986378524.jpg"
          alt="contact "
        />
      </div>
      <form method="post">
        <h3>Drop Us a Message</h3>
        <div className="row">
          <div className="col-md-6 flex-column">
            <div className="form-group">
              <input
                type="text"
                name="txtName"
                className="form-control"
                placeholder="Your Name *"
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="txtEmail"
                className="form-control"
                placeholder="Your Email *"
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="txtPhone"
                className="form-control"
                placeholder="Your Phone Number *"
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact"
                defaultValue="Send Message"
              />
            </div>
            <div className="form-group">
              <textarea
                name="txtMsg"
                className="form-control"
                placeholder="Your Message *"
                style={{ width: "100%", height: 150 }}
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </form>
    </div>
  );
};

export default contact;
