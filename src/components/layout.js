import React from "react"

import { rhythm } from "../utils/typography"

import Header from './Header'

const Layout = ({ location, title, children }) => {

    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
        >
            <Header title={title} location={location}/>
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()}, Built with
        {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </div>
    )
}

export default Layout
