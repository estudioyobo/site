import React, { useState } from 'react'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import SectionHeader from './SectionHeader'
import AnimatedInput from './AnimatedInput/index'

const NewsletterStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr minmax(0, 1fr);
`

export const Button = styled.button`
  grid-row: 3;
  background: #56ef98;
  color: white;
  grid-column: 1/-1;
  width: 100%;
  text-transform: uppercase;
  font-size: ${({small}) =>small ? "1.1rem" : "1.5rem"};
  font-weight: 600;
  padding: ${({small}) =>small ? ".6rem" : "1rem"};
  @media (max-width: 600px) {
    grid-row: 4;
  }
`

const Form = styled.div`
  grid-row: 2;
  grid-column: 1;
  padding: 1rem;
  @media (max-width: 600px) {
    grid-column: 1 / 3;
    grid-row: 3;
  }
  `

const Text = styled.h2`
  grid-row: 1;
  grid-column: 1;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  @media (max-width: 600px) {
    grid-row: 1;
    grid-column: 1 / 3;
  }
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  grid-row: 1 / 3;
  grid-column: 2;
  @media (max-width: 600px) {
    grid-row: 2;
    grid-column: 1 / 3;
    width: 30%;
    justify-self: center;
  }
`

const Test = styled.div`
  width: 100%;
`

const HandleSubscribed = ({ result, msg }) => {
  if (result === 'error') {
    return msg
  } else if (result === 'success') {
    return (
      <div>
        <h1>Suscrito!</h1>
        <p>{msg}</p>
      </div>
    )
  } else {
    return ''
  }
}

const Newsletter = ({ title, subtitle, image, path, dark }) => {
  const [subscribed, setSubscribed] = useState(null)
  async function subscribe (e) {
    e.preventDefault()
    let final = {}
    e.target.querySelectorAll('input').forEach(input => {
      final[input.name] = input.value
    })
    const { mail, ...rest } = final
    // Mailchimp API return:
    // {
    //   result: string; "success|error"
    //   msg: string; "thanks for subscribing! | this email has already been added"
    // }
    const result = await addToMailchimp(final.mail, { ...rest, PATH: path })
    setSubscribed(result)
  }
  if (subscribed) {
    return <HandleSubscribed {...subscribed} />
  } else {
    return (
      <Test>
        <SectionHeader
          title={title}
          dividerColor="#56EF98"
          styles={{
            title: { fontSize: '2rem', margin: '0.67em 0' },
            container: { margin: 0, padding: 0 }
          }}
        />
        <NewsletterStyled onSubmit={subscribe}>
          {subtitle && <Text>{subtitle}</Text>}
          <Form>
            <AnimatedInput
              required
              name="FNAME"
              label="nombre"
              dark={dark}
              styles={{ input: { border: 'solid 1px #333' } }}
            />
            <AnimatedInput
              required
              name="LNAME"
              label="apellidos"
              dark={dark}
              styles={{ input: { border: 'solid 1px #333' } }}
            />
            <AnimatedInput
              required
              name="mail"
              type="mail"
              dark={dark}
              styles={{ input: { border: 'solid 1px #333' } }}
            />
          </Form>
          <Button type="submit">Suscribirse</Button>
          <Image src={image || "/images/consultoria.svg"} />
        </NewsletterStyled>
      </Test>
    )
  }
}

export default Newsletter
