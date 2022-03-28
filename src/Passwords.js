import {Component} from 'react'

class Passwords extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordDetails: [],
  }

  onWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPassword = () => {
    const {websiteInput, usernameInput, passwordInput} = this.state
    const passwordDetails = {
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
      passwordDetails: [...prevState.passwordDetails, passwordDetails],
    }))
  }

  render() {
    return (
      <div>
        <img
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <img
          alt="password manager"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
        />
        <h1>Add New Password</h1>
        <form onSubmit={this.onAddPassword}>
          <img
            alt="website"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
          />
          <input
            type="text"
            placeholder="Enter Website"
            onChange={this.onWebsiteInput}
          />
          <img
            alt="username"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
          />
          <input
            type="text"
            placeholder="Enter Username"
            onChange={this.onUsernameInput}
          />
          <img
            alt="password"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={this.onPasswordInput}
          />
          <button type="submit">Add</button>
        </form>
        <div>
          <h1>Your Passwords</h1>
          <p>0</p>
          <img
            alt="search"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
          />
          <input type="search" />
          <input id="check" type="checkbox" />
          <label htmlFor="check">Show passwords</label>
          <img
            alt="no passwords"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          />
          <p>No Passwords</p>
        </div>
      </div>
    )
  }
}
export default Passwords
