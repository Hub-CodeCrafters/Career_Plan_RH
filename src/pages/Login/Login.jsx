import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../utils/generalUtils/isAuthenticated";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isAuthenticated(email, password).then((res) => {
      if (res) {
        navigate("/admin");
      } else {
        setError("Usuario o contraseña incorrectos");
        setTimeout(() => {
          setError("");
        }, 7000);
      }
    });
  };

  return (
    <div className={style.pageLogin}>
      <div className={style.portada}>
        <img
          className={style.img}
          src="https://www.esri.co/content/dam/esrisites/en-us/media/social-media/social-sharing-image-default.jpg"
          alt=""
        />
      </div>
      <form className={style.formulario} onSubmit={handleSubmit}>
        {error && <p className={style.error}>{error}</p>}
        <h1 className={style.title}>Login</h1>
        <div className={style.options}>
          <label htmlFor="email">Correo Electronico</label>
          <input
            className={style.optionInput}
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={style.options}>
          <label htmlFor="password">Password</label>
          <input
            className={style.optionInput}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className={style.Login} type="submit">
          Login
        </button>
        <Link to={"/"} className={style.link}>
          <button className={style.Login} >
            Vista de Usuario
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
