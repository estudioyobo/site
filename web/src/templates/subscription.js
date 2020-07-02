import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Product from '../components/product'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import SectionHeader from '../components/SectionHeader'
import SubscriptionCard from '../components/subscription-card'

export const query = graphql`
  query PlanTemplateQuery($id: String!) {
    plan: stripePlan(id: { eq: $id }) {
      id
      amount
      amount_decimal
      interval
      interval_count
      nickname
      currency
    }
  }
`

const SubscriptionTemplate = props => {
  const { data, errors } = props
  const plan = data && data.plan

  return (
    <Layout showNav>
      {errors && <SEO title="GraphQL Error" />}
      {plan && <SEO title={plan.nickname || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <SectionHeader title="suscripción" dividerColor="#56EF98" />
      <div style={{ padding: '3rem 0', display: 'flex', justifyContent: 'center' }}>
        {plan && <SubscriptionCard plan={plan} />}
      </div>
    </Layout>
  )
}

export default SubscriptionTemplate
