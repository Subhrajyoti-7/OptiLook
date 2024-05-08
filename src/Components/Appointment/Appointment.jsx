import React from "react";
import "./Appointment.css";
import { Link } from "react-router-dom";

const Clear = () =>{
  document.getElementsByClassName("form-body").reset();
}
const Appointmnet = () => {
  return (
    <div className="body">
      <div className="inner-layer">
        <div className="container">
          <div className="row no-margin">
            <div className="col-sm-7">
              <div className="content">
                <h1>Book your time slot now and save your time</h1>
                <p>
                  Schedule your comprehensive eye exam today to ensure optimal
                  vision health. Our experienced ophthalmologists provide
                  personalized care tailored to your unique needs, fostering
                  clear sight and eye wellness.
                </p>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-data form-style">
                <div className="form-head">
                  <h2>Book Appointment</h2>
                </div>
                <form className="form-body">
                  <div className="row form-row">
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="form-control"
                    />
                  </div>

                  <div className="row form-row">
                    <input
                      type="text"
                      placeholder="Enter Mobile number"
                      className="form-control"
                    />
                  </div>

                  <div className="row form-row">
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="form-control"
                    />
                  </div>
                  
                  <div className="row form-row">
                  <label>
                  <input type="checkbox" name="gender" value="male" className=""/>
                   &nbsp;
                    Male
                    &nbsp; &nbsp; &nbsp;
                    <input type="checkbox" name="gender" value="female" className=""/>
                    &nbsp;
                    Female

                    &nbsp; &nbsp; &nbsp;
                    <input type="checkbox" name="gender" value="other" className=""/>
                    &nbsp;
                    Other

                  </label>

                  
                  </div>
                   
                  
                  <div className="row form-row">
                    <input
                      type="date"
                      placeholder="Appointment date"
                      className="form-control"
                    />
                  </div>

                  <h6>Address Details</h6>

                  <div className="row form-row">
                    <div className="col-sm-6 address-col">
                      <input
                        type="text"
                        placeholder="Enter Area"
                        className="form-control"
                      />
                    </div>

                    <div className="col-sm-6">
                      <input
                        type="text"
                        placeholder="Enter city"
                        className="form-control"
                      />
                    </div>

                    <div className="col-sm-6">
                      <input
                        type="text"
                        placeholder="Enter State"
                        className="form-control"
                      />
                    </div>

                    <div className="col-sm-6">
                      <input
                        type="text"
                        placeholder="Enter Postal code"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row form-row">
                    <button className="btn btn-success btn-appointment" onClick={Clear}>
                      Book appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointmnet;
