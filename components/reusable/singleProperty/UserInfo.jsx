import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs'

const UserInfo = () => {
    return (
        <div className="user__info">
            <h3>Seller</h3>
            <img src="https://wpresidence.net/wp-content/uploads/2021/08/team3-e1629289062721.jpeg" alt="" />
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