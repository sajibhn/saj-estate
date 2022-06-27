import React from 'react'

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Get daily update with us!</p>
            <form>
                <div className='newsletter__inputs'>
                    <input type="email" required placeholder="Enter your email address" className='newsletter__input' />
                    <button className='btn btn__blue newsletter__btn'>Subscribe</button>
                </div>
            </form>
        </div>
    )
}

export default NewsLetter