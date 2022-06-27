import React from 'react'
import ContactDetails from '../../components/contact/ContactDetails'
import ContactForm from '../../components/contact/ContactForm'
import PageTitle from '../../components/reusable/PageTitle'
import ContactContext from '../../data/ContactContext'

const Contact = () => {
    return (
        <>
            <ContactContext>
                <PageTitle title="contact" />
                <section className="section contact">
                    <div className="contact__container container">
                        <ContactForm />
                        <ContactDetails />
                    </div>
                </section>
            </ContactContext>

        </>
    )
}

export default Contact