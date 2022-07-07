import Image from 'next/image'
import React, { useState } from 'react'
import { MdBed } from 'react-icons/md'
import { FaShower } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import Link from 'next/link'
import Loader from './Loader'

const ListingCard = ({ data, simplified, loading }) => {
    const [listingDatas, setListingData] = useState(data?.listings?.data)
    const [active, setActive] = useState('')
    const count = simplified ? 3 : listingDatas?.listings?.data?.length
    const ForSell = (e) => {
        const forSell = data?.listings?.data?.filter((item) => item.attributes.type.toLowerCase() === 'for sale')
        setListingData(forSell)
        setActive(e.target.id);
    }
    const ForRent = (e) => {
        const forSale = data?.listings?.data?.filter((item) => item.attributes.type.toLowerCase() === 'for rent')
        setListingData(forSale)
        setActive(e.target.id);
    }

    const All = (e) => {
        setListingData(data?.listings?.data)
        setActive(e.target.id);
    }

    if (loading) return <Loader />
    return (
        <>
            {!simplified && <>
                <div className="filter">
                    <div className="filter__buttons">
                        <button key={1} className={active === '1' ? 'filter_active' : undefined} id={'1'} onClick={All}>all</button>
                        <button key={2} className={active === '2' ? 'filter_active' : undefined} id={'2'} onClick={ForSell}>for sell</button>
                        <button key={3} className={active === '3' ? 'filter_active' : undefined} id={'3'} onClick={ForRent}>for rent</button>
                    </div>
                </div>
            </>}
            <div className="listing__card__container">

                {
                    listingDatas?.slice(0, count).map((item, index) => {
                        const { title, location, price, description, bedrooms, bathrooms, garage } = item.attributes
                        const fImage = item.attributes.featured_image.data[0].attributes.url
                        return (
                            <>
                                <Link href={`/property/${index}`}>
                                    <div className="listing__card" key={index}>
                                        <div className="listing__card__head">
                                            <Image src={fImage} width={320} height={214} alt="listing img" />
                                        </div>
                                        <div className="listing__card__body">
                                            <p>{location}</p>
                                            <h3>{title}</h3>
                                            <span className='price'>$ {price}</span>
                                            <p>{description?.substring(0, 75)} ...</p>
                                            <div className="listing__card__info">
                                                <div>
                                                    <span><MdBed /></span>
                                                    <span>{bedrooms}</span>
                                                </div>
                                                <div>
                                                    <FaShower />
                                                    <span>{bathrooms}</span>
                                                </div>
                                                <div>
                                                    <AiFillCar />
                                                    <span>{garage}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ListingCard