import React from 'react'
import styled from 'styled-components'
import { imageUrlFor } from '../../lib/image-url'
import { buildImageObj } from '../../lib/helpers'

const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Img = styled.img`
  max-height: 10rem;
  max-width: 100%;
`

const Company = ({ name, icon, link }) => {
  const logo = imageUrlFor(buildImageObj(icon)).url()
  return (
    <CompanyWrapper>
      {link ? (
        <a href={link}>
          <Img src={logo} alt={name} />
        </a>
      ) : (
        <Img src={logo} />
      )}
    </CompanyWrapper>
  )
}

export default Company
