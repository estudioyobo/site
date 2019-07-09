import React from 'react'
import styled from 'styled-components'
import { imageUrlFor } from '../lib/image-url'
import { buildImageObj } from '../lib/helpers'

const Icon = styled.img`
  width: 35px;
  margin: 0 10px;
  ${({ invert }) => invert && 'filter: invert(1);'};
`

const Social = ({ name, icon, link, invert }) => {
  return (
    <div className='social'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <Icon
          invert={invert}
          src={imageUrlFor(buildImageObj(icon))
            .width(35)
            .height(35)
            .url()}
          alt={`${name} icon`}
        />
      </a>
    </div>
  )
}

export default Social
