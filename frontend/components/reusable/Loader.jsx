import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className="loader">
            <TailSpin ariaLabel="loading-indicator" width={100} height={100} color='#0268c7' />
        </div>
    )
}

export default Loader