import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import ProductCard from './product-card'
import SectionHeader from './SectionHeader'

const Grid = styled.div`
  display: grid;
  max-width: 960px;
  margin: 5rem auto;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media (max-width: 960px) {
    padding: 1rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query SkusForProduct {
          skus: allStripeSku {
            edges {
              node {
                id
                currency
                price
                image
                product {
                  name
                }
              }
            }
          }
        }
      `}
      render={({ skus }) => (
        <div>
          <SectionHeader title='shop' dividerColor='#56EF98' />
          <Grid>
            {skus.edges
              .filter(sku => sku.node.image)
              .map(({ node }) => (
                <ProductCard key={node.id} sku={node} />
              ))}
          </Grid>
        </div>
      )}
    />
  )
}
