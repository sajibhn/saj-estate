import Image from 'next/image'
import React from 'react'
import { MdBed } from 'react-icons/md'
import { FaShower } from 'react-icons/fa'
import { BsArrowsFullscreen } from 'react-icons/bs'

const ListingCard = () => {
    return (
        <div className="listing__card__container">
            <div className="listing__card">
                <div className="listing__card__head">
                    <img src='https://wpresidence.net/wp-content/uploads/2017/11/house_nice_2-525x328.jpg' />
                </div>
                <div className="listing__card__body">
                    <p>194 Mercer Street, 627 Broadway, New York, NY 10012, USA</p>
                    <h3>Luxury House in Greenville</h3>
                    <span className='price'>$ 86,000</span>
                    <p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val ...</p>
                    <div className="listing__card__info">
                        <div>
                            <span><MdBed /></span>
                            <span>5</span>
                        </div>
                        <div>
                            <FaShower />
                            <span>5</span>
                        </div>
                        <div>
                            <BsArrowsFullscreen />
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listing__card">
                <div className="listing__card__head">
                    <img src='https://wpresidence.net/wp-content/uploads/2017/11/house_nice_2-525x328.jpg' />
                </div>
                <div className="listing__card__body">
                    <p>194 Mercer Street, 627 Broadway, New York, NY 10012, USA</p>
                    <h3>Luxury House in Greenville</h3>
                    <span className='price'>$ 86,000</span>
                    <p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val ...</p>
                    <div className="listing__card__info">
                        <div>
                            <span><MdBed /></span>
                            <span>5</span>
                        </div>
                        <div>
                            <FaShower />
                            <span>5</span>
                        </div>
                        <div>
                            <BsArrowsFullscreen />
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listing__card">
                <div className="listing__card__head">
                    <img src='https://wpresidence.net/wp-content/uploads/2017/11/house_nice_2-525x328.jpg' />
                </div>
                <div className="listing__card__body">
                    <p>194 Mercer Street, 627 Broadway, New York, NY 10012, USA</p>
                    <h3>Luxury House in Greenville</h3>
                    <span className='price'>$ 86,000</span>
                    <p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val ...</p>
                    <div className="listing__card__info">
                        <div>
                            <span><MdBed /></span>
                            <span>5</span>
                        </div>
                        <div>
                            <FaShower />
                            <span>5</span>
                        </div>
                        <div>
                            <BsArrowsFullscreen />
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listing__card">
                <div className="listing__card__head">
                    <img src='https://wpresidence.net/wp-content/uploads/2017/11/house_nice_2-525x328.jpg' />
                </div>
                <div className="listing__card__body">
                    <p>194 Mercer Street, 627 Broadway, New York, NY 10012, USA</p>
                    <h3>Luxury House in Greenville</h3>
                    <span className='price'>$ 86,000</span>
                    <p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val ...</p>
                    <div className="listing__card__info">
                        <div>
                            <span><MdBed /></span>
                            <span>5</span>
                        </div>
                        <div>
                            <FaShower />
                            <span>5</span>
                        </div>
                        <div>
                            <BsArrowsFullscreen />
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingCard