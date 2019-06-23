/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, expandByDefault }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
		<div className="font-body flex flex-col md:flex-row w-screen">
			<Header expandByDefault={expandByDefault} />
			<div
			  style={{
				height:"100vh",
				margin: 0,
				padding: `0px 1.0875rem 1.45rem`,
				paddingTop: 0,
			  }}
			  className="bg-darkbg text-right flex-grow md:justify-center"
			>
				  <main className="md:flex md:justify-center md:flex-col" style={{height:"100%"}}>{children}</main>
			</div>
      </div>
    )}
  />
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	expandByDefault: PropTypes.bool
}

export default Layout
