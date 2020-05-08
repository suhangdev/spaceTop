import React from 'react'
import './card.less'

const Card: React.FunctionComponent<{hover?: boolean}> = ({hover, children}) => {
    return (
        <div className={`card ${hover ? 'cardhover' : ''}`}>
            {children}
        </div>
    )
}

export default Card