import addToMailchimp from 'gatsby-plugin-mailchimp'
import Input from './forms/input'
import React from "react"
import Button from './forms/submit-button'


// reference: https://github.com/jlengstorf/strapi-gatsby/blob/603f7009808260dcd145a1cbbba34cd411bf3353/site/src/components/newsletterSignup.js

export default class IndexPage extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = (e) => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        });
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', this.state);

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`);

                if (result !== 'success') {
                    throw msg;
                }
                alert(msg);
            })
            .catch((err) => {
                console.log('err', err);
                alert(err);
            });
    }

    render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <Input type="name" name="name" placeholder="Your name" onChange={this._handleChange} />
        <Input type="email" name="email" placeholder="Your email" onChange={this._handleChange} />
        <Button type="submit" buttonLabel="Get Started" />
      </form>
    )
  }
}