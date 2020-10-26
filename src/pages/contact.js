import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SunsetContact from "../components/sunsetContact"
import SunsetFAQ from "../components/sunsetFAQ"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  
  return (
    <Layout title={siteTitle}>
      <SEO title="Contact Us"/>

      <article className="post-content page-template no-image">
        <div className="post-content-body contactContent">
        	<h1>Contact Us</h1>
          <h2>
            We'd love to hear from you regarding screenings or other enquiries. Please fill out the contact form and we will get in touch with you as soon as possible. We can also be reached directly through our phone numbers and email.
          </h2>
          <h2>
            Dont forget to check our FAQ below; we’ve been operating for 3 years so we have a good grasp on most of the things you need to know.
          </h2>
        </div>
      </article>

      <SunsetContact />

      <SunsetFAQ />

    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactIndex props data={data} />
    )}
  />
)
