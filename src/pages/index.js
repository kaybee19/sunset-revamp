import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import covidImg from "../images/covid1.png"


import SunsetHome from "../components/sunsetHome"
import SunsetSlider from "../components/sunsetSlider"
import SunsetText from "../components/sunsetText"
import SunsetScreening from "../components/sunsetScreening"

import "../utils/normalize.css"
import "../utils/css/screen.css"


const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div className="indexCont">
      <Layout title={siteTitle} page='home' >
       <SEO title="Home" />
       <SunsetHome />
       <SunsetSlider />
       <div style={{ textAlign: 'center' }}>
         <img className="covidImg" src={covidImg} alt="covid-imgae"/>
       </div>
       <SunsetText />
       <SunsetScreening />
{/*        {data.site.siteMetadata.description && (
          <header className="page-head">
            <h2 className="page-head-title">
              {data.site.siteMetadata.description}
            </h2>
          </header>
        )}*/}


  {/*      <div className="post-feed">
          {posts.map(({ node }) => {
            postCounter++
            return (
              <PostCard
                key={node.fields.slug}
                count={postCounter}
                node={node}
                postClass={`post`}
              />
            )
          })}
        </div>*/}
      </Layout>
    </div>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
