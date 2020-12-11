import React from 'react'
import styled from 'styled-components'
import { imageUrlFor } from '../lib/image-url'
import { buildImageObj } from '../lib/helpers'

const Icon = styled.img`
  width: 35px;
  margin: 0 10px;
`

const Social = ({ name, icon, link }) => {
  return (
    <div className="social">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Icon
          src={imageUrlFor(buildImageObj(icon)).width(35).height(35).url()}
          alt={`${name} icon`}
        />
      </a>
    </div>
  )
}

export default Social
