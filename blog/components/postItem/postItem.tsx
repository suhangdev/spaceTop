import React from 'react'
import Card from '../card/card'

import './postItem.less'

const PostItem: React.FunctionComponent<{data: any}> = ({data}) => {
    return(
        <Card>
            {data}
        </Card>
    )
}

export default PostItem
