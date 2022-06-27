import React from "react";
import { ContactState } from "../../data/ContactContext";

const ContactDetails = () => {
    const { loading, error, data } = ContactState()
    if (loading) return <p>Loading ...</p>
    if (error) return <p>there is a error</p>
    return (
        <div className="contact__details">
            <div className="contact__details__container">
                <div className="contact__details__one">
                    <h4>For inquiries contact</h4>

                    {data.contactLists.data.map((item) => {
                        const { name, location, email } = item.attributes
                        return (
                            <>
                                <div className="person__info" key={item.id}>
                                    <h4>{name}</h4>
                                    <p>{location}</p>
                                    <p>{email}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="contact__details__two">
                    <div className="person__info">
                        <h4>Corporate Headquarters</h4>
                        <p>{data.contact.data.attributes.head_q_location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
