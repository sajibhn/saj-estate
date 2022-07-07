import React from 'react'
import Link from 'next/link'
import { HomeState } from '../../data/HomeContext'
import Loader from '../reusable/Loader'
const Cta = () => {
    const { loading, error, data } = HomeState()
    if (loading) return <Loader />
    if (error) return <p>There is an error</p>
    const { cta_title, cta_description } = data.home.data.attributes;
    return (
        <section className="section cta">
            <div className="cta__container container">
                <div className="cta__text">
                    <h2>{cta_title}</h2>
                    <p>{cta_description}</p>
                </div>
                <cta className="cta__btn">
                    <Link href='/contact'>
                        <a className='btn btn-white'>Contact</a>
                    </Link>
                </cta>
            </div>
        </section>
    )
}

export default Cta