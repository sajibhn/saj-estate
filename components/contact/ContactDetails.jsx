import React from "react";

const ContactDetails = () => {
    return (
        <div className="contact__details">
            <div className="contact__details__container">
                <div className="contact__details__one">
                    <h4>For inquiries contact</h4>
                    <div className="person__info">
                        <h4>Amy Miller</h4>
                        <p>Public Relations Manager 774 NE 84th St Miami, FL 33879</p>
                        <p>amy.miller@houzez.com</p>
                    </div>
                    <div className="person__info">
                        <h4>Amy Miller</h4>
                        <p>Public Relations Manager 774 NE 84th St Miami, FL 33879</p>
                        <p>amy.miller@houzez.com</p>
                    </div>
                </div>
                <div className="contact__details__two">
                    <div className="person__info">
                        <h4>Corporate Headquarters</h4>
                        <p>1584 Biscayne Boulevard Miami FL, 33176</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
