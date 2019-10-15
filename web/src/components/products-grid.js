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
            {skus.edges.map(({ node: sku }) => (
              <ProductCard key={sku.id} sku={sku} />
            ))}
          </Grid>
        </div>
      )}
    />
  )
}
