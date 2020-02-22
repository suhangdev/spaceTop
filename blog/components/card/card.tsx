import { NextComponentType } from 'next'
import './card.less'

const Card: NextComponentType = (props: any) => {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

export default Card