import React from "react";
import { HomeState } from "../../data/HomeContext";

const ProcessCard = () => {
    const { loading, error, data } = HomeState()
    if (loading) return <p>Loading</p>
    if (error) return <p>There is an error</p>
    return (
        <div className="process__card__container">

            {
                data.processcards.data.map((card, index) => {
                    const { number, title, description } = card.attributes
                    return (
                        <>
                            <div className="process__card" key={index}>
                                <span>{number}</span>
                                <h3>{title}</h3>
                                <p>
                                    {description}
                                </p>
                            </div>
                        </>
                    )
                })
            }
        </div >
    );
};

export default ProcessCard;
