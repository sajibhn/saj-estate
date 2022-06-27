import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <>
            <section className="page_404">
                <div className="container">

                    <div className="four_zero_four_bg">
                        <h1>404</h1>


                    </div>

                    <div className="contant_box_404">
                        <h3>
                            Look like you are lost
                        </h3>

                        <p>the page you are looking for not avaible!</p>

                        <Link href="/">
                            <a className='btn btn__blue'>Go to Home</a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound