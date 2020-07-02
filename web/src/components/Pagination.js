import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    color: var(--color-black);
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-size: 1.25rem;
    &:hover {
      font-weight: bold;
    }
  }
`

const Pagination = ({ currentPage, numPages, path }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? path : `${path}/${(currentPage - 1).toString()}`
  const nextPage = `${path}/${(currentPage + 1).toString()}`
  return (
    <Container>
      {!isFirst ? (
        <Link to={prevPage} rel="prev">
          ← Página anterior
        </Link>
      ) : (
        <span />
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Página siguiente →
        </Link>
      )}
    </Container>
  )
}

export default Pagination
