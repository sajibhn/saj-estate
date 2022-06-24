import React from 'react'
import ContactDetails from '../../components/contact/ContactDetails'
import ContactForm from '../../components/contact/ContactForm'
import PageTitle from '../../components/reusable/PageTitle'

const Contact = () => {
    return (
        <>
            <PageTitle title="contact" />
            <section className="section contact">
                <div className="contact__container container">
                    <ContactForm />
                    <ContactDetails />
                </div>
            </section>
        </>
    )
}

export default Contact