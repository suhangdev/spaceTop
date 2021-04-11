import React, { useState } from 'react'
import Card from '../card/card'

import './linkCard.less'

interface Link {
  url: string
  name: string
  tag: string
}

const LinkCard: React.FunctionComponent = () => {
  const [links] = useState<Link[]>([
    {
      url: 'https://juejin.im/user/5ae916bc6fb9a07ac36343f7',
      name: '掘金',
      tag: 'juejin.im'
    }
  ])
  return (
    <Card>
      <div className="link">
        Links
            </div>
      {
        links.map((link) => (
          <a className="link-item" href={link.url} target="_blank" key={link.url}>
            <span>{link.name}</span>
            <span>{link.tag}</span>
          </a>
        ))
      }
    </Card>
  )
}

export default LinkCard