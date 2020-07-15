import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const Header = ({isMainPage,title}) => {

    const renderHeader = () => {

        return(
            <h1
            style={{
                ...scale(1.5),
                marginBottom: rhythm(1.5),
                marginTop: 0,
            }}
        >
            <Link
                style={{
                    boxShadow: `none`,
                    color: `inherit`,
                    fontFamily: 'Source Code Pro'
                }}
                to={`/`}
            >
                {title}
            </Link>
        </h1>
        )
    }

    const renderDenseHeader = () => {

        return(
            <h3
                style={{
                    fontFamily: `Montserrat, sans-serif`,
                    marginTop: 0,
                }}
            >
                <Link
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to={`/`}
                >
                    {title}
                </Link>
            </h3>
        )
    }

    // const renderTitle = () => {
    //     return (
    //         <h3
    //             style={{
    //                 fontFamily: `source sans pro, sans-serif`,
    //                 margin: 0,
    //             }}
    //         >
    //             <Link   style={{
    //                         boxShadow: `none`,
    //                         color: `inherit`,
    //                     }}
    //                     to={`/`}
    //             >
    //                 {props.title}
    //             </Link>
    //         </h3>
    //     )
    // }

    // const renderNavMenu = () => {

    //     return(
    //         <nav style={{display:'flex',alignItems:'center'}}>
    //                         <p
    //             style={{
    //             //     fontFamily: `Montserrat, sans-serif`,
    //                 marginTop: 0,
    //                 marginBottom: 0,
    //             }}
    //         >
    //             <Link   style={{
    //                         boxShadow: `none`,
    //                         color: `inherit`,
    //                     }}
    //                     to={`/projects`}
    //             >
    //                 projects
    //             </Link>
    //         </p>
    //         </nav>
    //     )
    // }

    return (
        <header style={{ backgroundColor: 'lightgrey',display:'flex',alignItems:'center',justifyContent:'space-between' }}>
            {/* {renderTitle()}
            {renderNavMenu()} */}
            { isMainPage ? renderHeader() : renderDenseHeader() }
        </header>

    );
}

export default Header;
