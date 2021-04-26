import * as React from "react"
import * as IndexStyles from './../styles/index.module.scss'
import Layout from '../layouts/Layout'
import {graphql,Link,useStaticQuery} from 'gatsby'
import { Form, FormControl, FormGroup, FormLabel,Navbar,Container,Button, Jumbotron } from "react-bootstrap"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  const clients = useStaticQuery(graphql`
  query {
    allContentfulClient {
      edges {
        node {
          email
          personalmobile
          officemobile
          clientName
        }
      }
    }
    site {
      siteMetadata {
        title
        url
        keywords
        description
      }
    }
  }
`)
  return(
    <Layout>
      <Helmet>
        <title>VCardBook</title>
        <meta name="description" content={clients.site.siteMetadata.description} />
        <meta name="keywords" content={clients.site.siteMetadata.keywords} />
        <meta property="og:title" content={clients.site.siteMetadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:description" content={clients.site.siteMetadata.description} />
        <meta property="og:locale" content="en-US" />
        <meta property="og:url" content={clients.site.siteMetadata.url} />
        <link rel="canonical" href="" />
      </Helmet>
      <br />
      <Jumbotron>
        <h1>VCardBook</h1>
        <p>
          We create Portfolio Webistes and Business Cards for Professionals
        </p>
        <p>
          <Button variant="info">Request a site</Button>
          <a href="/Avani Shah/"><Button variant="info" className="ml-3" >View Sample</Button></a>
        </p>
      </Jumbotron>
      <h4>Request a custom site by filling this form</h4>
      <br></br>
      <Form>
        <FormGroup controlId="formBasicEmail">
          <FormLabel>Email Address</FormLabel>
          <FormControl type="email" placeholder="Enter Email"></FormControl>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </FormGroup>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <FormLabel>Facebook Link</FormLabel>
          <Form.Control size="md" type="text" placeholder="Facebook Link" />
        </Form.Group>
        <Form.Group>
          <FormLabel>Instagram Link</FormLabel>
          <Form.Control size="md" type="text" placeholder="Instagram Link" />
        </Form.Group>
        <Form.Group>
          <FormLabel>Twitter Link</FormLabel>
          <Form.Control size="md" type="text" placeholder="Twitter Link" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Layout>
  )
}

export default IndexPage