import React from 'react'
import 'normalize.css'
import Helmet from 'react-helmet'
import Logo from '../components/logo'


class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{this.props.title}</title>
                    <meta name="description" content={this.props.description} />
                    <meta name="keywords" content={this.props.keywords} />
                    <meta property="og:title" content={this.props.title} />
                    <meta property="og:description" content={this.props.description} />
                    <meta property="og:image" content={this.props.image} />
                </Helmet>
                <div>
                    <Logo>DR</Logo>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Welcome;