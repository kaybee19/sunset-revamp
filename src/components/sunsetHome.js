import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

function HOME({ sub, description, name, lang, meta, keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            sub
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;
  const metaSub = sub || site.siteMetadata.sub;

  return (
			<div id="home">
				<Link className="contactHome" to={`/contact`}>
					<p className="bookText" style={{ marginBottom: '1rem' }}>
						Interested in scheduling?
					</p>
					<p className="bookText" style={{ textDecoration: 'underline' }}>Book Now!</p>
				</Link>
				<header className="page-head">
					<h2 className="page-head-title">
						{metaDescription}
					</h2>
					<p className="subText">
						{metaSub}
					</p>
				</header>

			</div>
  )
}

HOME.defaultProps = {
  description: ``,
}

HOME.propTypes = {
  description: PropTypes.string,
}

export default HOME;