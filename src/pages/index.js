import * as React from "react"
import * as IndexStyles from './../styles/index.module.scss'
import {graphql,Link,useStaticQuery} from 'gatsby'
import { Helmet } from "react-helmet"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

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
    <div>
      <Navbar />
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
      <div className="container">
        <div className="row">
        <div className="col-12">
        <div className="jumbotron bg-transparent" className={IndexStyles.jumb}>
        <h1 className={IndexStyles.heading}>VCardBook</h1><br></br>
        <span className={IndexStyles.description}><p className="lead"><strong>Create your Personal Business Site and share your automatically generated vcf card</strong></p></span>
        <p className="lead mt-4">
          <Link className="btn btn-primary btn-lg mt-5" className={IndexStyles.pagebutton} to="Zaheer Khanzada" target="_blank" role="button">View Sample</Link>
        </p>
        </div>
        </div>
        </div><br></br><br></br>
        <form method="post" action="https://formspree.io/f/xjvjwpvz">
          <div className="form-group">
              <h1 className="text-white">Request a Personal site</h1>
              <h5>We will get in touch with you shortly by Email</h5><br></br>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email address" name="_replyto" required></input>
          </div>
          <input type="submit" className="btn btn-outline-light btn-lg" value="Request"></input>
        </form>
        <Footer />
        </div>
      </div>
  )
}

export default IndexPage