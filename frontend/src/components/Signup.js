import React from "react";
import axios from "axios";
import { corsProxy, baseUrl } from "../config/url";
const url = corsProxy + baseUrl;

export default class Signup extends React.Component {
  handleSignup = async e => {
    e.preventDefault();
    const userInfo = {
      username: e.target.elements.userId.value.trim(),
      password: e.target.elements.userPassword.value.trim(),
      email: e.target.elements.userEmail.value.trim()
    };

    // 서버에 유저 생성 요청 보내기
    try {
      const response = await axios.post(url + "/api/auth/register", userInfo);
      console.log(response);
      localStorage.setItem("userData", response);
      this.props.history.push("/");
      console.log(
        "This is from local storage",
        localStorage.getItem("userData")
      );
    } catch (err) {
      console.log(err);
    }

    // response.user = '등록한 사용자에 대한 정보	JSON'
    // response.token = '사용자의 토큰 값	string'

    // Home으로 다시 돌아가기
  };

  render() {
    return (
      <div>
        <div className="container">
          <form className="loginForm" onSubmit={this.handleSignup}>
            <div className="form__item">
              <label htmlFor="userId">ID</label>
              <input id="userId" name="userId" type="text" />
            </div>
            <div className="form__item">
              <label htmlFor="userPassword">PASSWORD</label>
              <input id="userPassword" name="userPassword" type="text" />
            </div>
            <div className="form__item">
              <label htmlFor="userEmail">E-MAIL</label>
              <input id="userEmail" name="userEmail" type="email" />
            </div>
            <button className="form__button">LOG IN</button>
          </form>
        </div>
      </div>
    );
  }
}
