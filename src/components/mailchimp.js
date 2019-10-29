import addToMailchimp from 'gatsby-plugin-mailchimp'
import Input from './forms/input'
import React from "react"
import Button from './forms/submit-button'


export default class MyGatsbyComponent extends React.Component {
    state = {
        name: null,
        email: null,
      }
    
      _handleChange = e => {
        console.log({
          [`${e.target.email}`]: e.target.value,
        })
        this.setState({
          [`${e.target.email}`]: e.target.value,
        })
      }
    
      _handleSubmit = e => {
        e.preventDefault()
    
        console.log("submit", this.state)
    
        addToMailchimp(this.state.email, this.state)
          .then(({ msg, result }) => {
            console.log("msg", `${result}: ${msg}`)
    
            if (result !== "success") {
              throw msg
            }
            alert(msg)
          })
          .catch(err => {
            console.log("err", err)
            alert(err)
          })
      }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        
        <Input type="email" name="email" id="email" placeholder="email" onChange={this._handleChange} />
        <Button type="submit" buttonLabel="Get Started" />
      </form>
    )
  }
}