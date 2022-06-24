import React from 'react'

const ContactForm = () => {
    return (
        <div className="contact__form">
            <p>
                Design your custom contact forms with this Houzez Elementor custom widget and connect your leads with the integrated Houzez CRM.
            </p>

            <form className='form'>
                <div className="form__inputs" >
                    <div>
                        <label className='form__label'>First Name</label>
                        <input type="text" className="form__input" />
                    </div>
                    <div>
                        <label className='form__label'>Last Name</label>
                        <input type="text" className="form__input" />
                    </div>
                </div>

                <div>
                    <label className='form__label'>Email Name</label>
                    <input type="email" className="form__input" />
                </div>

                <div>
                    <label className='form__label'>Message</label>
                    <textarea type="text" rows='8' className="form__input" />
                </div>

                <div>
                    <input type="submit" value="submit" className='btn btn__blue btn__input' />
                </div>
            </form>
        </div>
    )
}

export default ContactForm