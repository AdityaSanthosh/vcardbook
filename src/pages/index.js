import * as React from "react"
import * as IndexStyles from './../styles/index.module.scss'
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
    <div className="container" className={IndexStyles.homepage}>
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
      <div>
        <h1>VCardBook</h1>
        <h2>Create your Personal Portfolio Site</h2>
        <h2>Request a Personal Site Now!</h2>
        <form method="post" action="#">
          <div className="container">
              <h2>Request a Personal site</h2>
              <p>We will get in touch with you shortly by Email</p>
          </div>
          <div className="container">
            <input type="text" placeholder="Email address" name="mail" required></input>
          </div>
          <div className="container">
              <input type="submit" value="Subscribe"></input>
          </div>
        </form>
        </div>
      </div>
  )
}

export default IndexPage