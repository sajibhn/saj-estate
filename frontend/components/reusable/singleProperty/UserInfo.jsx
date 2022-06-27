import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs'
import Image from 'next/image'

const UserInfo = () => {
    return (
        <div className="user__info">
            <h3>Seller</h3>
            <Image src="/seller.jpeg" alt="seller image" width={50} height={50} />
            <h4>John Doe</h4>
            <div className="user__social">
                <div>
                    <span>
                        <FaMapMarkerAlt />
                    </span>
                    <span>
                        194 Mercer Street
                    </span>
                </div>
                <div>
                    <span>
                        <BsTelephoneFill />
                    </span>
                    <span>
                        +880178265843368
                    </span>
                </div>
                <div>
                    <span>
                        <BsFillEnvelopeFill />
                    </span>
                    <span>
                        example@email.com
                    </span>
                </div>
            </div>
        </div>
    )
}

export default UserInfo