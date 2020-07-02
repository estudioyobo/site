import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import SubscriptionCard from './subscription-card'
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
        query Plans {
          plans: allStripePlan {
            nodes {
              id
              amount
              currency
              interval
              interval_count
              nickname
            }
          }
        }
      `}
      render={({ plans }) => (
        <div>
          <SectionHeader title="suscripciones" dividerColor="#56EF98" />
          <Grid>
            {plans.nodes.map(node => (
              <SubscriptionCard key={node.id} plan={node} />
            ))}
          </Grid>
        </div>
      )}
    />
  )
}
