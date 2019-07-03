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
		<div className="font-body w-screen text-white">
			<Header expandByDefault={expandByDefault} />
			<div
			  className="m-0 h-full bg-darkbg md:text-right flex-grow md:justify-center pt-6 md:pt-0 p-6"
			>
				  <main className="md:flex md:justify-center md:flex-col max-w-4xl md:absolute md:inset-y-0 md:right-0 md:mr-5" style={{height:"100%"}}>{children}</main>
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
