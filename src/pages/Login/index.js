import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userLogin, setuserLogin] = useState({ userName: "", passWord: "" });
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserLogin({
      ...userLogin,
      [name]: value,
    });
    console.log("userLogin", userLogin);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    if (
      userLogin.userName === "thanhson" &&
      userLogin.passWord === "thanhson123"
    ) {
      alert("Đăng nhập thành công");
      navigate('/');
      localStorage.setItem('userLogin', JSON.stringify(userLogin))
    } else {
      alert("Đăng nhập không thành công");
      return;
    }
  };
  
  return (
    <form className="container" onSubmit={handleLogin} >
      <h1 className="display-4"> Login</h1>
      <div className="form-group">
        <p>UserName</p>
        <input
          name="userName"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          name="passWord"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" > Đăng Nhập</button>
      </div>
    </form>
  );
}