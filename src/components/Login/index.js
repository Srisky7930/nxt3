import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginMainContainer,
  LoginContainer,
  LoginForm,
  LabelText,
  InputText,
  FormCard,
  ImageLogo,
  LoginButton,
  CheckBoxContainer,
  CheckBox,
  ImageContainer,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    showText: true,
    username: '',
    password: '',
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      errorMsg,
    })
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      showText: !prevState.showText,
    }))
  }

  render() {
    const {showText, username, password, errorMsg} = this.state
    const showPassword = showText ? 'password' : 'text'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginMainContainer>
        <LoginContainer>
          <LoginForm onSubmit={this.onSubmitLoginForm}>
            <ImageContainer>
              <ImageLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="a"
              />
            </ImageContainer>
            <FormCard>
              <LabelText htmlFor="username"> USERNAME </LabelText>
              <InputText
                id="username"
                value={username}
                placeholder="Username"
                type="text"
                onChange={this.onChangeUserName}
              />
            </FormCard>
            <FormCard>
              <LabelText htmlFor="password"> PASSWORD </LabelText>
              <InputText
                id="password"
                placeholder="Password"
                value={password}
                type={showPassword}
                onChange={this.onChangePassword}
              />
            </FormCard>
            <CheckBoxContainer>
              <CheckBox id="showPassword" type="checkbox" />
              <LabelText
                value="true"
                htmlFor="showPassword"
                onClick={this.onClickShowPassword}
              >
                Show Password
              </LabelText>
            </CheckBoxContainer>
            <LoginButton type="submit"> Login </LoginButton>
            <ErrorMsg> {errorMsg} </ErrorMsg>
          </LoginForm>
        </LoginContainer>
      </LoginMainContainer>
    )
  }
}

export default Login
