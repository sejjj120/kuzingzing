import React from "react";
import axios from "axios";
import baseUrl from "../config/url";

export default class LoginPage extends React.Component {
  handleLogin = async e => {
    e.preventDefault();
    // get user info from the form
    const userInfo = {
      username: e.target.elements.userId.value.trim(),
      password: e.target.elements.userPassword.value.trim()
    };

    // send the user info to the server to check if it is a authentic user
    const response = await axios.post(baseUrl + "/api/auth/login", userInfo);

    // save token to local storage.
    localStorage.setItem("userData", response);

    // Home으로 다시 돌아가기
    props.history.push("/");

    console.log("This is from local storage", localStorage.getItem("userData"));
  };

  render() {
    return (
      <div>
        <div className="container">
          <form className="loginForm" onSubmit={this.handleLogin}>
            <div className="form__item">
              <label htmlFor="userId">ID</label>
              <input id="userId" name="userId" type="text" />
            </div>
            <div className="form__item">
              <label htmlFor="userPassword">PASSWORD</label>
              <input id="userPassword" name="userPassword" type="text" />
            </div>
            <button className="form__button">LOG IN</button>
          </form>
        </div>
      </div>
    );
  }
}

// const LoginPage = () => (
//   <div>
//     <div className="container">
//       <form className="loginForm">
//         <div className="form__item">
//           <label htmlFor="userId">ID</label>
//           <input id="userId" name="userId" type="text" />
//         </div>
//         <div className="form__item">
//           <label htmlFor="userPassword">PASSWORD</label>
//           <input id="userPassword" name="userPassword" type="text" />
//         </div>
//         <button className="form__button">LOG IN</button>
//       </form>
//     </div>
//   </div>
// );

// export default LoginPage;
