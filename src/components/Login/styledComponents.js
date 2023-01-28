import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageLogo = styled.img`
  height: 40px;
  width: 200px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 200px;
    margin-bottom: 30px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  height: 400px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const LabelText = styled.label`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 3px;
`

export const InputText = styled.input`
  height: 40px;
  width: 300px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 300px;
    border: 1px solid #cccccc;
    border-radius: 3px;
    padding-left: 15px;
  }
`

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border-width: 0px;
  height: 30px;
  width: 300px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
`

export const CheckBox = styled.input``

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
`
