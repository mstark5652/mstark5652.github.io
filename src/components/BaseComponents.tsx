

import * as React from "react"
import { Link } from "react-router-dom"


export class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <div className="app-content">{this.props.children}</div>
            </div>
        )
    }
}

export interface LinkWrapperProps extends React.ReactPropTypes { to: string }

export class LinkWrapper extends React.Component<LinkWrapperProps> {
    render() {
        const Component = this.props.to ? Link : 'a'
        return (
            <Component {...this.props}>
                {this.props.children}
            </Component>
        )
    }
}

{/* <LinkWrapper to={disabled ? null : `/item/${id}`} className="item">
// item content
</LinkWrapper> */}


// Error Pages


export class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="not-found">
                <h2>404</h2>
                <h4>Page not found!</h4>
                <br /><br />
                <Link to="/">Return home</Link>
            </div>
        )
    }
}


export class ErrorPage extends React.Component {
    render() {
        return (
            <div className="error-page">
                <h4>Something went wrong! Please try again later.</h4>
                <br /><br />
                <Link to="/">Return home</Link>
            </div>
        )
    }
}